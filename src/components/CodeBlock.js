// Converted from .jsx to .js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock({ code, language }) {
  return React.createElement(
    "div",
    { className: "rounded-lg overflow-hidden shadow-lg my-4" },
    React.createElement(
      SyntaxHighlighter,
      {
        language: language,
        style: vscDarkPlus,
        showLineNumbers: true,
        customStyle: {
          margin: 0,
          borderRadius: '0.5rem',
          padding: '1.5rem'
        }
      },
      code
    )
  );
}

export default CodeBlock;