import React from "react";
import { useLoaderData } from "react-router-dom";

const PlantData = () => {
  const { plants: allPlant } = useLoaderData(); 

  if (!allPlant || allPlant.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <div className="w-[800px] mx-auto p-5">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Plant Care Tips
      </h1>

      <div className="space-y-6">
        {allPlant.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-green-50 rounded-2xl shadow-md p-5"
          >
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              {plant.plantName}
            </h2>

            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                <strong>Watering:</strong> {plant.watering}
              </li>
              <li>
                <strong>Sunlight:</strong> {plant.sunlight}
              </li>
              <li>
                <strong>Fertilizing:</strong> {plant.fertilizing}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantData;
