"use client"
import React, { useState } from 'react';

// Define the roadmap steps using an interface
interface Step {
  title: string;
  description: string;
}

// Initialize the steps using the Step interface
const roadmapSteps: Step[] = [
  { title: 'Learn the Fundamentals', description: 'Understand variables, data types, and functions.' },
  { title: 'DOM Manipulation', description: 'Learn how to interact with the DOM using JavaScript.' },
  { title: 'Asynchronous JavaScript', description: 'Master promises, async/await, and APIs.' },
  { title: 'ES6+ Features', description: 'Explore new JavaScript features like destructuring and arrow functions.' },
  { title: 'Object-Oriented Programming', description: 'Learn about classes, inheritance, and OOP design.' },
  { title: 'JavaScript Frameworks', description: 'Dive into React, Next.js, and TypeScript.' },
  { title: 'Version Control', description: 'Understand how to use Git for version control.' },
  { title: 'Testing', description: 'Write unit tests and debug your JavaScript code.' },
  { title: 'Build Projects', description: 'Apply your skills by building real-world applications.' },
];

// Functional component using React hooks
const VerticalStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Method to move to the next step
  const nextStep = () => {
    if (currentStep < roadmapSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Method to move to the previous step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">JavaScript Roadmap</h1>

      {/* Stepper Indicator - Vertical */}
      <div className="flex flex-col space-y-4 mb-6">
        {roadmapSteps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index === currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}
            >
              {index + 1}
            </div>
            <div className="flex-1">
              <h2 className={`text-lg font-semibold ${index === currentStep ? 'text-blue-600' : 'text-gray-700'}`}>
                {step.title}
              </h2>
              {index === currentStep && <p className="text-gray-600">{step.description}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className={`px-4 py-2 bg-gray-300 rounded ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            currentStep === roadmapSteps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentStep === roadmapSteps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VerticalStepper;
