// Anonymous inner class diagram
export const anonymousClassDiagram = `
classDiagram
    direction TB
    
    class OuterClass {
        -outerField: type
        -staticField: type
        +outerMethod(): returnType
        +staticMethod(): returnType
    }
    
    class AnonymousClass {
        -localVariables: type
        -instanceVariables: type
        +overriddenMethods(): returnType
        +newMethods(): returnType
    }
    
    class Interface {
        <<interface>>
        +abstractMethod(): returnType
        +defaultMethod(): returnType
    }
    
    class BaseClass {
        +method(): returnType
        #protectedMethod(): returnType
    }
    
    OuterClass *-- AnonymousClass : contains
    Interface <|.. AnonymousClass : implements
    BaseClass <|-- AnonymousClass : extends
    
    note for AnonymousClass "1. No explicit class name\\n2. Can access final local variables\\n3. Can access outer class members\\n4. Cannot have static members\\n5. Cannot have constructors"
    note for OuterClass "1. Can be any class\\n2. Provides context\\n3. Can be abstract or concrete"
    note for Interface "1. Can be any interface\\n2. Single or multiple\\n3. Can have default methods"
    note for BaseClass "1. Can be any class\\n2. Must be non-final\\n3. Can be abstract"
`;