"use client"; // Add this at the top to make this a Client Component

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu

const Page: React.FC = () => {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false); // State to toggle the dropdown

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle dropdown

  return (
    <div className="w-full bg-yellow-400 p-5">
      {/* Header container */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl hover:text-red-700">Ganesh</h2>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex gap-4">
          <Link href="/Counter" className="hover:text-blue-700">
            Counter
          </Link>
          <Link href="/Course" className="hover:text-blue-700">
            Course
          </Link>
          <Link href="/Certificate" className="hover:text-blue-700">
            Certificate
          </Link>
          <button
            onClick={() => route.push("/Login")}
            className="hover:text-blue-700"
          >
            Login
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="flex flex-col items-start bg-yellow-400 mt-4 md:hidden">
          <Link href="/Counter" className="py-2 hover:text-blue-700 w-full text-left pl-4">
            Counter
          </Link>
          <Link href="/Course" className="py-2 hover:text-blue-700 w-full text-left pl-4">
            Course
          </Link>
          <Link href="/Certificate" className="py-2 hover:text-blue-700 w-full text-left pl-4">
            Certificate
          </Link>
          <button
            onClick={() => route.push("/Login")}
            className="py-2 hover:text-blue-700 w-full text-left pl-4"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
