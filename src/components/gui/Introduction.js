import React from 'react';
import Card from '../shared/Card';

function Introduction() {
  return React.createElement(Card, { className: "p-6" },
    React.createElement("h2", { className: "text-2xl font-semibold mb-4" },
      "GUI Development in Java"
    ),
    React.createElement("p", { className: "text-gray-700 mb-4" },
      "Java provides two main libraries for creating graphical user interfaces: ",
      "AWT (Abstract Window Toolkit) and Swing. While AWT was the original GUI ",
      "toolkit, Swing builds upon it to provide a more feature-rich and ",
      "platform-independent solution."
    ),
    React.createElement("div", { className: "bg-indigo-50 p-4 rounded-lg" },
      React.createElement("h3", { className: "text-lg font-semibold text-indigo-700 mb-2" },
        "Key Points:"
      ),
      React.createElement("ul", { className: "list-disc list-inside space-y-2 text-gray-700" },
        React.createElement("li", null, "AWT provides platform-dependent components"),
        React.createElement("li", null, "Swing offers lightweight, pure Java components"),
        React.createElement("li", null, "Swing components start with 'J' prefix"),
        React.createElement("li", null, "Both can be used together in applications"),
        React.createElement("li", null, "Swing provides more features and flexibility")
      )
    )
  );
}

export default Introduction;