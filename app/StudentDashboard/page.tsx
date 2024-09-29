"use client";
import React, { useState } from 'react';
import JavaScript from '../JavaScript/page';
import Link from 'next/link';
import Header from '../Header/page';
import Footer from '../Footer/page';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import Quiz from '../Quiz/page'; 
import Roadmap_JavaScrit from '../Roadmap_JavaScrit/page'

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('courses');

 

  const renderContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <div className='h-[900px]'>
            <div className='flex justify-between items-center '>
              <h2 className="text-xl text-yellow-300 font-bold">Courses</h2>
              <Link className='text-red-500 font-semibold' href={"/JavaScriptCompiler"}>
                <div className='flex items-center gap-2'>
                  <CodeBracketIcon className="h-7 w-7 text-red-700" />
                  Play Ground
                </div>
              </Link>
            </div>
            <JavaScript />
          </div>
        );
      case 'roadmap':
        return (
          <div>
            <h2 className="text-xl font-bold">Roadmap</h2>
            <ul>
             <Roadmap_JavaScrit/>
            </ul>
          </div>
        );
      case 'quiz':
        return (
          <div>
            <h2 className="text-xl font-bold">Quizzes</h2>
            <Quiz />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Header at the top */}
      <Header />

      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-gray-800 text-white p-5 md:p-5">
          <h2 className="text-2xl font-bold mb-5">Student Dashboard</h2>
          <ul>
            <li
              className={`cursor-pointer py-2 ${activeTab === 'courses' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('courses')}
            >
              Courses
            </li>
            <li
              className={`cursor-pointer py-2 ${activeTab === 'roadmap' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('roadmap')}
            >
              Roadmap
            </li>
            <li
              className={`cursor-pointer py-2 ${activeTab === 'quiz' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('quiz')}
            >
              Quiz
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-5 bg-black">
          {renderContent()}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
