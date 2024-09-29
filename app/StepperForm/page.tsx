"use client";
import React, { useState } from "react";
import Header from "../Header/page";
import { useRouter } from "next/navigation";

// Steps and their corresponding questions
const stepsWithQuestions = [
  {
    step: "Learning Approach",
    question: "What type of learning approach do you prefer for this course?",
    options: ["Project-based", "Game-based", "Lecture-based", "Textbook-based"],
  },
  {
    step: "Daily Time Commitment",
    question: "How much time are you willing to spend on the course each day?",
    options: ["30 minutes or less", "1 hour", "2–3 hours", "More than 3 hours"],
  },
  {
    step: "Preferred Assessments",
    question: "What kind of assessments do you feel most comfortable with?",
    options: [
      "Quizzes and multiple-choice questions",
      "Hands-on projects and assignments",
      "Practical exams or challenges",
      "Self-assessments and reflections",
    ],
  },
  {
    step: "Material Delivery",
    question: "How do you prefer to receive learning materials?",
    options: [
      "Video lectures and tutorials",
      "Downloadable study guides or textbooks",
      "Interactive exercises or simulations",
      "Discussions and group work",
    ],
  },
  {
    step: "Individual or Group Learning",
    question: "Would you prefer individual learning or collaborative projects with peers?",
    options: [
      "Working alone at my own pace",
      "Working in teams",
      "A balance between individual and group projects",
    ],
  },
  {
    step: "Content Delivery Style",
    question: "How do you prefer the course content to be delivered?",
    options: [
      "Smaller, bite-sized lessons",
      "Larger, comprehensive sessions",
      "Asynchronous",
      "Synchronous",
    ],
  },
  {
    step: "Progress Tracking",
    question: "How do you prefer to track your progress?",
    options: [
      "Regular quizzes and checkpoints",
      "Practical assignments",
      "Feedback from instructors and peers",
      "Self-tracking through journals or reflections",
    ],
  },
  {
    step: "Instructor Interaction",
    question: "What type of interaction do you expect from your instructor?",
    options: [
      "Regular, detailed feedback",
      "Occasional guidance",
      "Minimal interaction",
      "Frequent, real-time interaction",
    ],
  },
  {
    step: "Theory vs Practical",
    question: "How do you want to balance theory and practical application?",
    options: ["Mostly theory", "Equal balance", "Mostly practical"],
  },
  {
    step: "Self-Direction",
    question: "How self-directed do you want to be in this course?",
    options: [
      "Following a structured curriculum",
      "Some freedom to choose topics",
      "Exploring independently",
    ],
  },
  {
    step: "Gamified Learning",
    question: "Do you enjoy learning with gamified elements?",
    options: [
      "Yes, it's motivating",
      "No, prefer traditional learning",
      "I don't mind as long as it's effective",
    ],
  },
  {
    step: "Deadlines and Time Management",
    question: "How do you feel about deadlines and time management for course assignments?",
    options: ["Flexible deadlines", "Fixed deadlines", "A mix of flexible and fixed deadlines"],
  },
  {
    step: "Additional Support",
    question: "What kind of additional support do you expect from the course?",
    options: [
      "Extra resources",
      "Access to a mentor or tutor",
      "Peer support through study groups",
    ],
  },
];

// Main component for the vertical stepper form
const VerticalStepperForm: React.FC = () => {
  const router =useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(stepsWithQuestions.length).fill(""));

  const handleNext = () => {
    if (activeStep < stepsWithQuestions.length - 1) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("User's answers:", answers);
    router.push('/StudentDashboard')
    
  };

  const handleOptionChange = (answer: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[activeStep] = answer;
    setAnswers(updatedAnswers);
  };

  return (
    <div>
      <Header />

      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col">
          {/* Stepper and Question Section */}
          {stepsWithQuestions.map((stepItem, index) => (
            <div key={index} className="mb-8">
              {/* Step Display */}
              <div className="flex items-center space-x-4 border-l-4 pl-4 py-2 transition-all duration-300">
                <span
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold ${index <= activeStep ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"
                    }`}
                >
                  {index + 1}
                </span>
                <span className={`text-sm ${index <= activeStep ? "text-blue-500" : "text-gray-400"}`}>
                  {stepItem.step}
                </span>
              </div>

              {/* Question Display */}
              {index === activeStep && (
                <div className="mt-4">
                  <h2 className="text-xl font-semibold mb-6">{stepItem.question}</h2>
                  <div className="flex flex-col items-center gap-4">
                    {stepItem.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionChange(option)}
                        className={`w-full max-w-md px-6 py-3 border rounded-lg ${answers[activeStep] === option
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-800"
                          } transition hover:bg-blue-400 hover:text-white`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={`px-4 py-2 bg-gray-300 text-gray-700 rounded ${activeStep === 0 ? "cursor-not-allowed" : "hover:bg-gray-400"
                        } transition`}
                    >
                      Back
                    </button>
                    <button
                      onClick={activeStep === stepsWithQuestions.length - 1 ? handleSubmit : handleNext}
                      disabled={!answers[activeStep]}
                      className={`px-4 py-2 ${answers[activeStep]
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "bg-gray-300 text-gray-700"
                        } rounded transition`}
                    >
                      {activeStep === stepsWithQuestions.length - 1 ? "Finish" : "Next"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalStepperForm;
