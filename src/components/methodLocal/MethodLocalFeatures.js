import React from 'react';
import ComparisonTable from '../shared/ComparisonTable';

function MethodLocalFeatures() {
  const features = [
    {
      name: "Scope",
      description: "Only accessible within the declaring method"
    },
    {
      name: "Variable Access",
      description: "Can access final or effectively final local variables and parameters of the enclosing method"
    },
    {
      name: "Member Access",
      description: "Can access all members of the enclosing class, including private members"
    },
    {
      name: "Static Members",
      description: "Cannot declare static members except for constant variables"
    },
    {
      name: "Instantiation",
      description: "Can only be instantiated within the declaring method"
    },
    {
      name: "Visibility",
      description: "Cannot use access modifiers (public, private, protected)"
    }
  ];

  return React.createElement(ComparisonTable, {
    title: "Method Local Inner Class Features",
    features: features
  });
}

export default MethodLocalFeatures;