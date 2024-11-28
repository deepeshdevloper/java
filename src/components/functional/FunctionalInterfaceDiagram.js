import React from 'react';
import DiagramDisplay from '../shared/DiagramDisplay';
import { functionalInterfaceDiagram } from '../../utils/diagramExamples';

function FunctionalInterfaceDiagram() {
  return React.createElement(
    "div",
    { className: "mb-8" },
    React.createElement(
      "h2",
      { className: "text-2xl font-semibold mb-4" },
      "Functional Interface Hierarchy"
    ),
    React.createElement(DiagramDisplay, {
      chart: functionalInterfaceDiagram,
      title: "Standard Functional Interfaces"
    }),
    React.createElement(
      "div",
      { className: "mt-4 text-gray-600" },
      React.createElement(
        "p",
        null,
        "The diagram shows the relationship between functional interfaces, ",
        "lambda expressions, and the standard functional interfaces provided ",
        "by the Java API."
      )
    )
  );
}

export default FunctionalInterfaceDiagram;
