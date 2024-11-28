import React from 'react';
import Card from '../shared/Card';

function ThreadStateExplanation() {
  const states = [
    {
      name: 'NEW',
      description: 'Thread instance created but not yet started using start()',
      example: 'Thread t = new Thread();'
    },
    {
      name: 'RUNNABLE',
      description: 'Thread is executing in JVM but may be waiting for OS resources',
      example: 't.start();'
    },
    {
      name: 'BLOCKED',
      description: 'Thread is waiting to acquire a monitor lock',
      example: 'synchronized(object) { ... }'
    },
    {
      name: 'WAITING',
      description: 'Thread is waiting indefinitely for another thread',
      example: 'object.wait(); or t.join();'
    },
    {
      name: 'TIMED_WAITING',
      description: 'Thread is waiting for another thread for up to a specified time',
      example: 'Thread.sleep(1000); or t.join(1000);'
    },
    {
      name: 'TERMINATED',
      description: 'Thread has completed its execution',
      example: '// run() method completed'
    }
  ];

  return React.createElement(Card, { className: "p-6" },
    React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Thread States Explained"),
    React.createElement("div", { className: "space-y-4" },
      states.map((state, index) =>
        React.createElement("div", { key: index, className: "border-l-4 border-indigo-500 pl-4" },
          React.createElement("h3", { className: "text-lg font-semibold text-indigo-700" }, state.name),
          React.createElement("p", { className: "text-gray-600 mb-2" }, state.description),
          React.createElement("code", { className: "bg-gray-100 px-2 py-1 rounded text-sm" }, state.example)
        )
      )
    )
  );
}

export default ThreadStateExplanation;