import React from 'react';
import DiagramDisplay from '../shared/DiagramDisplay';
import { threadLifecycleDiagram } from '../../utils/diagramExamples';

function ThreadDiagram() {
  return React.createElement(
    "div",
    { className: "mb-8" },
    React.createElement(
      "h2",
      { className: "text-2xl font-semibold mb-4" },
      "Thread Lifecycle Diagram"
    ),
    React.createElement(DiagramDisplay, {
      chart: threadLifecycleDiagram,
      title: "Thread State Transitions"
    }),
    React.createElement(
      "div",
      { className: "mt-4 text-gray-600" },
      React.createElement(
        "p",
        null,
        "The diagram above illustrates the complete lifecycle of a Java thread, ",
        "showing all possible state transitions and the methods that trigger them."
      )
    )
  );
}

export default ThreadDiagram;
