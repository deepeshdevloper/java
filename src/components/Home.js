// Converted from .jsx to .js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const topics = [
    {
      title: "Thread Lifecycle",
      description: "Learn about different states of threads and how to create them in Java",
      path: "/thread-lifecycle"
    },
    {
      title: "Anonymous Inner Class",
      description: "Understand anonymous inner classes and their implementation",
      path: "/anonymous-inner-class"
    },
    {
      title: "Method Local Inner Class",
      description: "Explore method local inner classes and their usage",
      path: "/method-local-inner-class"
    },
    {
      title: "Functional Interfaces",
      description: "Learn about functional interfaces and lambda expressions",
      path: "/functional-interfaces"
    },
    {
      title: "Annotations",
      description: "Discover Java annotations and their applications",
      path: "/annotations"
    },
    {
      title: "GUI Comparison",
      description: "Compare AWT and Swing frameworks in Java",
      path: "/gui-comparison"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Java Programming Concepts
        </h1>
        <p className="text-xl text-gray-600">
          Interactive guide to advanced Java programming concepts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <Link
            key={topic.path}
            to={topic.path}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {topic.title}
              </h2>
              <p className="text-gray-600">
                {topic.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;