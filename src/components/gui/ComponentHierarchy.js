import React from 'react';
import DiagramDisplay from '../shared/DiagramDisplay';
import { guiComparisonDiagram } from '../../utils/diagrams';

function ComponentHierarchy() {
  return React.createElement(
    "div",
    { className: "mb-8" },
    React.createElement(
      "h2",
      { className: "text-2xl font-semibold mb-4" },
      "Component Hierarchy"
    ),
    React.createElement(DiagramDisplay, {
      chart: guiComparisonDiagram,
      title: "AWT and Swing Component Hierarchy"
    }),
    React.createElement(
      "div",
      { className: "mt-4 text-gray-600" },
      React.createElement(
        "p",
        null,
        "The diagram shows the relationship between AWT and Swing components, ",
        "illustrating how Swing components are built on top of AWT's core classes."
      )
    )
  );
}

export default ComponentHierarchy;
