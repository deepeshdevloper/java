import React from 'react';
import ComparisonTable from '../shared/ComparisonTable';

function AwtSwingComparison() {
  const differences = [
    {
      name: "Component Type",
      description: "AWT components are heavyweight (platform-dependent), while Swing components are lightweight (platform-independent)"
    },
    {
      name: "Platform Dependency",
      description: "AWT is platform-dependent and uses native OS components. Swing is platform-independent and written purely in Java"
    },
    {
      name: "Component Set",
      description: "AWT has limited components (Button, TextField, etc.). Swing has a rich set of components (JButton, JTextField, JTable, JTree, etc.)"
    },
    {
      name: "Look and Feel",
      description: "AWT's look and feel depends on the OS. Swing provides pluggable look and feel that can be changed at runtime"
    },
    {
      name: "Performance",
      description: "AWT components are generally faster as they use native code. Swing components might be slower due to additional rendering"
    },
    {
      name: "MVC Architecture",
      description: "AWT doesn't follow MVC. Swing components are built on MVC architecture"
    },
    {
      name: "Event Handling",
      description: "AWT has basic event handling. Swing provides more sophisticated event handling mechanisms"
    },
    {
      name: "Memory Usage",
      description: "AWT components use less memory. Swing components consume more memory due to additional features"
    }
  ];

  return React.createElement(ComparisonTable, {
    title: "AWT vs Swing Comparison",
    features: differences
  });
}

export default AwtSwingComparison;