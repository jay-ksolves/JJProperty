import React from "react";

const Footer = () => {
  return (
    <div className="container py-20">
      <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-8/12">
          <h3 className="font-bold text-3xl text-gray-600 mb-4 flex ">
            <a href="https://JJ Property.com" target="_blank" className="block">
              <img src="logo.png" className="w-10 mr-2" />
            </a>
            JJ Property
          </h3>

          <div className="flex text-gray-500 uppercase text-sm">
            <a href="/" className="mr-2 hover:text-gray-600 hover:border-b hover:border-orange-600">
              Home
            </a>
            <a href="/about" className="mr-2 hover:text-gray-600 hover:border-b hover:border-orange-600">
              About Us
            </a>
            <a href="/services" className="mr-2 hover:text-gray-600 hover:border-b hover:border-orange-600">
             Services
            </a>
            <a href="/contact" className="mr-2 hover:text-gray-600 hover:border-b hover:border-orange-600">
              Contact Us
            </a>
           
          </div>
        </div>
        {/* <div className="p-5 sm:w-4/12">
          <h3 className="font-medium text-lg text-indigo-600 mb-4">
            Subscribe to our Newsletter
          </h3>
          <form className="mt-4">
            <input
              className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="username@email.com"
            />
          </form>
        </div> */}
      </div>
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <p>© Copyright 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
