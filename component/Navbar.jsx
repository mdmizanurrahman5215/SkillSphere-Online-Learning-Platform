"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock user data - replace with actual auth context/state management
  const user = {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    // Add actual logout logic here
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            <div className="text-2xl font-bold">⚡</div>
            <span className="text-2xl font-bold hidden sm:inline">
              SkillSphere
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="hover:text-blue-200 transition duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="hover:text-blue-200 transition duration-300 font-medium"
            >
              Courses
            </Link>
            <Link
              href="/profile"
              className="hover:text-blue-200 transition duration-300 font-medium"
            >
              My Profile
            </Link>
          </div>

          {/* Right side - Auth buttons/User menu */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded-lg transition"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <span className="hidden sm:inline text-sm font-medium">
                    {user.name}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg transition"
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 rounded-b-lg transition font-medium"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex gap-3">
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="px-4 py-2 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition"
                >
                  Login
                </button>
                <button className="px-4 py-2 rounded-lg border-2 border-white text-white font-semibold hover:bg-blue-700 transition">
                  Register
                </button>
              </div>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-blue-700 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-blue-700">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="block px-3 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Courses
            </Link>
            <Link
              href="/profile"
              className="block px-3 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              My Profile
            </Link>

            {!isLoggedIn && (
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setIsLoggedIn(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex-1 px-4 py-2 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition"
                >
                  Login
                </button>
                <button className="flex-1 px-4 py-2 rounded-lg border-2 border-white text-white font-semibold hover:bg-blue-700 transition">
                  Register
                </button>
              </div>
            )}

            {isLoggedIn && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-4 px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
