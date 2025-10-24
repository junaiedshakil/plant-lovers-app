import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useLoaderData, Link } from "react-router-dom";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const plant = useLoaderData(); 
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Consultation booked successfully! We'll contact you soon.");
    setFormData({ name: "", email: "" }); 
  };

  if (!plant) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-green-50">
        <p className="text-lg text-gray-700">Plant not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen bg-green-50">
      <Link
        to="/home"
        className="text-green-600 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="relative">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
            <FaStar className="text-yellow-100 mx-auto items-center" /> {plant.rating} / 5
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-green-800">
            {plant.plantName}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {plant.description || "No description available."}
          </p>
          <p className="text-sm text-green-600 font-semibold">
            Category: {plant.category} | Care Level: {plant.careLevel}
          </p>
          <p className="text-sm text-gray-600">
            Provider: {plant.providerName}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <span className="text-green-600 font-semibold">Price:</span>
              <p className="text-2xl font-bold text-green-700">
                ${plant.price}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <span className="text-green-600 font-semibold">Stock:</span>
              <p className="font-semibold">{plant.availableStock} available</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Book a Consultation
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Get expert advice tailored to your {plant.plantName}. Fill in the
          details below.
        </p>
        <form onSubmit={handleBookNow} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
          >
            Book Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default PlantDetails;
