// Converted from .jsx to .js
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './shared/Card.js';
import PageTitle from './shared/PageTitle.js';
import Button from './shared/Button.js';

function ExamQuestions() {
  const questions = [
    {
      id: 1,
      title: "Thread Lifecycle",
      description: "Explore the complete lifecycle of Java threads with interactive diagrams",
      path: "/thread-lifecycle",
      icon: "🔄"
    },
    {
      id: 2,
      title: "Anonymous Inner Class",
      description: "Master anonymous inner classes with practical examples",
      path: "/anonymous-inner-class",
      icon: "🎭"
    },
    {
      id: 3,
      title: "Method Local Inner Class",
      description: "Deep dive into method local inner classes with visual guides",
      path: "/method-local-inner-class",
      icon: "📦"
    },
    {
      id: 4,
      title: "Functional Interfaces",
      description: "Understanding functional interfaces and lambda expressions",
      path: "/functional-interfaces",
      icon: "λ"
    },
    {
      id: 5,
      title: "Annotations",
      description: "Comprehensive guide to Java annotations with examples",
      path: "/annotations",
      icon: "@"
    },
    {
      id: 6,
      title: "GUI Frameworks",
      description: "Compare AWT and Swing with interactive examples",
      path: "/gui-comparison",
      icon: "🖥️"
    }
  ];

  return (
    React.createElement("div", { className: "max-w-7xl mx-auto px-4 py-12" },
      React.createElement(PageTitle, { subtitle: "Select a topic to explore detailed explanations with diagrams and code examples" }, "Java Programming Concepts"),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
        questions.map(question =>
          React.createElement(Card, { key: question.id },
            React.createElement(Link, { to: question.path },
              React.createElement("div", { className: "p-6" },
                React.createElement("div", { className: "text-4xl mb-4" }, question.icon),
                React.createElement("h2", { className: "text-2xl font-semibold text-gray-900 mb-2" }, question.title),
                React.createElement("p", { className: "text-gray-600 mb-4" }, question.description),
                React.createElement(Button, { variant: "outline" }, "Explore Topic")
              )
            )
          )
        )
      )
    )
  );
}

export default ExamQuestions;