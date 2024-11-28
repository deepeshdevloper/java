import React from 'react';
import AnimatedSection from './shared/AnimatedSection';
import PageTitle from './shared/PageTitle';
import Introduction from './gui/Introduction';
import ComponentHierarchy from './gui/ComponentHierarchy';
import AwtSwingComparison from './gui/AwtSwingComparison';
import CodeExamples from './gui/CodeExamples';

function GuiComparison() {
  return React.createElement("div", { className: "max-w-4xl mx-auto px-4 py-8" },
    React.createElement(PageTitle, {
      subtitle: "Understanding the differences between AWT and Swing in Java"
    }, "GUI Framework Comparison"),
    
    React.createElement(AnimatedSection, null,
      React.createElement(Introduction)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(ComponentHierarchy)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(AwtSwingComparison)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(CodeExamples)
    )
  );
}

export default GuiComparison;