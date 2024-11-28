// Converted from .jsx to .js
import React from 'react';

function PageTitle({ children, subtitle }) {
  return React.createElement(
    "div",
    { className: "text-center mb-12" },
    React.createElement(
      "h1",
      { className: "text-4xl font-bold text-gray-900 mb-4 font-heading" },
      children
    ),
    subtitle && React.createElement(
      "p",
      { className: "text-xl text-gray-600 font-body" },
      subtitle
    )
  );
}

export default PageTitle;