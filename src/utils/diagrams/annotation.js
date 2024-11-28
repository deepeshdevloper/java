export const annotationDiagram = `
classDiagram
    direction TB
    
    class Annotation {
        <<@interface>>
        +value(): String
        +enabled(): boolean
        +priority(): int
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
    
    class BuiltInAnnotations {
        +@Override
        +@Deprecated
        +@SuppressWarnings
        +@FunctionalInterface
    }
    
    class CustomAnnotation {
        +value(): String
        +priority(): int
    }
    
    MetaAnnotations <|-- CustomAnnotation: annotated with
    Annotation <|-- CustomAnnotation: defines
    RetentionPolicy <-- Annotation: uses
    ElementType <-- Annotation: uses
    BuiltInAnnotations --> Annotation: implements
    
    note for Annotation "Base interface"
    note for RetentionPolicy "Retention scope"
    note for ElementType "Valid targets"
    note for MetaAnnotations "Meta-annotations"
    note for BuiltInAnnotations "Standard annotations"
`;