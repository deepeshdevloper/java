export const methodLocalInnerClassDiagram = `
classDiagram
    direction TB
    
    class OuterClass {
        -outerField: type
        +outerMethod()
        #protectedMethod()
        -privateMethod()
    }
    
    class Method {
        -localVariables
        -finalVariables
        +parameters
        -methodBody()
    }
    
    class LocalInnerClass {
        -innerFields
        +innerMethods()
        -privateInnerMethods()
        #protectedInnerMethods()
    }
    
    class Scope {
        +OuterClass members
        +Final local variables
        +Method parameters
        -Inner class members
    }
    
    OuterClass *-- Method: contains
    Method *-- LocalInnerClass: defines
    LocalInnerClass -- Scope: accesses
    OuterClass -- Scope: provides context
    
    note for OuterClass "Containing class"
    note for Method "Method scope"
    note for LocalInnerClass "Inner class definition"
    note for Scope "Accessible members"
`;