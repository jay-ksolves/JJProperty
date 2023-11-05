import React from "react";
import { propertyData } from "../../constants/index";

const Properties = () => {
  return (
    <div className="container mx-auto text-center my-20 mt-28">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 " >
        Available Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {propertyData.map((property, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={property.img}
              alt={property.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {property.title}
            </h3>
            <p className="text-gray-600">{property.description}</p>
            <div className="mt-4">
              <strong>Price: {property.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
