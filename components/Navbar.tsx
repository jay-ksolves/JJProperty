import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8 ">
          <a className="logo" href="/">
            <h3 className="font-bold text-2xl flex ">
              {" "}
              <img
                src="logo.png"
                alt="logo"
                height=""
                width="40px"
                className=""
              />
              <span className="ml-1">JJ Property</span>
            </h3>
          </a>
          <input type="checkbox" id="check" />

          <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
            <li className="">
              <a
                href="/"
                className="  hover:text-gray-600 hover:border-b hover:border-orange-600 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className=" hover:text-gray-600 hover:border-b hover:border-orange-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/properties"
                className=" hover:text-gray-600 hover:border-b hover:border-orange-600"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="/services"
                className=" hover:text-gray-600 hover:border-b hover:border-orange-600"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className=" hover:text-gray-600 hover:border-b hover:border-orange-600"
              >
                Contact
              </a>
            </li>

            <label htmlFor="check" className="close-menu ">
              X
            </label>
          </span>

          <label htmlFor="check" className="open-menu">
            Menu
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
