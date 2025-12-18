import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useData } from "../Context/DataContext";

const Navbar = ({ location, getLocation }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { getCartCount } = useData();

  return (
    <div className="bg-white py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Logo section */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl tracking-wide">
              <span className="text-red-500 font-serif">Z</span>aptro
            </h1>
          </Link>

          {/* Location dropdown */}
          <div
            className="flex gap-1 cursor-pointer text-gray-700 items-center relative group"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <FiMapPin className="text-red-500" />
            <span className="font-semibold text-sm sm:text-base">
              {location ? (
                <div className="leading-tight">
                  <p>{location.country}</p>
                  <p>{location.state || location.city || ""}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />

            {openDropdown && (
              <div className="w-[260px] shadow-xl z-50 bg-white absolute top-12 left-0 border border-gray-200 p-5 rounded-xl transition-all duration-300">
                <h1 className="font-semibold mb-4 text-lg flex justify-between">
                  Change Location{" "}
                  <span
                    className="cursor-pointer hover:text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(false);
                    }}
                  >
                    <CgClose />
                  </span>
                </h1>

                {/* Detect My Location button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    getLocation();
                    setOpenDropdown(false);
                  }}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-all duration-300 w-full shadow-md"
                >
                  Detect My Location
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Menu section */}
        <nav className="flex gap-6 items-center">
          <ul className="flex gap-5 items-center text-lg font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full transition-all duration-300 
                  ${
                    isActive
                      ? "text-red-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-red-500"
                      : "text-gray-700 hover:bg-gray-100 hover:shadow-md hover:text-gray-900"
                  }`
                }
              >
                <li>{item.label}</li>
              </NavLink>
            ))}
          </ul>

          {/* Cart */}
          <Link
            to={"/cart"}
            className="relative transform transition-transform duration-300 hover:scale-110"
          >
            <IoCartOutline className="h-7 w-7 text-gray-700 hover:text-red-500 transition-colors duration-300" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm shadow-md">
              {getCartCount()}
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
