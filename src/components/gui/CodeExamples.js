import React from 'react';
import ExampleCard from '../shared/ExampleCard';
import { guiExamples } from '../../utils/codeExamples';

function CodeExamples() {
  return React.createElement("div", { className: "space-y-6" },
    React.createElement("h2", { className: "text-2xl font-semibold mb-4" },
      "Implementation Examples"
    ),
    React.createElement(ExampleCard, {
      title: "AWT Example",
      description: "Basic AWT application with a button and event handling",
      code: guiExamples.awt
    }),
    React.createElement(ExampleCard, {
      title: "Swing Example",
      description: "Equivalent Swing application showing modern Java GUI development",
      code: guiExamples.swing
    })
  );
}

export default CodeExamples;