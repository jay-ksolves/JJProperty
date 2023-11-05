import React from "react";
import { serviceCategories } from "../../constants/index";

const Services = () => {
  return (
    <section className="container py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600">{category.description}</p>
              <div className="mt-4">
                {category.img && (
                  <img
                    src={category.img}
                    alt="Image"
                    className="w-60 h-60 mx-auto rounded-full p-2  img img-thumbnail hover:animate-pulse" 
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;