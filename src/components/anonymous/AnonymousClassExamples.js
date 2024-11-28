import React from 'react';
import ExampleCard from '../shared/ExampleCard';
import { anonymousClassExamples } from '../../utils/codeExamples';

function AnonymousClassExamples() {
  const examples = [
    {
      title: "Event Handler Implementation",
      description: "Anonymous class implementing ActionListener interface for handling button clicks",
      code: anonymousClassExamples.eventHandler
    },
    {
      title: "Comparator Implementation",
      description: "Anonymous class implementing Comparator interface for custom sorting",
      code: anonymousClassExamples.comparator
    },
    {
      title: "Runnable Implementation",
      description: "Anonymous class implementing Runnable interface for thread creation",
      code: anonymousClassExamples.runnable
    },
    {
      title: "Custom Interface Implementation",
      description: "Anonymous class implementing a custom interface",
      code: anonymousClassExamples.interface
    }
  ];

  return React.createElement("div", { className: "space-y-6" },
    React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Anonymous Class Examples"),
    examples.map((example, index) =>
      React.createElement(ExampleCard, {
        key: index,
        title: example.title,
        description: example.description,
        code: example.code
      })
    )
  );
}

export default AnonymousClassExamples;