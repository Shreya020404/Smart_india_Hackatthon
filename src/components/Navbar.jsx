"use client";

import { useState, useEffect } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import LogoutButton from "@/components/Logout";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

const Navbar = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  


  return (
    <div className="relative flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900 text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/course logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <Link href="/dashboard">
          <span className="font-bold text-xl dark:text-gray-200">Course Compass</span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg text-black dark:text-gray-800"
        />
      </div>

      {/* Notification & User Profile */}
      <div className="flex space-x-4 items-center">
        <FaBell className="w-6 h-6 cursor-pointer dark:text-gray-200" />

        

        {/* Profile Icon */}
        <div className="relative">
          {user?.image ? (
            <Image
              src={user?.image}
              alt={user?.name}
              width={36}
              height={36}
              className="rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
          ) : (
            <FaUserCircle
              className="w-8 h-8 cursor-pointer dark:text-gray-200"
              onClick={toggleDropdown}
            />
          )}

          {/* Dropdown for Logout Button */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-10">
              <div className="p-4">
                <LogoutButton />
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
