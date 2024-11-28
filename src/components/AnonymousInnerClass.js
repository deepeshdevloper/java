import React from 'react';
import AnimatedSection from './shared/AnimatedSection';
import PageTitle from './shared/PageTitle';
import AnonymousClassExamples from './anonymous/AnonymousClassExamples';
import AnonymousClassFeatures from './anonymous/AnonymousClassFeatures';

function AnonymousInnerClass() {
  return React.createElement("div", { className: "max-w-4xl mx-auto px-4 py-8" },
    React.createElement(PageTitle, {
      subtitle: "Understanding Anonymous Inner Classes in Java"
    }, "Anonymous Inner Classes"),
    
    React.createElement(AnimatedSection, null,
      React.createElement("div", { className: "bg-white rounded-lg shadow-lg p-6 mb-8" },
        React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "What are Anonymous Inner Classes?"),
        React.createElement("p", { className: "text-gray-700 mb-4" },
          "Anonymous inner classes are class declarations and instantiations combined into a single expression. ",
          "They are commonly used when you need a one-time implementation of an interface or extension of a class."
        ),
        React.createElement("div", { className: "bg-indigo-50 p-4 rounded-lg" },
          React.createElement("h3", { className: "text-lg font-semibold text-indigo-700 mb-2" }, "Key Points:"),
          React.createElement("ul", { className: "list-disc list-inside space-y-2 text-gray-700" },
            React.createElement("li", null, "Defined and instantiated at the same time"),
            React.createElement("li", null, "No explicit class name required"),
            React.createElement("li", null, "Perfect for one-time use implementations"),
            React.createElement("li", null, "Can access final or effectively final local variables")
          )
        )
      )
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(AnonymousClassFeatures)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(AnonymousClassExamples)
    )
  );
}

export default AnonymousInnerClass;