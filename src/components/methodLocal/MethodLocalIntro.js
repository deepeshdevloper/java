import React from 'react';
import Card from '../shared/Card';

function MethodLocalIntro() {
  return React.createElement(Card, { className: "p-6" },
    React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, 
      "What are Method Local Inner Classes?"
    ),
    React.createElement("p", { className: "text-gray-700 mb-4" },
      "Method local inner classes are classes that are defined within a method. ",
      "They provide a way to encapsulate implementation details that are only needed ",
      "within a specific method scope."
    ),
    React.createElement("div", { className: "bg-indigo-50 p-4 rounded-lg" },
      React.createElement("h3", { className: "text-lg font-semibold text-indigo-700 mb-2" },
        "Key Characteristics:"
      ),
      React.createElement("ul", { className: "list-disc list-inside space-y-2 text-gray-700" },
        React.createElement("li", null, "Defined inside method scope"),
        React.createElement("li", null, "Can access final or effectively final local variables"),
        React.createElement("li", null, "Can access instance members of enclosing class"),
        React.createElement("li", null, "Cannot include static declarations"),
        React.createElement("li", null, "Only visible within the declaring method")
      )
    )
  );
}

export default MethodLocalIntro;