"use client";
import { useEffect, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import Header from '../Header/page';
import Footer from '../Footer/page';
const JavaScriptCompiler: React.FC = () => {
  const [jsCode, setJsCode] = useState<string>('/* Write your JavaScript here */');
  const [output, setOutput] = useState<string>('');

  const runCode = () => {
    // Create a temporary console to capture logs
    const originalConsoleLog = console.log;
    const logs: string[] = [];
    
    // Define the type for the console.log arguments
    console.log = (...args: unknown[]) => {
      logs.push(args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : arg)).join(' '));
    };

    try {
      // Evaluate the JavaScript code
      eval(jsCode);
      setOutput(logs.join('\n')); // Join logs and set output
    } catch (error) {
      setOutput(`Error: ${error}`);
    } finally {
      // Restore the original console.log
      console.log = originalConsoleLog;
    }
  };
  useEffect(()=>{
     runCode();
  },[jsCode])

  return (
    <div>
       <Header/>
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
     
      <h2 className="text-3xl font-bold text-center mb-6">Online JavaScript Compiler</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
        <Editor
          height="300px"
          defaultLanguage="javascript"
          value={jsCode}
          onChange={(value) => setJsCode(value || '')}
          theme="vs-dark"
        />
      </div>
      <button
        onClick={runCode}
        className="mt-4 px-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Run Code
      </button>

      {/* Output Box */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Output</h3>
        <div className="w-full h-72 border border-gray-300 rounded shadow p-4 overflow-auto bg-white">
          {output}
        </div>
      </div>

     
    </div>
    <Footer/>

    </div>

  );
};

export default JavaScriptCompiler;
