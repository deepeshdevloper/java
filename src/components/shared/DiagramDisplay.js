import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

function DiagramDisplay({ chart, title }) {
  const diagramRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      themeVariables: {
        primaryColor: '#4f46e5',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#4338ca',
        lineColor: '#6366f1',
        secondaryColor: '#818cf8',
        tertiaryColor: '#c7d2fe'
      }
    });

    const renderDiagram = async () => {
      if (diagramRef.current) {
        try {
          const renderId = `diagram-${Math.random().toString(36).substring(2, 9)}`;
          const { svg } = await mermaid.render(renderId, chart);
          diagramRef.current.innerHTML = svg;
        } catch (error) {
          console.error('Error rendering diagram:', error);
          diagramRef.current.innerHTML = '<p class="text-red-500">Error rendering diagram</p>';
        }
      }
    };

    renderDiagram();
  }, [chart]);

  return React.createElement("div", { className: "bg-white rounded-lg shadow-lg p-6 mb-8" },
    title && React.createElement("h3", { className: "text-xl font-semibold text-gray-800 mb-4" }, title),
    React.createElement("div", {
      ref: diagramRef,
      className: "overflow-x-auto mermaid"
    })
  );
}

export default DiagramDisplay;