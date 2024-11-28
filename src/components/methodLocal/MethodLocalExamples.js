import React from 'react';
import ExampleCard from '../shared/ExampleCard';

const examples = {
  basic: `public class OuterClass {
    private int outerField = 10;
    
    public void outerMethod() {
        final int localVar = 20;
        
        class LocalInner {
            private int innerField = 30;
            
            public void display() {
                System.out.println("Outer field: " + outerField);
                System.out.println("Local variable: " + localVar);
                System.out.println("Inner field: " + innerField);
            }
        }
        
        LocalInner inner = new LocalInner();
        inner.display();
    }
}`,
  
  factory: `public class ShapeFactory {
    public Shape createShape(String type) {
        class Circle implements Shape {
            private double radius;
            
            Circle(double radius) {
                this.radius = radius;
            }
            
            @Override
            public double getArea() {
                return Math.PI * radius * radius;
            }
        }
        
        class Rectangle implements Shape {
            private double width, height;
            
            Rectangle(double w, double h) {
                width = w;
                height = h;
            }
            
            @Override
            public double getArea() {
                return width * height;
            }
        }
        
        switch(type.toLowerCase()) {
            case "circle": return new Circle(5.0);
            case "rectangle": return new Rectangle(4.0, 6.0);
            default: throw new IllegalArgumentException("Unknown shape");
        }
    }
}`
};

function MethodLocalExamples() {
  return React.createElement("div", { className: "space-y-6" },
    React.createElement("h2", { className: "text-2xl font-semibold mb-4" },
      "Method Local Inner Class Examples"
    ),
    React.createElement(ExampleCard, {
      title: "Basic Implementation",
      description: "Simple example showing method local inner class usage",
      code: examples.basic
    }),
    React.createElement(ExampleCard, {
      title: "Factory Pattern Implementation",
      description: "Using method local classes in factory pattern",
      code: examples.factory
    })
  );
}

export default MethodLocalExamples;