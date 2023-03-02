import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-300 shadow md:px-6 md:py-8 ">
      <div className="lg:w-4/5 w-11/12 m-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center justify-center md:justify-start mb-4 sm:mb-0"
          >
            <div className="flex items-center text-primary">
              <p className="text-[40px]  font-bold ">Note Task</p>
            </div>
          </a>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm text-secondary sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-secondary sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-secondary text-center sm:text-left ">
          © Note Task . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
