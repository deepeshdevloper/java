// Converted from .jsx to .js
import React from 'react';

function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'px-4 py-2 rounded-md transition-colors duration-300 font-medium';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
  };

  return React.createElement(
    "button",
    {
      className: `${baseStyles} ${variants[variant]} ${className}`,
      ...props
    },
    children
  );
}

export default Button;