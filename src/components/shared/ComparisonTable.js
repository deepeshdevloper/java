// Shared component for feature comparison tables
import React from 'react';

function ComparisonTable({ title, features }) {
  return React.createElement("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden mb-6" },
    React.createElement("div", { className: "p-6" },
      title && React.createElement("h3", { className: "text-xl font-semibold mb-4" }, title),
      React.createElement("div", { className: "overflow-x-auto" },
        React.createElement("table", { className: "min-w-full divide-y divide-gray-200" },
          React.createElement("thead", { className: "bg-gray-50" },
            React.createElement("tr", null,
              React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Feature"),
              React.createElement("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Description")
            )
          ),
          React.createElement("tbody", { className: "bg-white divide-y divide-gray-200" },
            features.map((feature, index) =>
              React.createElement("tr", { key: index },
                React.createElement("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" }, feature.name),
                React.createElement("td", { className: "px-6 py-4 text-sm text-gray-500" }, feature.description)
              )
            )
          )
        )
      )
    )
  );
}

export default ComparisonTable;