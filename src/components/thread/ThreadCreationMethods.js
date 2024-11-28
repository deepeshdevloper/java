import React from 'react';
import ExampleCard from '../shared/ExampleCard';
import { threadExamples } from '../../utils/codeExamples';

function ThreadCreationMethods() {
  const methods = [
    {
      title: "Extending Thread Class",
      description: "Create a thread by extending the Thread class and overriding run()",
      code: threadExamples.basic
    },
    {
      title: "Implementing Runnable",
      description: "Create a thread by implementing the Runnable interface",
      code: threadExamples.runnable
    },
    {
      title: "Thread Synchronization",
      description: "Example of thread synchronization using synchronized keyword",
      code: threadExamples.synchronization
    }
  ];

  return React.createElement("div", { className: "space-y-6" },
    React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Thread Creation Methods"),
    methods.map((method, index) =>
      React.createElement(ExampleCard, {
        key: index,
        title: method.title,
        description: method.description,
        code: method.code
      })
    )
  );
}

export default ThreadCreationMethods;