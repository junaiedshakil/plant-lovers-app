import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "./assets/attachment_152183063.jpeg"; 
import { TiHeartFullOutline } from "react-icons/ti";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Plant Lovers Logo"
                className="h-10 w-10 rounded-full shadow-lg"
              />
              <h3 className="text-xl font-bold text-green-200">Plant Lovers</h3>
            </div>
            <p className="text-sm text-green-300 leading-relaxed">
              Nurturing your green thumb with the finest indoor plants and
              expert care tips.
            </p>
          </div>

          <div>
            <h6 className="footer-title text-green-100 font-semibold mb-4">
              Services
            </h6>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  Advertisement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="footer-title text-green-100 font-semibold mb-4">
              Company
            </h6>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  Press kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="footer-title text-green-100 font-semibold mb-4">
              Legal
            </h6>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-green-200 hover:text-white transition-colors duration-200 inline-block"
                >
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-green-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a
              href=""
              className="text-green-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href=""
              className="text-green-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href=""
              className="text-green-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaYoutube size={24} />
            </a>
          </div>

          <p className="text-sm text-green-300 text-center md:text-right flex items-center">
            © 2025 Plant Lovers. All rights reserved. Made with
            <FaHeart className="text-red-500" /> for plant enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
