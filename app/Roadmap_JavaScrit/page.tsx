import React, { Component } from 'react';

// Define the roadmap steps using a class
class Step {
  constructor(public title: string, public description: string) {}
}

// Initialize the steps using the Step class
const roadmapSteps: Step[] = [
  new Step('Learn the Fundamentals', 'Understand variables, data types, and functions.'),
  new Step('DOM Manipulation', 'Learn how to interact with the DOM using JavaScript.'),
  new Step('Asynchronous JavaScript', 'Master promises, async/await, and APIs.'),
  new Step('ES6+ Features', 'Explore new JavaScript features like destructuring and arrow functions.'),
  new Step('Object-Oriented Programming', 'Learn about classes, inheritance, and OOP design.'),
  new Step('JavaScript Frameworks', 'Dive into React, Next.js, and TypeScript.'),
  new Step('Version Control', 'Understand how to use Git for version control.'),
  new Step('Testing', 'Write unit tests and debug your JavaScript code.'),
  new Step('Build Projects', 'Apply your skills by building real-world applications.')
];

// Stepper class component using inheritance principles
class VerticalStepper extends Component<{}, { currentStep: number }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentStep: 0,
    };
  }

  // Method to move to the next step
  nextStep = () => {
    if (this.state.currentStep < roadmapSteps.length - 1) {
      this.setState({ currentStep: this.state.currentStep + 1 });
    }
  };

  // Method to move to the previous step
  prevStep = () => {
    if (this.state.currentStep > 0) {
      this.setState({ currentStep: this.state.currentStep - 1 });
    }
  };

  render() {
    const { currentStep } = this.state;
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">JavaScript Roadmap</h1>

        {/* Stepper Indicator - Vertical */}
        <div className="flex flex-col space-y-4 mb-6">
          {roadmapSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                              ${index === currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
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
            onClick={this.prevStep}
            className={`px-4 py-2 bg-gray-300 rounded ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            onClick={this.nextStep}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${currentStep === roadmapSteps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentStep === roadmapSteps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default VerticalStepper;
