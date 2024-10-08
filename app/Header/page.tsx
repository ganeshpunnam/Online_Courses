"use client"; // Ensures this is a Client Component

import { useState, useCallback } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="w-full bg-yellow-400 p-5">
      {/* Header container */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl hover:text-red-700">Ganesh</h2>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl" aria-label="Toggle Menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/Course" className="hover:text-blue-700">
            Course
          </Link>
          <Link href="/HtmlCompiler" className="py-2 hover:text-blue-700 w-full text-left pl-4" aria-label="HtmlCompiler">
            HtmlCompiler
          </Link>
          <Link href="/Certificate" className="hover:text-blue-700">
            Certificate
          </Link>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="flex flex-col items-start bg-yellow-400 mt-4 md:hidden">
          <Link href="/Course" className="hover:text-blue-700">
            Course
          </Link>
          <Link href="/HtmlCompiler" className="py-2 hover:text-blue-700 w-full text-left pl-4" aria-label="HtmlCompiler">
            HtmlCompiler
          </Link>
          <Link href="/Certificate" className="hover:text-blue-700">
            Certificate
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
