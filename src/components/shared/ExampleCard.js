// Shared component for displaying code examples
import React from 'react';
import CodeDisplay from './CodeDisplay';

function ExampleCard({ title, description, code, language = 'java' }) {
  return React.createElement("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden mb-6" },
    React.createElement("div", { className: "p-6" },
      React.createElement("h3", { className: "text-xl font-semibold mb-2" }, title),
      description && React.createElement("p", { className: "text-gray-600 mb-4" }, description),
      React.createElement(CodeDisplay, { code, language })
    )
  );
}

export default ExampleCard;