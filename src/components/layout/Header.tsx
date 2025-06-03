"use client"

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // For MVP, we'll use a simple state to check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl">ArahRumah</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="hover:text-emerald-green transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="hover:text-emerald-green transition duration-200"
            >
              Properties
            </Link>
            <Link
              href="/about"
              className="hover:text-emerald-green transition duration-200"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-emerald-green transition duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="hover:text-emerald-green transition duration-200"
                >
                  Dashboard
                </Link>
                <button
                  className="bg-emerald-green hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition duration-200"
                  onClick={() => setIsLoggedIn(false)} // Simplified logout for MVP
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="hover:text-emerald-green transition duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-emerald-green hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition duration-200"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block hover:text-emerald-green transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="block hover:text-emerald-green transition duration-200"
            >
              Properties
            </Link>
            <Link
              href="/about"
              className="block hover:text-emerald-green transition duration-200"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block hover:text-emerald-green transition duration-200"
            >
              Contact
            </Link>

            {/* Auth Links (Mobile) */}
            <div className="pt-4 border-t border-light-gray">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block hover:text-emerald-green transition duration-200"
                  >
                    Dashboard
                  </Link>
                  <button
                    className="mt-2 w-full bg-emerald-green hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition duration-200"
                    onClick={() => setIsLoggedIn(false)} // Simplified logout for MVP
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="block hover:text-emerald-green transition duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/register"
                    className="mt-2 block text-center bg-emerald-green hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition duration-200"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
