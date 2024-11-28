import React from 'react';
import DiagramDisplay from '../shared/DiagramDisplay';
import { methodLocalInnerClassDiagram } from '../../utils/diagramExamples';

function MethodLocalDiagram() {
  return React.createElement(
    "div",
    { className: "mb-8" },
    React.createElement(
      "h2",
      { className: "text-2xl font-semibold mb-4" },
      "Method Local Inner Class Structure"
    ),
    React.createElement(DiagramDisplay, {
      chart: methodLocalInnerClassDiagram,
      title: "Method Local Inner Class Relationships"
    }),
    React.createElement(
      "div",
      { className: "mt-4 text-gray-600" },
      React.createElement(
        "p",
        null,
        "The diagram illustrates the relationship between the outer class, ",
        "method scope, and the method local inner class, showing how they ",
        "are nested and their access patterns."
      )
    )
  );
}

export default MethodLocalDiagram;
