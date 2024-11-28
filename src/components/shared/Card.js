// Converted from .jsx to .js
import React from 'react';

function Card({ children, className = '' }) {
  return React.createElement(
    "div",
    {
      className: `bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`
    },
    children
  );
}

export default Card;