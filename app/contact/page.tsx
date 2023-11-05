import React from "react";
import { contactInfo } from "../../constants/index";
const Contact = () => {
  return (
    <div className="container mx-auto py-12 mt-20">
      <h2 className="text-4xl font-bold  font-mono text-center text-gray-800 mb-8">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Contact Information
          </h3>
          <p className="text-gray-600">
            Feel free to reach out to us using the following contact details:
          </p>
          <ul className="list-disc pl-6 mt-2">
            {contactInfo.map((info, index) => (
              <li key={index}>
                <strong>{info.label}</strong> {info.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Send us a Message
          </h3>
          <form
            action="mailto:SandC@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded w-full px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border rounded w-full px-4 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
