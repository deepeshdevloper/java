import React from 'react';
import AnimatedSection from './shared/AnimatedSection';
import PageTitle from './shared/PageTitle';
import MethodLocalIntro from './methodLocal/MethodLocalIntro';
import MethodLocalDiagram from './methodLocal/MethodLocalDiagram';
import MethodLocalExamples from './methodLocal/MethodLocalExamples';
import MethodLocalFeatures from './methodLocal/MethodLocalFeatures';

function MethodLocalInnerClass() {
  return React.createElement("div", { className: "max-w-4xl mx-auto px-4 py-8" },
    React.createElement(PageTitle, {
      subtitle: "Understanding Method Local Inner Classes in Java"
    }, "Method Local Inner Classes"),
    
    React.createElement(AnimatedSection, null,
      React.createElement(MethodLocalIntro)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(MethodLocalDiagram)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(MethodLocalFeatures)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(MethodLocalExamples)
    )
  );
}

export default MethodLocalInnerClass;