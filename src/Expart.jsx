import React, { use } from 'react';
const plantExpart = fetch("./plantExpart.json").then((res)=>res.json())
const Expart = () => {
    const expartData = use(plantExpart);
   
    return (
      <div className="w-[900px] mx-auto p-5">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Meet Our Plant Experts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {expartData.map((expert) => (
            <div
              key={expert.expertId}
              className="bg-green-50 rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-32 h-32 object-cover rounded-full mb-3"
              />
              <h2 className="text-xl font-semibold text-green-800">
                {expert.name}
              </h2>
              <p className="text-gray-700 mt-1">{expert.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Expart;