// Converted from .jsx to .js
import React, { useEffect } from 'react';
import mermaid from 'mermaid';

function Diagram({ chart }) {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      themeVariables: {
        primaryColor: '#4f46e5',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#4338ca',
        lineColor: '#6366f1',
        secondaryColor: '#818cf8',
        tertiaryColor: '#c7d2fe'
      }
    });
  }, []);

  return React.createElement(
    "div",
    { className: "bg-white p-6 rounded-lg shadow-lg my-4" },
    React.createElement(
      "div",
      { className: "mermaid" },
      chart
    )
  );
}

export default Diagram;