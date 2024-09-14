"use client";
import React from "react";
import { FaLinkedin, FaArrowRight } from "react-icons/fa";
import { FiMail, FiLink } from "react-icons/fi";
import Header from "../Header/page";
import learningData from "../LearningData";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Minified React Component
const CoursePage: React.FC = () => {
  const router = useRouter();

  // Lazy-load the operation
  const handleOperation = React.useCallback(() => {
    router.push("/JavaScript");
  }, [router]);
  

  return (
    <div className="bg-black text-white flex flex-col gap-9 w-full">
      {/* Minified Header Component */}
      <Header />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb">
        <ol className="flex space-x-2 px-4">
          <li>
            <Link href="/Header" className="text-blue-500 hover:text-blue-700">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link href="/Course" className="text-blue-500 hover:text-blue-700">
              Course
            </Link>
          </li>
        </ol>
      </nav>

      {/* Introduction Section */}
      <div className="px-4 py-6 sm:px-6 sm:py-8 flex flex-col justify-center items-center gap-7 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">
          All in One, Preparation Hub to Ace
        </h1>
        <h1 className="text-3xl sm:text-5xl font-bold text-pink-500 mt-5">
          Frontend Technologies 🚀
        </h1>

        <p className="w-[90%] sm:w-[75%] text-center">
          Save your time and Find the Best Curated Resources to Prepare for all
          Frontend Technologies with well-structured topics.
        </p>

        {/* Minified and Defer Loading */}
        <button
          className="px-6 py-3 bg-blue-500 text-lg sm:text-xl font-bold rounded-full flex items-center gap-2"
          onClick={handleOperation}
        >
          Start Preparing Now <FaArrowRight />
        </button>

        {/* Social Share Icons */}
        <p>Share now</p>
        <div className="flex gap-3">
          {[
            { icon: <FaLinkedin size={22} color="#0077B5" />, key: "linkedin" },
            { icon: <FiMail size={22} color="#0077B5" />, key: "mail" },
            { icon: <FiLink size={22} color="#0077B5" />, key: "link" },
          ].map(({ icon, key }) => (
            <div
              key={key}
              className="border-2 border-blue-900 rounded-full p-2"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Technology Overview Section */}
      <div className="px-4 py-6 sm:px-6 sm:py-8 flex flex-col justify-center items-center gap-7">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Prepare for All Frontend Technologies
        </h1>
        <p className="w-[90%] sm:w-[65%] text-center">
          Prepare for all major technologies and showcase your in-depth and
          end-to-end Frontend knowledge. You have the power to add more
          resources relevant to the topics.
        </p>
      </div>

      {/* Learning Data Section */}
      <div className="px-4 py-6 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] sm:w-[80%] lg:w-[70%] mx-auto">
        {learningData.map((data) => (
          <div
            key={data.index}
            className="p-4 bg-gray-800 rounded-lg mb-4 text-center flex flex-col gap-4 items-center"
          >
            <div className="flex justify-center items-center">{data.icon}</div>
            <h2 className="text-xl sm:text-2xl font-semibold">{data.name}</h2>
            <p className="text-sm text-gray-400">
              Topics: {data.topics.join(", ")}
            </p>
            <p className="text-sm text-white py-1 px-4 bg-gray-700 rounded-lg font-medium">
              Total Topics: {data.totalTopics}
            </p>
            <p className="text-sm text-white py-1 px-4 bg-gray-700 rounded-lg font-medium">
              Total Resources: {data.totalResources}
            </p>

            <div className="mt-auto flex justify-center">
              <button
                className="px-3 py-1 border-2 border-blue-900 text-sm font-medium rounded-full flex items-center gap-2 text-blue-400"
                onClick={handleOperation}
              >
                Start Now <FaArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
