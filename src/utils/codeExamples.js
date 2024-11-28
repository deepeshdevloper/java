// Collection of code examples for reuse across components
export const threadExamples = {
  basic: `// Basic thread creation
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}`,
  runnable: `// Using Runnable interface
Runnable task = () -> {
    System.out.println("Task executing in thread: " 
        + Thread.currentThread().getName());
};
new Thread(task).start();`,
  synchronization: `// Thread synchronization example
class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public synchronized int getCount() {
        return count;
    }
}`
};

export const anonymousClassExamples = {
  eventHandler: `// GUI Event Handler Example
JButton button = new JButton("Click Me");
button.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button clicked!");
    }
});`,
  
  comparator: `// Comparator Example
Collections.sort(people, new Comparator<Person>() {
    @Override
    public int compare(Person p1, Person p2) {
        return Integer.compare(p1.getAge(), p2.getAge());
    }
});`,

  runnable: `// Runnable Implementation
Thread thread = new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println("Thread running");
    }
});
thread.start();`,

  interface: `// Custom Interface Implementation
interface Calculator {
    int calculate(int x, int y);
}

Calculator adder = new Calculator() {
    @Override
    public int calculate(int x, int y) {
        return x + y;
    }
};`
};

export const annotationExamples = {
  custom: `@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Test {
    String value() default "";
}`,
  usage: `public class TestClass {
    @Test("unit test")
    public void testMethod() {
        // Test implementation
    }
}`
};

export const guiExamples = {
  awt: `import java.awt.*;
import java.awt.event.*;

public class AWTExample {
    public AWTExample() {
        Frame frame = new Frame("AWT Example");
        Button button = new Button("Click Me");
        
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                System.out.println("Button Clicked!");
            }
        });
        
        frame.add(button);
        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`,
  swing: `import javax.swing.*;
import java.awt.event.*;

public class SwingExample {
    public SwingExample() {
        JFrame frame = new JFrame("Swing Example");
        JButton button = new JButton("Click Me");
        
        button.addActionListener(e -> 
            System.out.println("Button Clicked!")
        );
        
        frame.add(button);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`
};