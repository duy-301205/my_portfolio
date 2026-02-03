import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMoon } from "react-icons/hi"; // Đừng quên: npm install react-icons

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-6 sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md">
      {/* Logo/Avatar nhỏ */}
      <Link to="/" className="group">
        <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-gray-700 group-hover:border-green-500 transition-all">
          <img
            src="https://via.placeholder.com/100"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Links điều hướng */}
      <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
        <Link to="/blog" className="hover:text-white transition">
          blog
        </Link>
        <Link to="/projects" className="hover:text-white transition">
          projects
        </Link>
        <Link to="/about" className="hover:text-white transition">
          about
        </Link>

        <div className="h-4 w-px bg-gray-800 mx-2"></div>

        <button className="text-xl hover:text-yellow-400 transition cursor-pointer">
          <HiOutlineMoon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
