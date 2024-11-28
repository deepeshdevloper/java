// Converted from .jsx to .js
import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from './Button.js';

SyntaxHighlighter.registerLanguage('java', java);

function CodeDisplay({ code, language = 'java', title }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return React.createElement(
    "div",
    { className: "rounded-lg overflow-hidden shadow-lg mb-6" },
    title && React.createElement(
      "div",
      { className: "bg-gray-800 px-4 py-2 flex justify-between items-center" },
      React.createElement(
        "span",
        { className: "text-gray-200 font-medium" },
        title
      ),
      React.createElement(
        Button,
        {
          variant: "secondary",
          onClick: copyToClipboard,
          className: "text-sm py-1"
        },
        isCopied ? 'Copied!' : 'Copy Code'
      )
    ),
    React.createElement(
      SyntaxHighlighter,
      {
        language: language,
        style: atomOneDark,
        showLineNumbers: true,
        customStyle: {
          margin: 0,
          padding: '1.5rem',
          fontSize: '0.9rem'
        }
      },
      code
    )
  );
}

export default CodeDisplay;