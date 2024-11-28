export const guiComparisonDiagram = `
classDiagram
    direction TB
    
    class Object {
        +equals(Object): boolean
        +hashCode(): int
        +toString(): String
    }
    
    class Component {
        <<abstract>>
        +paint(Graphics)
        +update(Graphics)
        +repaint()
        +setSize(Dimension)
        +setVisible(boolean)
        +setEnabled(boolean)
    }
    
    namespace AWT {
        class Container {
            +add(Component)
            +remove(Component)
            +setLayout(LayoutManager)
        }
        
        class Window {
            +setTitle(String)
            +pack()
            +toFront()
        }
        
        class Frame {
            +setMenuBar(MenuBar)
            +setState(int)
        }
        
        class Panel {
            +setBackground(Color)
            +setForeground(Color)
        }
        
        class Button {
            +setLabel(String)
            +getLabel(): String
        }
        
        class Label {
            +setText(String)
            +getText(): String
        }
    }
    
    namespace Swing {
        class JComponent {
            +paintComponent(Graphics)
            +setBorder(Border)
            +setToolTipText(String)
        }
        
        class JFrame {
            +setDefaultCloseOperation(int)
            +setJMenuBar(JMenuBar)
        }
        
        class JPanel {
            +setOpaque(boolean)
            +add(Component)
        }
        
        class JButton {
            +setText(String)
            +setIcon(Icon)
        }
        
        class JLabel {
            +setText(String)
            +setIcon(Icon)
        }
    }
    
    Object <|-- Component
    Component <|-- Container
    Container <|-- Window
    Window <|-- Frame
    Container <|-- Panel
    Component <|-- Button
    Component <|-- Label
    
    Component <|-- JComponent
    JComponent <|-- JButton
    JComponent <|-- JLabel
    JComponent <|-- JPanel
    Frame <|-- JFrame
    
    note for AWT "Heavy Weight Components"
    note for Swing "Light Weight Components"
`;