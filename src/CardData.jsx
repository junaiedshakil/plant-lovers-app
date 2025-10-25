import React, { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";


const CardData = ({ data }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Link to={`/details/${data.plantId}`}>
        <div className="bg-green-50 rounded-2xl shadow-md p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="w-full h-48 relative">
            {loading && (
              <div className="absolute inset-0 flex justify-center items-center bg-green-50 rounded-xl">
                <span className="loading loading-ring loading-xl text-green-600"></span>
              </div>
            )}
            <img
              src={data.image}
              alt={data.plantName}
              className={`w-full h-48 object-cover rounded-xl mb-3 transition-opacity duration-500 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setLoading(false)}
            />
          </div>

          <h2 className="text-xl font-semibold text-green-800">
            {data.plantName}
          </h2>

          <div className="flex items-center justify-center gap-1 text-yellow-500 mt-1">
            <Star size={18} />
            <span className="text-sm font-medium text-gray-700">
              {data.rating}
            </span>
          </div>

          <p className="text-lg font-bold text-green-700 mt-2">${data.price}</p>

          <Link
            to={`/details/${data.plantId}`}
            className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default CardData;
