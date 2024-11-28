import React from 'react';
import AnimatedSection from './shared/AnimatedSection';
import PageTitle from './shared/PageTitle';
import ThreadStateExplanation from './thread/ThreadStateExplanation';
import ThreadCreationMethods from './thread/ThreadCreationMethods';
import ThreadDiagram from './thread/ThreadDiagram';

function ThreadLifecycle() {
  return React.createElement("div", { className: "max-w-4xl mx-auto px-4 py-8" },
    React.createElement(PageTitle, {
      subtitle: "Understanding Thread States and Creation Methods in Java"
    }, "Java Thread Lifecycle"),
    
    React.createElement(AnimatedSection, null,
      React.createElement(ThreadDiagram)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(ThreadStateExplanation)
    ),
    
    React.createElement(AnimatedSection, null,
      React.createElement(ThreadCreationMethods)
    )
  );
}

export default ThreadLifecycle;