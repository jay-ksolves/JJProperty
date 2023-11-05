import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto py-12 mt-28">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Welcome to JJ Property
      </h1>
      <p className="text-gray-600">
        Your trusted partner for all your real estate needs. Whether you're
        buying, selling, renting, or seeking expert advice, we're here to assist
        you.
      </p>
      <p className="text-gray-600">
        Explore our services, view available properties, or get in touch with us
        to learn more. We're dedicated to making your real estate experience
        seamless.
      </p>

      <div className="container mx-auto py-12 mt-8 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img
            src="https://picsum.photos/600"
            alt="image"
            className="rounded-full img img-thumbnail"
          />

          <div className="mt-4 md:ml-4">
            <p className="p-2 text-gray-600 font-extrabold">
              Find Your Perfect Property with JJ Property
            </p>
            <img
              src="profile.png"
              alt="image"
              className="rounded-full img img-thumbnail w-40 mx-auto"
            />
            <p>
              <strong>Name:</strong> Mr. Satish Kumar
            </p>
            <p>
              <strong>Contact :</strong> 91+ 9953930027 , 91+ 767898950
            </p>
            <p>
              <strong>Whatsapp: </strong> 9953930027
            </p>
            <p>
              <strong>Email Id: </strong> satishkumar@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-600">
          JJ Property offers a range of services to meet your real estate needs:
        </p>
        <a
          href="/services"
          className="text-gray-900 hover:font-extrabold hover:border-b hover:border-orange-600"
        >
          View Services
        </a>
        <ul className="list-disc pl-6 mt-4">
          <li className="text-gray-600">
            <strong>Buying Services:</strong> We help you find your dream home
            or property investment.
          </li>
          <li className="text-gray-600">
            <strong>Selling Services:</strong> List your property, and we'll
            handle the sale process for you.
          </li>
          <li className="text-gray-600">
            <strong>Rental Services:</strong> Find the perfect rental property
            or let us manage your rental property.
          </li>
          <li className="text-gray-600">
            <strong>Consultation Services:</strong> Get expert advice on
            property investments and market analysis.
          </li>
          <li className="text-gray-600">
            <strong>Property Management Services:</strong> We take care of
            managing your properties, so you don't have to worry.
          </li>
        </ul>
      </div>

      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Explore Available Properties
        </h2>
        <p className="text-gray-600">
          Browse our listings and discover the perfect property for you.
        </p>
        <a
          href="/properties"
          className="text-gray-900 hover:font-extrabold hover:border-b hover:border-orange-600"
        >
          View Properties
        </a>
      </div>
    </div>
  );
};

export default Home;
