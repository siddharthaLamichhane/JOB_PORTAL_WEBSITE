import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <h3 className="font-extrabold text-lg ">JobHunt</h3>
          <p className="text-base text-gray-600 font-medium">
            © {new Date().getFullYear()} JobHunt. All rights reserved.
          </p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-blue-700 transition-colors duration-200"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
