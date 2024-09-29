"use client";
import React, { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const questions: Question[] = [
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Mozilla"],
    correctAnswer: "Netscape",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "<!-- -->", "##"],
    correctAnswer: "//",
  },
  {
    question: "Which method is used to find the length of a string in JavaScript?",
    options: ["length()", "size()", "count()", "len()"],
    correctAnswer: "length()",
  },
  {
    question: 'What does "DOM" stand for?',
    options: ["Document Object Model", "Data Object Manager", "Document Orientation Module", "Display Object Management"],
    correctAnswer: "Document Object Model",
  },
  {
    question: "Which method can be used to parse a JSON string in JavaScript?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.parseJSON()", "JSON.decode()"],
    correctAnswer: "JSON.parse()",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["let", "var", "const", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Character"],
    correctAnswer: "Character",
  },
  {
    question: "How do you add an element at the end of an array in JavaScript?",
    options: ["push()", "pop()", "append()", "insert()"],
    correctAnswer: "push()",
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["shift()", "pop()", "splice()", "remove()"],
    correctAnswer: "pop()",
  },
  {
    question: "Which keyword is used to handle exceptions in JavaScript?",
    options: ["try", "catch", "finally", "All of the above"],
    correctAnswer: "All of the above",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [showScore, setShowScore] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setShowScore(true);
  };

  const nextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    }
  };

  const handleReview = () => {
    setShowReview(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      {!showScore ? (
        <div className="w-full max-w-xl bg-white text-black p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-6">
            {questions[currentQuestionIndex].question}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestionIndex].options.map((option) => (
              <button
                key={option}
                className={`bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 ${
                  answers[currentQuestionIndex] === option ? "bg-green-700" : ""
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
            >
              Previous
            </button>
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={nextQuestion}
                disabled={!answers[currentQuestionIndex]}
              >
                Next
              </button>
            ) : (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={handleSubmit}
                disabled={!answers[currentQuestionIndex]}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : !showReview ? (
        <div className="p-8 bg-white text-black shadow-lg rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-4">
            You scored {score} out of {questions.length}
          </p>
          <div className="flex justify-center items-center">
            <span className="text-4xl mr-2">🏅</span>
            <span className="text-4xl font-bold">{score} coins</span>
          </div>
          <button
            className="m-3 px-4 py-1 bg-green-600 rounded-2xl text-white"
            onClick={handleReview}
          >
            Review
          </button>
        </div>
      ) : (
        <div className="p-8 bg-white text-black shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Review Answers</h2>
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-bold">{question.question}</h3>
                <p>
                  <strong>Your Answer:</strong>{" "}
                  {answers[index] === question.correctAnswer ? (
                    <span className="text-green-600">{answers[index]}</span>
                  ) : (
                    <span className="text-red-600">{answers[index]}</span>
                  )}
                </p>
                <p>
                  <strong>Correct Answer:</strong>{" "}
                  <span className="text-green-600">{question.correctAnswer}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
