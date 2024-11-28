import React from 'react';
import ExampleCard from '../shared/ExampleCard';

const standardInterfacesCode = `// Common functional interfaces in Java
import java.util.function.*;

public class StandardInterfacesDemo {
    public static void main(String[] args) {
        // Predicate - Takes one argument, returns boolean
        Predicate<String> startsWithA = str -> str.startsWith("A");
        System.out.println(startsWithA.test("Apple")); // true
        
        // Consumer - Takes one argument, returns nothing
        Consumer<String> printer = str -> System.out.println(str);
        printer.accept("Hello World");
        
        // Function - Takes one argument, returns a result
        Function<String, Integer> length = str -> str.length();
        System.out.println(length.apply("Hello")); // 5
        
        // Supplier - Takes no arguments, returns a result
        Supplier<Double> random = () -> Math.random();
        System.out.println(random.get());
        
        // BiFunction - Takes two arguments, returns a result
        BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
        System.out.println(add.apply(5, 3)); // 8
    }
}`;

function StandardInterfaces() {
  return React.createElement("div", { className: "space-y-6" },
    React.createElement("h2", { className: "text-2xl font-semibold mb-4" },
      "Standard Functional Interfaces"
    ),
    React.createElement(ExampleCard, {
      title: "Common Functional Interfaces",
      description: "Examples of standard functional interfaces provided by Java",
      code: standardInterfacesCode
    })
  );
}

export default StandardInterfaces;