export const functionalInterfaceDiagram = `
classDiagram
    direction TB
    
    class FunctionalInterface {
        <<interface>>
        +singleAbstractMethod()
        +defaultMethod1()
        +defaultMethod2()
        +staticMethod()
    }
    
    namespace StandardInterfaces {
        class Predicate~T~ {
            <<interface>>
            +test(T): boolean
            +and(Predicate): Predicate
            +or(Predicate): Predicate
            +negate(): Predicate
            +isEqual(Object): Predicate
        }
        
        class Consumer~T~ {
            <<interface>>
            +accept(T): void
            +andThen(Consumer): Consumer
        }
        
        class Function~T,R~ {
            <<interface>>
            +apply(T): R
            +compose(Function): Function
            +andThen(Function): Function
            +identity(): Function
        }
        
        class Supplier~T~ {
            <<interface>>
            +get(): T
        }
        
        class UnaryOperator~T~ {
            <<interface>>
            +apply(T): T
            +compose(): UnaryOperator
            +andThen(): UnaryOperator
            +identity(): UnaryOperator
        }

        class BiFunction~T,U,R~ {
            <<interface>>
            +apply(T,U): R
            +andThen(Function): BiFunction
        }

        class BiConsumer~T,U~ {
            <<interface>>
            +accept(T,U): void
            +andThen(BiConsumer): BiConsumer
        }

        class BiPredicate~T,U~ {
            <<interface>>
            +test(T,U): boolean
            +and(BiPredicate): BiPredicate
            +or(BiPredicate): BiPredicate
            +negate(): BiPredicate
        }
    }
    
    FunctionalInterface <|.. Predicate
    FunctionalInterface <|.. Consumer
    FunctionalInterface <|.. Function
    FunctionalInterface <|.. Supplier
    FunctionalInterface <|.. UnaryOperator
    FunctionalInterface <|.. BiFunction
    FunctionalInterface <|.. BiConsumer
    FunctionalInterface <|.. BiPredicate
    
    note for FunctionalInterface "Single Abstract Method Interface"
    note for StandardInterfaces "java.util.function package"
`;