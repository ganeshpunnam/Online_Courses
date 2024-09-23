"use client";
import { useState } from 'react';
import { Editor } from '@monaco-editor/react'; // Correct import for Monaco Editor

const HtmlCompiler: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('html');
  const [htmlCode, setHtmlCode] = useState<string>(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* Your CSS here */
  </style>
</head>
<body>
  <!-- Your HTML here -->
</body>
</html>`);
  const [cssCode, setCssCode] = useState<string>('/* Write your CSS here */');
  const [jsCode, setJsCode] = useState<string>('/* Write your JavaScript here */');

  const runCode = () => {
    const outputFrame = document.getElementById('output') as HTMLIFrameElement;
    const documentInFrame = outputFrame.contentDocument || outputFrame.contentWindow?.document;

    if (documentInFrame) {
      documentInFrame.open();
      documentInFrame.write(`
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `);
      documentInFrame.close();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Online HTML Compiler</h2>

      {/* Tabs for HTML, CSS, and JavaScript */}
      <div className="mb-4">
        <ul className="flex border-b">
          <li
            className={`mr-1 ${activeTab === 'html' ? 'border-blue-500' : ''}`}
            onClick={() => setActiveTab('html')}
          >
            <a
              className={`inline-block py-2 px-4 text-blue-600 hover:text-blue-800 cursor-pointer ${
                activeTab === 'html' ? 'font-bold border-b-2' : ''
              }`}
            >
              HTML
            </a>
          </li>
          <li
            className={`mr-1 ${activeTab === 'css' ? 'border-blue-500' : ''}`}
            onClick={() => setActiveTab('css')}
          >
            <a
              className={`inline-block py-2 px-4 text-blue-600 hover:text-blue-800 cursor-pointer ${
                activeTab === 'css' ? 'font-bold border-b-2' : ''
              }`}
            >
              CSS
            </a>
          </li>
          <li
            className={`mr-1 ${activeTab === 'js' ? 'border-blue-500' : ''}`}
            onClick={() => setActiveTab('js')}
          >
            <a
              className={`inline-block py-2 px-4 text-blue-600 hover:text-blue-800 cursor-pointer ${
                activeTab === 'js' ? 'font-bold border-b-2' : ''
              }`}
            >
              JavaScript
            </a>
          </li>
        </ul>
      </div>

      {/* Tab Content: HTML, CSS, or JavaScript Code Editor */}
      <div className="mb-4">
        {activeTab === 'html' && (
          <div>
            <h3 className="text-lg font-semibold mb-2">HTML</h3>
            <Editor
              height="450px"
              defaultLanguage="html"
              value={htmlCode}
              onChange={(value) => setHtmlCode(value || '')}
              theme="vs-dark"
            />
          </div>
        )}

        {activeTab === 'css' && (
          <div>
            <h3 className="text-lg font-semibold mb-2">CSS</h3>
            <Editor
              height="450px"
              defaultLanguage="css"
              value={cssCode}
              onChange={(value) => setCssCode(value || '')}
              theme="vs-dark"
            />
          </div>
        )}

        {activeTab === 'js' && (
          <div>
            <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
            <Editor
              height="450px"
              defaultLanguage="javascript"
              value={jsCode}
              onChange={(value) => setJsCode(value || '')}
              theme="vs-dark"
            />
          </div>
        )}
      </div>

      {/* HTML Output Box */}
      <div className="W-full ">
        <div>
          <h3 className="text-lg font-semibold mb-2">Output</h3>
          <iframe
            id="output"
            title="Output"
            className="w-full h-72 border border-gray-300 rounded shadow"
          ></iframe>
        </div>
      </div>

      <button
        onClick={runCode}
        className="mt-4 px-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Run Code
      </button>
    </div>
  );
};

export default HtmlCompiler;
