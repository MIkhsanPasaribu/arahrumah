import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ArahRumah</h3>
            <p className="text-dark-gray mb-4">
              Your trusted partner for finding the perfect property in
              Indonesia.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-emerald-green transition duration-200"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-emerald-green transition duration-200"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zm4.597 7.812l-.012.016c-.31.42-.474.697-.347 1.091.127.394.47.61.817.705.344.093.535.145.535.233 0 .171-.26.295-.58.295-.36 0-.742-.052-1.1-.16v.77c.314.088.662.135 1.043.135.659 0 1.357-.235 1.357-1.059 0-.674-.545-.835-1.036-1-.345-.115-.517-.193-.517-.377 0-.12.104-.246.366-.246.295 0 .668.05.987.154l.255-.716c-.323-.14-.72-.196-1.04-.196-.637 0-1.297.23-1.297 1.058 0 .25.048.42.127.566l.234.307zm-6.18.351l.996 3.507h.893l1.705-4.732h-.961l-.982 3.18-.996-3.18h-.893l-.961 3.18-.996-3.18h-.996l1.684 4.732h.893l.996-3.507zm9.963 3.507c-.893 0-1.576-.569-1.576-1.516 0-.909.683-1.495 1.576-1.495.893 0 1.576.586 1.576 1.495 0 .947-.683 1.516-1.576 1.516z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-emerald-green transition duration-200"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-dark-gray hover:text-emerald-green transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-dark-gray hover:text-emerald-green transition duration-200"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-dark-gray hover:text-emerald-green transition duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-dark-gray hover:text-emerald-green transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properties?type=house"
                  className="text-dark-gray hover:text-emerald-green transition duration-200"
                >
                  Houses
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=apartment"
                  className="text-dark-gray hover:text-emerald-green transition duration-200"
                >
                  Apartments
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=land"
                  className="text-dark-gray hover:text-emerald-green transition duration-200"
                >
                  Land
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=commercial"
                  className="text-dark-gray hover:text-emerald-green transition duration-200"
                >
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-dark-gray">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 mt-0.5 text-emerald-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Jalan Sudirman No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-emerald-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+62 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-emerald-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@arahrumah.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-light-gray text-center text-dark-gray">
          <p>
            &copy; {new Date().getFullYear()} ArahRumah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
