import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    if (!user) {
      toast.error("No user logged in.");
      return;
    }
    updateProfile(user, { displayName, photoURL })
      .then(() => {
        toast.success("Profile updated successfully");
      })
      .catch((e) => toast.error(e.message));
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700">You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center space-y-6">
       
        <img
          src={user?.photoURL || "https://via.placeholder.com/100?text=User"}
          alt="User Photo"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-green-200"
        />

       
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-green-700">
            {user?.displayName || "No Name Set"}
          </h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>

       
        <div className="space-y-4 w-full">
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter new display name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="url"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter new photo URL"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleUpdate}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-200 font-semibold"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
