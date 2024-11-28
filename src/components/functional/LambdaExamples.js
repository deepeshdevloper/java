import React from 'react';
import ExampleCard from '../shared/ExampleCard';

const lambdaExamples = {
  basic: `// Basic lambda expressions
public class LambdaDemo {
    interface Calculator {
        int calculate(int x, int y);
    }
    
    public static void main(String[] args) {
        // Lambda expression
        Calculator add = (x, y) -> x + y;
        Calculator multiply = (x, y) -> x * y;
        
        System.out.println(add.calculate(5, 3));      // 8
        System.out.println(multiply.calculate(5, 3)); // 15
        
        // Method reference
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        names.forEach(System.out::println);
    }
}`,

  methodReference: `// Method reference examples
public class MethodReferenceDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        // Static method reference
        names.forEach(System.out::println);
        
        // Instance method reference
        String prefix = "User: ";
        names.forEach(prefix::concat);
        
        // Constructor reference
        Supplier<List<String>> listSupplier = ArrayList::new;
        List<String> newList = listSupplier.get();
    }
}`
};

function LambdaExamples() {
  return React.createElement("div", { className: "space-y-6" },
    React.createElement("h2", { className: "text-2xl font-semibold mb-4" },
      "Lambda Expressions and Method References"
    ),
    React.createElement(ExampleCard, {
      title: "Basic Lambda Expressions",
      description: "Examples of lambda expressions with functional interfaces",
      code: lambdaExamples.basic
    }),
    React.createElement(ExampleCard, {
      title: "Method References",
      description: "Different types of method references in Java",
      code: lambdaExamples.methodReference
    })
  );
}

export default LambdaExamples;