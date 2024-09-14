"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import LoginModal from "../Login/page"; // Import the LoginModal component

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // For login modal

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

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
        <div className="hidden md:flex gap-4">
          <Link href="/Course" className="hover:text-blue-700">
            Course
          </Link>
          <Link href="/Certificate" className="hover:text-blue-700">
            Certificate
          </Link>
          <button onClick={openLoginModal} className="hover:text-blue-700" aria-label="Login">
            Login / Signup
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="flex flex-col items-start bg-yellow-400 mt-4 md:hidden">
          <Link href="/Counter" className="py-2 hover:text-blue-700 w-full text-left pl-4" aria-label="Counter">
            Counter
          </Link>
          <Link href="/Course" className="py-2 hover:text-blue-700 w-full text-left pl-4" aria-label="Course">
            Course
          </Link>
          <Link href="/Certificate" className="py-2 hover:text-blue-700 w-full text-left pl-4" aria-label="Certificate">
            Certificate
          </Link>
          <button onClick={openLoginModal} className="py-2 hover:text-blue-700 w-full text-left pl-4" aria-label="Login">
            Login / Signup
          </button>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
};

export default Header;
