import React from 'react';
import ComparisonTable from '../shared/ComparisonTable';

function AnonymousClassFeatures() {
  const features = [
    {
      name: "One-time Use",
      description: "Anonymous classes are ideal for implementing interfaces or extending classes that are only needed once in the code."
    },
    {
      name: "Access to Local Variables",
      description: "Can access final or effectively final local variables of the enclosing method."
    },
    {
      name: "Access to Instance Members",
      description: "Can access all members (including private) of the enclosing class."
    },
    {
      name: "No Static Members",
      description: "Cannot define static members unless they are compile-time constant fields."
    },
    {
      name: "Constructor Limitations",
      description: "Cannot define constructors since they have no name, but can use instance initializers."
    },
    {
      name: "Multiple Interfaces",
      description: "Cannot implement multiple interfaces or extend a class while implementing an interface."
    }
  ];

  return React.createElement(ComparisonTable, {
    title: "Key Features of Anonymous Classes",
    features: features
  });
}

export default AnonymousClassFeatures;