import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Exam Questions', icon: '📚' },
    { path: '/diagrams', label: 'Diagrams', icon: '📊' },
    { path: '/thread-lifecycle', label: 'Thread Lifecycle', icon: '🔄' },
    { path: '/anonymous-inner-class', label: 'Anonymous Inner Class', icon: '🎭' },
    { path: '/method-local-inner-class', label: 'Method Local Inner Class', icon: '📦' },
    { path: '/functional-interfaces', label: 'Functional Interfaces', icon: 'λ' },
    { path: '/annotations', label: 'Annotations', icon: '@' },
    { path: '/gui-comparison', label: 'GUI Comparison', icon: '🖥️' },
  ];

  return React.createElement("nav", { className: "bg-gradient-to-r from-indigo-600 to-indigo-800" },
    React.createElement("div", { className: "container mx-auto px-4" },
      React.createElement("div", { className: "flex items-center justify-between h-16" },
        React.createElement("div", { className: "flex items-center" },
          React.createElement("button", { className: "text-white focus:outline-none md:hidden", onClick: () => setIsOpen(!isOpen) },
            React.createElement("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
              React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16m-7 6h7" })
            )
          ),
          React.createElement(Link, { to: "/", className: "flex items-center space-x-2" },
            React.createElement("span", { className: "text-2xl" }, "☕"),
            React.createElement("span", { className: "text-white font-bold text-xl" }, "Java Guide")
          ),
          React.createElement("div", { className: "hidden md:flex md:items-center md:space-x-4" },
            navItems.map((item) =>
              React.createElement(Link, { key: item.path, to: item.path, className: "flex items-center space-x-1 text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" },
                React.createElement("span", null, item.icon),
                React.createElement("span", null, item.label)
              )
            )
          )
        ),
        React.createElement("div", { className: "md:hidden" },
          React.createElement("div", { className: `flex flex-col space-y-2 ${isOpen ? 'block' : 'hidden'}` },
            navItems.map((item) =>
              React.createElement(Link, { key: item.path, to: item.path, className: "flex items-center space-x-2 text-gray-300 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium", onClick: () => setIsOpen(false) },
                React.createElement("span", null, item.icon),
                React.createElement("span", null, item.label)
              )
            )
          )
        )
      )
    )
  );
}

export default Navbar;