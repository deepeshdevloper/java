import React from 'react';
import AnimatedSection from './shared/AnimatedSection';
import DiagramDisplay from './shared/DiagramDisplay';
import {
  threadLifecycleDiagram,
  anonymousClassDiagram,
  methodLocalInnerClassDiagram,
  functionalInterfaceDiagram,
  annotationDiagram,
  guiComparisonDiagram
} from '../utils/diagrams';

function DiagramGallery() {
  const diagrams = [
    {
      title: "Thread State Transitions",
      description: "Complete lifecycle of Java threads showing all possible states and transitions",
      chart: threadLifecycleDiagram
    },
    {
      title: "AWT and Swing Component Hierarchy",
      description: "Hierarchical relationship between AWT and Swing components",
      chart: guiComparisonDiagram
    },
    {
      title: "Annotation Hierarchy",
      description: "Structure and relationships of Java annotations",
      chart: annotationDiagram
    },
    {
      title: "Standard Functional Interfaces",
      description: "Hierarchy of functional interfaces in Java",
      chart: functionalInterfaceDiagram
    },
    {
      title: "Method Local Inner Class Relationships",
      description: "Structure and scope of method local inner classes",
      chart: methodLocalInnerClassDiagram
    }
  ];

  return React.createElement(
    "div",
    { className: "max-w-4xl mx-auto px-4 py-8" },
    React.createElement(
      "h1",
      { className: "text-3xl font-bold mb-8 text-center" },
      "Java Programming Concepts Diagrams"
    ),
    diagrams.map((diagram, index) =>
      React.createElement(
        AnimatedSection,
        { key: index },
        React.createElement(
          "div",
          { className: "mb-12" },
          React.createElement(
            "h2",
            { className: "text-2xl font-semibold mb-4" },
            diagram.title
          ),
          React.createElement(
            "p",
            { className: "text-gray-600 mb-4" },
            diagram.description
          ),
          React.createElement(DiagramDisplay, {
            chart: diagram.chart,
            title: diagram.title
          })
        )
      )
    )
  );
}

export default DiagramGallery;
