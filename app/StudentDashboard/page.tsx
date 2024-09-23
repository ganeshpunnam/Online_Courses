"use client";
import React, { useState } from 'react';
import JavaScript from '../JavaScript/page';
import Link from 'next/link';
import Header from '../Header/page';

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const dummyRoadmap = [
    { id: 1, stage: 'Learn HTML & CSS', status: 'Completed' },
    { id: 2, stage: 'Build a Portfolio', status: 'In Progress' },
  ];

  const dummyQuizzes = [
    { id: 1, title: 'JavaScript Basics', score: '80%' },
    { id: 2, title: 'React Introduction', score: '90%' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <div>
            <div className='flex justify-between items-center'>
              <h2 className="text-xl">Courses</h2>
              <Link className='text-red-500' href={"/JavaScriptCompiler"}>
                Play Ground
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
              {dummyRoadmap.map(item => (
                <li key={item.id} className="py-2">
                  <span>{item.stage} - {item.status}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'quiz':
        return (
          <div>
            <h2 className="text-xl font-bold">Quizzes</h2>
            <ul>
              {dummyQuizzes.map(quiz => (
                <li key={quiz.id} className="py-2">
                  <span>{quiz.title} - Score: {quiz.score}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at the top */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-800 text-white p-5">
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
        <main className="flex-1 p-5 bg-gray-100">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
