import React from 'react';
import CodeBlock from './CodeBlock.js';
import Diagram from './Diagram.js';

const annotationDiagram = `
classDiagram
    direction TB
    
    class Annotation {
        <<@interface>>
        +elementType(): ElementType
        +retention(): RetentionPolicy
        +documented(): boolean
        +inherited(): boolean
    }
    
    class RetentionPolicy {
        <<enumeration>>
        SOURCE
        CLASS
        RUNTIME
    }
    
    class ElementType {
        <<enumeration>>
        TYPE
        METHOD
        FIELD
        PARAMETER
        CONSTRUCTOR
        LOCAL_VARIABLE
    }
    
    class MetaAnnotations {
        +@Retention
        +@Target
        +@Documented
        +@Inherited
    }
    
    class CustomAnnotation {
        +value(): String
        +priority(): int
    }
    
    MetaAnnotations <|-- CustomAnnotation : annotated with
    Annotation <|-- CustomAnnotation : defines
    RetentionPolicy <-- Annotation : uses
    ElementType <-- Annotation : uses
    
    note for Annotation "Base Annotation Interface"
    note for RetentionPolicy "Annotation Lifetime"
    note for ElementType "Valid Targets"
    note for MetaAnnotations "Built-in Annotations"
    note for CustomAnnotation "User-defined Annotation"
`;

const annotationCode = `@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface TestCase {
    String value() default "";
    int priority() default 1;
}

public class CustomAnnotationDemo {
    @TestCase(value = "Test addition", priority = 1)
    public void testAddition() {
        int result = 2 + 2;
        System.out.println("Test result: " + result);
    }

    public static void main(String[] args) throws Exception {
        CustomAnnotationDemo demo = new CustomAnnotationDemo();
        
        // Getting annotation information using reflection
        TestCase testCase = demo.getClass()
                              .getMethod("testAddition")
                              .getAnnotation(TestCase.class);
        
        System.out.println("Test name: " + testCase.value());
        System.out.println("Priority: " + testCase.priority());
        
        demo.testAddition();
    }
}`;

function Annotations() {
  console.log('annotationDiagram:', annotationDiagram);
  console.log('annotationCode:', annotationCode);
  return React.createElement(
    "div",
    { className: "max-w-4xl mx-auto" },
    React.createElement(
      "h1",
      { className: "text-3xl font-bold mb-6" },
      "Java Annotations"
    ),
    React.createElement(
      "div",
      { className: "bg-white p-6 rounded-lg shadow mb-8" },
      React.createElement(
        "h2",
        { className: "text-2xl font-semibold mb-4" },
        "Annotation Hierarchy"
      ),
      React.createElement(Diagram, { chart: annotationDiagram })
    ),
    React.createElement(
      "div",
      { className: "bg-white p-6 rounded-lg shadow mb-8" },
      React.createElement(
        "h2",
        { className: "text-2xl font-semibold mb-4" },
        "What are Annotations?"
      ),
      React.createElement(
        "p",
        { className: "text-gray-700 mb-4" },
        "Annotations are metadata that can be added to Java code. They provide additional ",
        "information about the program to the compiler or runtime environment. Annotations ",
        "can be used to enforce rules, generate code, or provide runtime instructions."
      ),
      React.createElement(
        "div",
        { className: "bg-indigo-50 p-4 rounded-lg" },
        React.createElement(
          "h3",
          { className: "text-lg font-semibold text-indigo-700 mb-2" },
          "Key Features:"
        ),
        React.createElement(
          "ul",
          { className: "list-disc list-inside text-gray-700 space-y-2" },
          React.createElement("li", null, "Metadata for code elements"),
          React.createElement("li", null, "Can be processed at compile-time or runtime"),
          React.createElement("li", null, "Support default values"),
          React.createElement("li", null, "Can be read through reflection")
        )
      )
    ),
    React.createElement(
      "div",
      { className: "mb-8" },
      React.createElement(
        "h2",
        { className: "text-2xl font-semibold mb-4" },
        "Example Implementation"
      ),
      React.createElement(CodeBlock, { code: annotationCode, language: "java" })
    ),
    React.createElement(
      "div",
      { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" },
      React.createElement(
        "div",
        { className: "bg-white p-6 rounded-lg shadow" },
        React.createElement(
          "h3",
          { className: "text-xl font-semibold text-indigo-600 mb-3" },
          "Built-in Annotations"
        ),
        React.createElement(
          "ul",
          { className: "space-y-2 text-gray-700" },
          React.createElement("li", null, "\u2022 @Override - Method overrides superclass"),
          React.createElement("li", null, "\u2022 @Deprecated - Element is deprecated"),
          React.createElement("li", null, "\u2022 @SuppressWarnings - Ignore warnings"),
          React.createElement("li", null, "\u2022 @FunctionalInterface - Single abstract method")
        )
      ),
      React.createElement(
        "div",
        { className: "bg-white p-6 rounded-lg shadow" },
        React.createElement(
          "h3",
          { className: "text-xl font-semibold text-indigo-600 mb-3" },
          "Meta-Annotations"
        ),
        React.createElement(
          "ul",
          { className: "space-y-2 text-gray-700" },
          React.createElement("li", null, "\u2022 @Retention - Annotation lifetime"),
          React.createElement("li", null, "\u2022 @Target - Where annotation can be used"),
          React.createElement("li", null, "\u2022 @Documented - Include in JavaDoc"),
          React.createElement("li", null, "\u2022 @Inherited - Inherit from superclass")
        )
      )
    ),
    React.createElement(
      "div",
      { className: "bg-indigo-50 p-6 rounded-lg" },
      React.createElement(
        "h3",
        { className: "text-xl font-semibold text-indigo-700 mb-3" },
        "Common Use Cases"
      ),
      React.createElement(
        "ul",
        { className: "list-disc list-inside text-gray-700 space-y-2" },
        React.createElement("li", null, "Compiler instructions and validation"),
        React.createElement("li", null, "Build-time code generation"),
        React.createElement("li", null, "Runtime reflection and processing"),
        React.createElement("li", null, "Framework configuration and setup")
      )
    )
  );
}

export default Annotations;
