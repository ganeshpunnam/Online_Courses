"use client"; // Ensures this is a Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  // Update form data state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    if (isLogin) {
      // Example login logic
      if (formData.email === "ganesh@example.com" && formData.password === "ganesh123") {
        router.push("/Course"); // Redirect on successful login
        onClose(); // Close the modal
      } else {
        alert("Incorrect login details");
      }
    } else {
      // Example signup logic
      if (formData.name && formData.email && formData.password) {
        alert("Sign Up Success"); // Replace with actual signup logic
        onClose(); // Close the modal
      } else {
        alert("Please fill in all fields");
      }
    }
  };

  if (!isOpen) return null; // Don't render modal if not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <div className="flex justify-between mb-6">
          <button
            className={`font-bold text-lg ${isLogin ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-400"}`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button
            className={`font-bold text-lg ${!isLogin ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-400"}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none transition duration-150 ease-in-out"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none transition duration-150 ease-in-out"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none transition duration-150 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <button
          className="mt-4 w-full text-red-500 text-sm underline"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
