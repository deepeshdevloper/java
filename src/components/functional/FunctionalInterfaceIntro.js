import React from 'react';
import Card from '../shared/Card';

function FunctionalInterfaceIntro() {
  return React.createElement(Card, { className: "p-6" },
    React.createElement("h2", { className: "text-2xl font-semibold mb-4" },
      "What are Functional Interfaces?"
    ),
    React.createElement("p", { className: "text-gray-700 mb-4" },
      "A functional interface is an interface that contains exactly one abstract method. ",
      "These interfaces serve as the foundation for lambda expressions in Java, enabling ",
      "functional programming capabilities."
    ),
    React.createElement("div", { className: "bg-indigo-50 p-4 rounded-lg" },
      React.createElement("h3", { className: "text-lg font-semibold text-indigo-700 mb-2" },
        "Key Characteristics:"
      ),
      React.createElement("ul", { className: "list-disc list-inside space-y-2 text-gray-700" },
        React.createElement("li", null, "Single Abstract Method (SAM)"),
        React.createElement("li", null, "Can have default and static methods"),
        React.createElement("li", null, "Annotated with @FunctionalInterface"),
        React.createElement("li", null, "Compatible with lambda expressions"),
        React.createElement("li", null, "Can be used with method references")
      )
    )
  );
}

export default FunctionalInterfaceIntro;