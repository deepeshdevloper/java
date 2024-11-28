import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExamQuestions from './components/ExamQuestions';
import ThreadLifecycle from './components/ThreadLifecycle';
import AnonymousInnerClass from './components/AnonymousInnerClass';
import MethodLocalInnerClass from './components/MethodLocalInnerClass';
import FunctionalInterfaces from './components/FunctionalInterfaces';
import Annotations from './components/Annotations';
import GuiComparison from './components/GuiComparison';
import DiagramGallery from './components/DiagramGallery';

function App() {
  return React.createElement(Router, null,
    React.createElement("div", { className: "min-h-screen bg-gray-100" },
      React.createElement(Navbar, null),
      React.createElement("div", { className: "container mx-auto px-4 py-8" },
        React.createElement(Routes, null,
          React.createElement(Route, { path: "/", element: React.createElement(ExamQuestions, null) }),
          React.createElement(Route, { path: "/diagrams", element: React.createElement(DiagramGallery, null) }),
          React.createElement(Route, { path: "/thread-lifecycle", element: React.createElement(ThreadLifecycle, null) }),
          React.createElement(Route, { path: "/anonymous-inner-class", element: React.createElement(AnonymousInnerClass, null) }),
          React.createElement(Route, { path: "/method-local-inner-class", element: React.createElement(MethodLocalInnerClass, null) }),
          React.createElement(Route, { path: "/functional-interfaces", element: React.createElement(FunctionalInterfaces, null) }),
          React.createElement(Route, { path: "/annotations", element: React.createElement(Annotations, null) }),
          React.createElement(Route, { path: "/gui-comparison", element: React.createElement(GuiComparison, null) })
        )
      )
    )
  );
}

export default App;