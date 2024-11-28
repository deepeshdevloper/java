import React from 'react';
import AnimatedSection from './shared/AnimatedSection';
import PageTitle from './shared/PageTitle';
import FunctionalInterfaceIntro from './functional/FunctionalInterfaceIntro';
import FunctionalInterfaceDiagram from './functional/FunctionalInterfaceDiagram';
import StandardInterfaces from './functional/StandardInterfaces';
import LambdaExamples from './functional/LambdaExamples';

function FunctionalInterfaces() {
  return React.createElement("div", { className: "max-w-4xl mx-auto px-4 py-8" },
    React.createElement(PageTitle, {
      subtitle: "Understanding Functional Interfaces and Lambda Expressions in Java"
    }, "Functional Interfaces"),
    
    React.createElement(AnimatedSection, null,
      React.createElement(FunctionalInterfaceIntro)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(FunctionalInterfaceDiagram)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(StandardInterfaces)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(LambdaExamples)
    )
  );
}

export default FunctionalInterfaces;