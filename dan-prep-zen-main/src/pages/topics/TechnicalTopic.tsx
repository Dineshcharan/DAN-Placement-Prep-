import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { ArrowLeft, LogOut, CheckCircle, XCircle } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { technicalTopics as questionBank } from '@/data/technicalQuestions';

const subjectData: Record<string, any> = {
  'oops': {
    title: 'Object-Oriented Programming',
    theory: 'OOP is a programming paradigm based on the concept of objects, which contain data in the form of fields (attributes) and code in the form of procedures (methods).',
    keyPoints: [
      'Encapsulation: Bundling data and methods that work on that data',
      'Inheritance: Acquiring properties and behaviors from parent class',
      'Polymorphism: Same interface, different implementations',
      'Abstraction: Hiding complex implementation details',
      'Class: Blueprint for creating objects',
      'Object: Instance of a class',
    ],
    questions: Array.from({ length: 100 }, (_, i) => {
      const questions = [
        {
          question: 'Which OOP concept is achieved by using function overloading and function overriding?',
          options: ['Encapsulation', 'Abstraction', 'Polymorphism', 'Inheritance'],
          correct: 2,
          explanation: 'Polymorphism allows objects to take many forms. Function overloading (compile-time) and overriding (runtime) are examples of polymorphism.'
        },
        {
          question: 'What is the purpose of a constructor in a class?',
          options: ['To destroy objects', 'To initialize objects', 'To copy objects', 'To compare objects'],
          correct: 1,
          explanation: 'A constructor is a special method that is automatically called when an object is created to initialize its state.'
        },
        {
          question: 'Which keyword is used to prevent a method from being overridden?',
          options: ['static', 'final', 'const', 'abstract'],
          correct: 1,
          explanation: 'The "final" keyword in Java prevents a method from being overridden by subclasses.'
        },
        {
          question: 'What is the difference between abstract class and interface?',
          options: ['No difference', 'Abstract class can have constructor, interface cannot', 'Interface can have implementation, abstract class cannot', 'Abstract class is slower'],
          correct: 1,
          explanation: 'Abstract classes can have constructors, member variables, and concrete methods. Interfaces (in older versions) can only have method declarations.'
        },
        {
          question: 'What is method overloading?',
          options: ['Same method name, same parameters', 'Same method name, different parameters', 'Different method name, same parameters', 'Calling a method multiple times'],
          correct: 1,
          explanation: 'Method overloading is when multiple methods have the same name but different parameters (number, type, or order).'
        },
        {
          question: 'What is the difference between overloading and overriding?',
          options: ['No difference', 'Overloading is compile-time, overriding is runtime', 'Overriding is compile-time, overloading is runtime', 'Both are same-time'],
          correct: 1,
          explanation: 'Overloading happens at compile-time (same method name, different parameters), while overriding happens at runtime (same signature in parent and child).'
        },
        {
          question: 'What is a virtual function?',
          options: ['Function that doesn\'t exist', 'Function that can be overridden in derived class', 'Static function', 'Private function'],
          correct: 1,
          explanation: 'A virtual function is a member function in the base class that can be overridden in a derived class, enabling runtime polymorphism.'
        },
        {
          question: 'What is the diamond problem in multiple inheritance?',
          options: ['Memory leak', 'Ambiguity when two parent classes have same method', 'Performance issue', 'Syntax error'],
          correct: 1,
          explanation: 'The diamond problem occurs when a class inherits from two classes that share a common base class, creating ambiguity about which method to use.'
        },
        {
          question: 'Which access specifier makes members accessible only within the same class?',
          options: ['public', 'private', 'protected', 'internal'],
          correct: 1,
          explanation: 'Private members are accessible only within the same class, providing the highest level of encapsulation.'
        },
        {
          question: 'What is a destructor?',
          options: ['Creates objects', 'Deletes objects and frees memory', 'Copies objects', 'Compares objects'],
          correct: 1,
          explanation: 'A destructor is a special method called when an object is destroyed to clean up resources and free memory.'
        },
        {
          question: 'Can a constructor be virtual?',
          options: ['Yes', 'No', 'Only in C++', 'Only in Java'],
          correct: 1,
          explanation: 'Constructors cannot be virtual because they are called when creating an object, before the vtable is set up for polymorphism.'
        },
        {
          question: 'What is the purpose of the "this" keyword?',
          options: ['Refers to parent class', 'Refers to current object', 'Refers to static members', 'Creates new object'],
          correct: 1,
          explanation: 'The "this" keyword refers to the current instance of the class, useful for distinguishing between instance and parameter variables.'
        },
        {
          question: 'What is a copy constructor?',
          options: ['Constructor that copies code', 'Constructor that creates copy of an object', 'Constructor that deletes objects', 'Constructor that compares objects'],
          correct: 1,
          explanation: 'A copy constructor creates a new object as a copy of an existing object, typically used for deep copying.'
        },
        {
          question: 'Can we overload a destructor?',
          options: ['Yes', 'No', 'Only in C++', 'Only in Java'],
          correct: 1,
          explanation: 'Destructors cannot be overloaded because they don\'t take parameters and there can only be one destructor per class.'
        },
        {
          question: 'What is method hiding?',
          options: ['Making method private', 'Derived class method hides base class method with same name', 'Deleting a method', 'Encrypting method code'],
          correct: 1,
          explanation: 'Method hiding occurs when a derived class defines a static method with the same signature as a base class static method.'
        },
        {
          question: 'What is the purpose of the "super" keyword?',
          options: ['Creates super object', 'Refers to parent class', 'Makes method faster', 'Defines super class'],
          correct: 1,
          explanation: 'The "super" keyword refers to the immediate parent class and is used to access parent class members and constructors.'
        },
        {
          question: 'Can an abstract class have a constructor?',
          options: ['No', 'Yes', 'Only private constructor', 'Only default constructor'],
          correct: 1,
          explanation: 'Abstract classes can have constructors that are called when a concrete subclass is instantiated.'
        },
        {
          question: 'What is a singleton pattern?',
          options: ['Multiple instances', 'Only one instance of a class', 'No instances', 'Two instances'],
          correct: 1,
          explanation: 'Singleton pattern ensures a class has only one instance and provides a global point of access to it.'
        },
        {
          question: 'Can a final class be inherited?',
          options: ['Yes', 'No', 'Only by abstract classes', 'Only by interfaces'],
          correct: 1,
          explanation: 'A final class cannot be inherited to prevent modification of its behavior through inheritance.'
        },
        {
          question: 'What is composition in OOP?',
          options: ['Inheriting properties', 'Has-a relationship between objects', 'Is-a relationship', 'Method calling'],
          correct: 1,
          explanation: 'Composition represents a "has-a" relationship where one object contains another object as a member.'
        },
        {
          question: 'What is aggregation?',
          options: ['Strong ownership', 'Weak ownership/association', 'No relationship', 'Parent-child relationship'],
          correct: 1,
          explanation: 'Aggregation is a weak form of composition where objects have independent lifetimes.'
        },
        {
          question: 'What is the Liskov Substitution Principle?',
          options: ['Classes should be substitutable', 'Derived class objects should be substitutable for base class', 'Methods should be substitutable', 'Variables should be substitutable'],
          correct: 1,
          explanation: 'LSP states that objects of a derived class should be able to replace objects of the base class without affecting program correctness.'
        },
        {
          question: 'What is the Open/Closed Principle?',
          options: ['Classes should be open for modification', 'Classes should be open for extension, closed for modification', 'Classes should be closed', 'Classes should be open'],
          correct: 1,
          explanation: 'Open/Closed Principle states that software entities should be open for extension but closed for modification.'
        },
        {
          question: 'What is the Single Responsibility Principle?',
          options: ['Class should have multiple responsibilities', 'Class should have one responsibility', 'Method should have one line', 'Variable should have one value'],
          correct: 1,
          explanation: 'SRP states that a class should have only one reason to change, i.e., one responsibility or job.'
        },
        {
          question: 'What is dependency injection?',
          options: ['Creating dependencies inside class', 'Providing dependencies from outside', 'Deleting dependencies', 'Hiding dependencies'],
          correct: 1,
          explanation: 'Dependency Injection is a design pattern where dependencies are provided to a class from outside rather than created inside.'
        },
        {
          question: 'What is a factory pattern?',
          options: ['Creates factories', 'Creates objects without specifying exact class', 'Destroys objects', 'Copies objects'],
          correct: 1,
          explanation: 'Factory pattern provides an interface for creating objects without specifying their concrete classes.'
        },
        {
          question: 'What is an observer pattern?',
          options: ['Watches variables', 'One-to-many dependency for automatic updates', 'Deletes observers', 'Creates observers'],
          correct: 1,
          explanation: 'Observer pattern defines a one-to-many dependency where when one object changes state, all dependents are notified.'
        },
        {
          question: 'What is tight coupling?',
          options: ['Low dependency', 'High dependency between classes', 'No dependency', 'Medium dependency'],
          correct: 1,
          explanation: 'Tight coupling means high dependency between classes, making them difficult to modify independently.'
        },
        {
          question: 'What is loose coupling?',
          options: ['High dependency', 'Low dependency between classes', 'No classes', 'Infinite dependency'],
          correct: 1,
          explanation: 'Loose coupling means low dependency between classes, making the system more flexible and maintainable.'
        },
        {
          question: 'What is an interface?',
          options: ['Concrete class', 'Contract defining method signatures', 'Variable type', 'Function'],
          correct: 1,
          explanation: 'An interface is a contract that defines method signatures that implementing classes must provide.'
        },
        {
          question: 'Can an interface have variables?',
          options: ['Yes, any variables', 'Only static final variables', 'No variables', 'Only instance variables'],
          correct: 1,
          explanation: 'Interfaces can only have public static final variables (constants).'
        },
        {
          question: 'What is multiple inheritance?',
          options: ['One parent', 'Multiple parent classes', 'No parents', 'Self inheritance'],
          correct: 1,
          explanation: 'Multiple inheritance is when a class inherits from more than one parent class.'
        },
        {
          question: 'Does Java support multiple inheritance?',
          options: ['Yes, with classes', 'No, but supports with interfaces', 'Yes, always', 'No, never'],
          correct: 1,
          explanation: 'Java doesn\'t support multiple inheritance with classes but allows implementing multiple interfaces.'
        },
        {
          question: 'What is a static method?',
          options: ['Instance method', 'Method belonging to class, not instance', 'Final method', 'Abstract method'],
          correct: 1,
          explanation: 'Static methods belong to the class itself rather than instances and can be called without creating an object.'
        },
        {
          question: 'Can we override a static method?',
          options: ['Yes', 'No, we can hide it', 'Yes, always', 'Only in Java'],
          correct: 1,
          explanation: 'Static methods cannot be overridden; they can only be hidden when redeclared in a subclass.'
        },
        {
          question: 'What is a nested class?',
          options: ['Class outside another class', 'Class defined inside another class', 'Class with no members', 'Abstract class'],
          correct: 1,
          explanation: 'A nested class is a class defined within another class, useful for logical grouping and encapsulation.'
        },
        {
          question: 'What is an inner class?',
          options: ['Static nested class', 'Non-static nested class', 'Outer class', 'Interface'],
          correct: 1,
          explanation: 'An inner class is a non-static nested class that has access to members of the enclosing class.'
        },
        {
          question: 'What is an anonymous class?',
          options: ['Named class', 'Class without a name', 'Abstract class', 'Final class'],
          correct: 1,
          explanation: 'An anonymous class is a class without a name, typically used for creating one-time use implementations.'
        },
        {
          question: 'What is the purpose of the "protected" access modifier?',
          options: ['Public access', 'Accessible within package and subclasses', 'Private access', 'No access'],
          correct: 1,
          explanation: 'Protected members are accessible within the same package and by subclasses even in different packages.'
        },
        {
          question: 'What is object cloning?',
          options: ['Deleting object', 'Creating exact copy of object', 'Renaming object', 'Comparing objects'],
          correct: 1,
          explanation: 'Object cloning creates an exact copy of an existing object with the same data.'
        },
        {
          question: 'What is shallow copy?',
          options: ['Deep copy', 'Copies object references, not actual objects', 'No copy', 'Partial copy'],
          correct: 1,
          explanation: 'Shallow copy copies object references rather than creating new instances of nested objects.'
        },
        {
          question: 'What is deep copy?',
          options: ['Reference copy', 'Recursive copy creating new instances', 'No copy', 'Surface copy'],
          correct: 1,
          explanation: 'Deep copy recursively copies all nested objects, creating completely independent copies.'
        },
        {
          question: 'What is runtime polymorphism?',
          options: ['Compile-time binding', 'Method overriding with dynamic binding', 'Static polymorphism', 'No polymorphism'],
          correct: 1,
          explanation: 'Runtime polymorphism is achieved through method overriding where the method to call is determined at runtime.'
        },
        {
          question: 'What is compile-time polymorphism?',
          options: ['Runtime binding', 'Method overloading with static binding', 'Dynamic polymorphism', 'No polymorphism'],
          correct: 1,
          explanation: 'Compile-time polymorphism is achieved through method overloading where the method to call is determined at compile time.'
        },
        {
          question: 'What is a pure virtual function?',
          options: ['Implemented function', 'Function with no implementation in base class', 'Static function', 'Final function'],
          correct: 1,
          explanation: 'A pure virtual function has no implementation in the base class and must be implemented by derived classes.'
        },
        {
          question: 'What is the difference between composition and inheritance?',
          options: ['No difference', 'Composition is has-a, inheritance is is-a', 'Both are same', 'Inheritance is has-a'],
          correct: 1,
          explanation: 'Composition represents a "has-a" relationship while inheritance represents an "is-a" relationship.'
        },
        {
          question: 'What is cohesion in OOP?',
          options: ['Low relatedness', 'How closely related class members are', 'Class count', 'Method count'],
          correct: 1,
          explanation: 'Cohesion measures how closely related and focused the responsibilities of a class are.'
        },
        {
          question: 'What is the Interface Segregation Principle?',
          options: ['One big interface', 'Many specific interfaces better than one general', 'No interfaces', 'Abstract classes only'],
          correct: 1,
          explanation: 'ISP states that clients should not be forced to depend on interfaces they don\'t use; prefer multiple specific interfaces.'
        },
        {
          question: 'What is the Dependency Inversion Principle?',
          options: ['Depend on concrete classes', 'Depend on abstractions, not concretions', 'No dependencies', 'Circular dependencies'],
          correct: 1,
          explanation: 'DIP states that high-level modules should not depend on low-level modules; both should depend on abstractions.'
        },
        {
          question: 'What is method chaining?',
          options: ['Calling methods separately', 'Calling multiple methods in sequence on same object', 'Deleting methods', 'Creating methods'],
          correct: 1,
          explanation: 'Method chaining allows calling multiple methods in sequence by returning "this" from each method.'
        },
        {
          question: 'What is the builder pattern?',
          options: ['Destroys objects', 'Constructs complex objects step by step', 'Simple object creation', 'No construction'],
          correct: 1,
          explanation: 'Builder pattern constructs complex objects step by step, separating construction from representation.'
        },
        {
          question: 'What is the prototype pattern?',
          options: ['Creates from scratch', 'Creates objects by cloning existing prototype', 'Destroys prototypes', 'No creation'],
          correct: 1,
          explanation: 'Prototype pattern creates new objects by cloning an existing prototype object.'
        },
        {
          question: 'What is an adapter pattern?',
          options: ['Removes compatibility', 'Converts interface to match another', 'Creates adapters', 'Destroys objects'],
          correct: 1,
          explanation: 'Adapter pattern converts the interface of a class into another interface that clients expect.'
        },
        {
          question: 'What is a decorator pattern?',
          options: ['Removes features', 'Adds features to object dynamically', 'Destroys decorations', 'Static decoration'],
          correct: 1,
          explanation: 'Decorator pattern adds new functionality to objects dynamically by wrapping them.'
        },
        {
          question: 'What is a strategy pattern?',
          options: ['One algorithm', 'Defines family of algorithms interchangeably', 'No algorithms', 'Fixed strategy'],
          correct: 1,
          explanation: 'Strategy pattern defines a family of algorithms and makes them interchangeable.'
        },
        {
          question: 'What is the template method pattern?',
          options: ['No template', 'Defines algorithm skeleton, subclasses fill steps', 'Creates templates', 'Destroys methods'],
          correct: 1,
          explanation: 'Template Method pattern defines the skeleton of an algorithm, letting subclasses override specific steps.'
        },
        {
          question: 'What is a proxy pattern?',
          options: ['Direct access', 'Provides surrogate/placeholder for another object', 'Removes proxies', 'Creates duplicates'],
          correct: 1,
          explanation: 'Proxy pattern provides a surrogate or placeholder object to control access to another object.'
        },
        {
          question: 'What is the state pattern?',
          options: ['No state', 'Allows object to change behavior when state changes', 'Fixed state', 'Destroys state'],
          correct: 1,
          explanation: 'State pattern allows an object to alter its behavior when its internal state changes.'
        },
        {
          question: 'What is the command pattern?',
          options: ['No commands', 'Encapsulates request as object', 'Executes directly', 'Destroys commands'],
          correct: 1,
          explanation: 'Command pattern encapsulates a request as an object, allowing parameterization and queuing.'
        },
        {
          question: 'What is the iterator pattern?',
          options: ['Random access', 'Sequential access to collection elements', 'No access', 'Destroys elements'],
          correct: 1,
          explanation: 'Iterator pattern provides a way to access elements of a collection sequentially without exposing underlying representation.'
        },
        {
          question: 'What is the mediator pattern?',
          options: ['Direct communication', 'Centralizes complex communications', 'No communication', 'Broadcast only'],
          correct: 1,
          explanation: 'Mediator pattern centralizes complex communications and control logic between related objects.'
        },
        {
          question: 'What is the memento pattern?',
          options: ['No state save', 'Captures and restores object state', 'Destroys state', 'Creates new state'],
          correct: 1,
          explanation: 'Memento pattern captures and externalizes an object\'s internal state for later restoration.'
        },
        {
          question: 'What is the chain of responsibility pattern?',
          options: ['Single handler', 'Passes request along chain of handlers', 'No handlers', 'Fixed handler'],
          correct: 1,
          explanation: 'Chain of Responsibility passes a request along a chain of handlers until one handles it.'
        },
        {
          question: 'What is the visitor pattern?',
          options: ['No visits', 'Separates algorithm from object structure', 'Fixed operations', 'Destroys visitors'],
          correct: 1,
          explanation: 'Visitor pattern separates an algorithm from the object structure it operates on.'
        },
        {
          question: 'Can we have multiple constructors in a class?',
          options: ['No', 'Yes, through constructor overloading', 'Only two', 'Only default'],
          correct: 1,
          explanation: 'Yes, multiple constructors can exist through constructor overloading with different parameters.'
        },
        {
          question: 'What is constructor chaining?',
          options: ['Independent constructors', 'One constructor calls another', 'Destroying constructors', 'No construction'],
          correct: 1,
          explanation: 'Constructor chaining is when one constructor calls another constructor in the same or parent class.'
        },
        {
          question: 'What is the default constructor?',
          options: ['Constructor with parameters', 'Parameterless constructor', 'Destructor', 'Copy constructor'],
          correct: 1,
          explanation: 'A default constructor is a parameterless constructor that is automatically provided if no constructor is defined.'
        },
        {
          question: 'Can an interface extend another interface?',
          options: ['No', 'Yes', 'Only in Java', 'Only one interface'],
          correct: 1,
          explanation: 'Yes, interfaces can extend other interfaces, creating a hierarchy of interface contracts.'
        },
        {
          question: 'Can a class implement multiple interfaces?',
          options: ['No', 'Yes', 'Only two', 'Only in C++'],
          correct: 1,
          explanation: 'Yes, a class can implement multiple interfaces, providing flexibility without multiple inheritance issues.'
        },
        {
          question: 'What is an abstract method?',
          options: ['Method with implementation', 'Method without implementation', 'Static method', 'Final method'],
          correct: 1,
          explanation: 'An abstract method has no implementation in the abstract class and must be implemented by concrete subclasses.'
        },
        {
          question: 'Can an abstract class have concrete methods?',
          options: ['No', 'Yes', 'Only private methods', 'Only static methods'],
          correct: 1,
          explanation: 'Yes, abstract classes can have both abstract and concrete (implemented) methods.'
        },
        {
          question: 'What is early binding?',
          options: ['Runtime binding', 'Compile-time binding', 'No binding', 'Late binding'],
          correct: 1,
          explanation: 'Early binding (static binding) occurs at compile-time, typically with method overloading and static methods.'
        },
        {
          question: 'What is late binding?',
          options: ['Compile-time binding', 'Runtime binding', 'No binding', 'Early binding'],
          correct: 1,
          explanation: 'Late binding (dynamic binding) occurs at runtime, typically with method overriding and virtual functions.'
        },
        {
          question: 'What is object serialization?',
          options: ['Deleting objects', 'Converting object to byte stream', 'Creating objects', 'Comparing objects'],
          correct: 1,
          explanation: 'Serialization converts an object into a byte stream for storage or transmission.'
        },
        {
          question: 'What is deserialization?',
          options: ['Creating byte stream', 'Converting byte stream back to object', 'Deleting objects', 'Comparing streams'],
          correct: 1,
          explanation: 'Deserialization reconstructs an object from its serialized byte stream representation.'
        },
        {
          question: 'What is the difference between == and equals()?',
          options: ['No difference', '== checks reference, equals() checks value', 'Both check value', 'Both check reference'],
          correct: 1,
          explanation: '== compares object references (memory addresses), while equals() compares object values (can be overridden).'
        },
        {
          question: 'What is garbage collection?',
          options: ['Manual memory management', 'Automatic memory management', 'Creating objects', 'No memory management'],
          correct: 1,
          explanation: 'Garbage collection is automatic memory management that reclaims memory from objects no longer in use.'
        },
        {
          question: 'Can we force garbage collection?',
          options: ['Yes, guaranteed', 'We can request, but not force', 'No, never', 'Only in C++'],
          correct: 1,
          explanation: 'We can request garbage collection (System.gc()), but the JVM decides when to actually run it.'
        },
        {
          question: 'What is the finalize() method?',
          options: ['Creates object', 'Called before garbage collection', 'Initializes object', 'Compares objects'],
          correct: 1,
          explanation: 'finalize() is called by the garbage collector before reclaiming an object\'s memory, used for cleanup.'
        },
        {
          question: 'What is immutability?',
          options: ['Objects can change', 'Objects cannot change after creation', 'Objects can be deleted', 'Objects can be copied'],
          correct: 1,
          explanation: 'Immutability means an object\'s state cannot be modified after creation, providing thread safety and reliability.'
        },
        {
          question: 'What is a marker interface?',
          options: ['Interface with methods', 'Interface with no methods', 'Abstract class', 'Concrete class'],
          correct: 1,
          explanation: 'A marker interface has no methods and is used to mark or tag classes with a specific property (e.g., Serializable).'
        },
        {
          question: 'What is reflection in OOP?',
          options: ['Mirroring code', 'Examining/modifying program at runtime', 'Code copying', 'Static analysis'],
          correct: 1,
          explanation: 'Reflection allows a program to examine and modify its own structure and behavior at runtime.'
        },
        {
          question: 'What is the difference between association and composition?',
          options: ['No difference', 'Association is weaker, composition is strong ownership', 'Both are same', 'Composition is weaker'],
          correct: 1,
          explanation: 'Association is a loose relationship, while composition is strong ownership where child cannot exist without parent.'
        },
        {
          question: 'What is encapsulation benefit?',
          options: ['Exposes everything', 'Data hiding and controlled access', 'Slow performance', 'More memory'],
          correct: 1,
          explanation: 'Encapsulation provides data hiding, controlled access, and the ability to change implementation without affecting clients.'
        },
        {
          question: 'What is inheritance benefit?',
          options: ['Code duplication', 'Code reuse and extensibility', 'More complexity', 'Slower execution'],
          correct: 1,
          explanation: 'Inheritance promotes code reuse, extensibility, and establishes relationships between classes.'
        },
        {
          question: 'What is polymorphism benefit?',
          options: ['One form only', 'Flexibility and extensibility', 'Code duplication', 'Slower execution'],
          correct: 1,
          explanation: 'Polymorphism provides flexibility, extensibility, and the ability to work with objects through common interfaces.'
        },
        {
          question: 'What is abstraction benefit?',
          options: ['Shows all details', 'Reduces complexity by hiding details', 'More code', 'Slower performance'],
          correct: 1,
          explanation: 'Abstraction reduces complexity by hiding implementation details and showing only essential features.'
        },
        {
          question: 'Can we instantiate an abstract class?',
          options: ['Yes', 'No', 'Only with new keyword', 'Only in Java'],
          correct: 1,
          explanation: 'Abstract classes cannot be instantiated directly; they can only be instantiated through their concrete subclasses.'
        },
        {
          question: 'Can we instantiate an interface?',
          options: ['Yes', 'No', 'Only in Java 8+', 'Only with lambda'],
          correct: 1,
          explanation: 'Interfaces cannot be instantiated directly, but anonymous classes or lambda expressions can provide implementations.'
        },
        {
          question: 'What is method signature?',
          options: ['Method body', 'Method name and parameters', 'Return type only', 'Access modifier'],
          correct: 1,
          explanation: 'Method signature consists of the method name and parameter list (types and order), used to identify unique methods.'
        },
        {
          question: 'Can return type be part of method overloading?',
          options: ['Yes, only return type', 'No, parameters must differ', 'Yes, with parameters', 'Only in C++'],
          correct: 1,
          explanation: 'Return type alone cannot differentiate overloaded methods; parameters must be different.'
        },
        {
          question: 'What is a sealed class?',
          options: ['Open for inheritance', 'Restricts which classes can inherit', 'Abstract class', 'Final class'],
          correct: 1,
          explanation: 'A sealed class restricts which classes can inherit from it, providing controlled inheritance hierarchy.'
        },
        {
          question: 'What is the difference between String and StringBuilder?',
          options: ['No difference', 'String is immutable, StringBuilder is mutable', 'Both mutable', 'Both immutable'],
          correct: 1,
          explanation: 'String is immutable (cannot be changed), while StringBuilder is mutable (can be modified), making it more efficient for concatenation.'
        },
        {
          question: 'What is autoboxing?',
          options: ['Manual conversion', 'Automatic conversion of primitive to wrapper', 'Creating boxes', 'Deleting objects'],
          correct: 1,
          explanation: 'Autoboxing is automatic conversion of primitive types to their corresponding wrapper class objects.'
        },
        {
          question: 'What is unboxing?',
          options: ['Creating primitives', 'Automatic conversion of wrapper to primitive', 'Deleting boxes', 'Manual conversion'],
          correct: 1,
          explanation: 'Unboxing is automatic conversion of wrapper class objects back to their corresponding primitive types.'
        },
        {
          question: 'What is the purpose of the instanceof operator?',
          options: ['Creates instances', 'Checks if object is instance of class', 'Deletes instances', 'Compares classes'],
          correct: 1,
          explanation: 'instanceof operator checks whether an object is an instance of a specific class or implements an interface.'
        },
        {
          question: 'What is type casting in OOP?',
          options: ['Deleting types', 'Converting one type to another', 'Creating types', 'Comparing types'],
          correct: 1,
          explanation: 'Type casting is converting a variable from one type to another, either implicitly (upcasting) or explicitly (downcasting).'
        },
        {
          question: 'What is upcasting?',
          options: ['Child to parent conversion', 'Parent to child conversion', 'Same type conversion', 'No conversion'],
          correct: 0,
          explanation: 'Upcasting is converting a derived class reference to a base class reference, which is always safe and implicit.'
        },
        {
          question: 'What is downcasting?',
          options: ['Parent to child conversion', 'Child to parent conversion', 'Same type conversion', 'No conversion'],
          correct: 0,
          explanation: 'Downcasting is converting a base class reference to a derived class reference, which requires explicit casting and can fail at runtime.'
        }
      ];
      return { id: i + 1, ...questions[i % questions.length] };
    })
  },
  'dbms': {
    title: 'Database Management Systems',
    theory: 'DBMS is software that handles the storage, retrieval, and updating of data in a database while ensuring data integrity and security.',
    keyPoints: [
      'Primary Key: Unique identifier for table rows',
      'Foreign Key: References primary key of another table',
      'Normalization: Organizing data to reduce redundancy',
      'ACID: Atomicity, Consistency, Isolation, Durability',
      'JOIN: Combining rows from two or more tables',
      'Index: Improves query performance',
    ],
    questions: Array.from({ length: 100 }, (_, i) => {
      const questions = [
        {
          question: 'Which normal form eliminates transitive dependency?',
          options: ['1NF', '2NF', '3NF', 'BCNF'],
          correct: 2,
          explanation: 'Third Normal Form (3NF) eliminates transitive dependencies, where non-key attributes depend on other non-key attributes.'
        },
        {
          question: 'What does ACID stand for in database transactions?',
          options: ['Atomicity, Consistency, Isolation, Durability', 'Accuracy, Completeness, Integrity, Data', 'Access, Control, Information, Database', 'None of the above'],
          correct: 0,
          explanation: 'ACID properties ensure reliable database transactions: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions), Durability (permanent changes).'
        },
        {
          question: 'Which SQL command is used to remove all rows from a table without logging individual row deletions?',
          options: ['DELETE', 'DROP', 'TRUNCATE', 'REMOVE'],
          correct: 2,
          explanation: 'TRUNCATE removes all rows from a table quickly without logging individual deletions, unlike DELETE which logs each row.'
        },
        {
          question: 'What is the purpose of indexing in databases?',
          options: ['To slow down queries', 'To improve query performance', 'To increase storage', 'To delete records'],
          correct: 1,
          explanation: 'Indexes improve query performance by creating a data structure that allows faster data retrieval, similar to a book index.'
        },
        {
          question: 'Which join returns all records from both tables, matched and unmatched?',
          options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
          correct: 3,
          explanation: 'FULL OUTER JOIN returns all records from both tables, filling with NULL where there is no match.'
        },
        {
          question: 'What is a candidate key?',
          options: ['Non-unique attribute', 'Minimal set of attributes that uniquely identify a record', 'Foreign key', 'Index'],
          correct: 1,
          explanation: 'A candidate key is a minimal set of attributes that can uniquely identify a tuple. One becomes the primary key.'
        },
        {
          question: 'What is a composite key?',
          options: ['Single attribute key', 'Key made up of multiple attributes', 'Foreign key', 'Unique key'],
          correct: 1,
          explanation: 'A composite key is a primary key composed of multiple attributes together to uniquely identify records.'
        },
        {
          question: 'What is referential integrity?',
          options: ['No constraints', 'Foreign key must match primary key or be NULL', 'Primary key constraint', 'Unique constraint'],
          correct: 1,
          explanation: 'Referential integrity ensures that a foreign key value must match a primary key value in the referenced table or be NULL.'
        },
        {
          question: 'What is the difference between DELETE and TRUNCATE?',
          options: ['No difference', 'DELETE can have WHERE, TRUNCATE removes all rows', 'TRUNCATE is slower', 'DELETE is faster'],
          correct: 1,
          explanation: 'DELETE can use WHERE clause and logs each row deletion; TRUNCATE removes all rows quickly without logging.'
        },
        {
          question: 'What is a view in database?',
          options: ['Physical table', 'Virtual table based on query', 'Index', 'Stored procedure'],
          correct: 1,
          explanation: 'A view is a virtual table based on a SQL query result set, providing security and simplification.'
        },
        {
          question: 'Can we insert data into a view?',
          options: ['Never', 'Yes, if it meets certain conditions', 'Always', 'Only SELECT allowed'],
          correct: 1,
          explanation: 'Simple views (based on single table without aggregations) can be updated; complex views generally cannot.'
        },
        {
          question: 'What is a stored procedure?',
          options: ['SQL query', 'Precompiled SQL code stored in database', 'Table', 'View'],
          correct: 1,
          explanation: 'A stored procedure is precompiled SQL code stored in the database that can be executed repeatedly.'
        },
        {
          question: 'What is a trigger?',
          options: ['Manual procedure', 'Automatic procedure executed on events', 'Index', 'Constraint'],
          correct: 1,
          explanation: 'A trigger is a stored procedure that automatically executes when specific database events occur (INSERT, UPDATE, DELETE).'
        },
        {
          question: 'What is denormalization?',
          options: ['Normalizing data', 'Adding redundancy to improve performance', 'Removing data', 'Creating indexes'],
          correct: 1,
          explanation: 'Denormalization intentionally adds redundancy to a normalized database to improve query performance.'
        },
        {
          question: 'What is First Normal Form (1NF)?',
          options: ['Allows duplicates', 'Each column contains atomic values', 'Allows NULL', 'No primary key needed'],
          correct: 1,
          explanation: '1NF requires that each column contains atomic (indivisible) values and each record is unique.'
        },
        {
          question: 'What is Second Normal Form (2NF)?',
          options: ['Same as 1NF', 'Must be in 1NF and no partial dependencies', 'Allows partial dependencies', 'No primary key'],
          correct: 1,
          explanation: '2NF requires being in 1NF and eliminating partial dependencies (non-key attributes depend on entire primary key).'
        },
        {
          question: 'What is BCNF (Boyce-Codd Normal Form)?',
          options: ['Same as 3NF', 'Stricter version of 3NF', 'Weaker than 3NF', 'Same as 1NF'],
          correct: 1,
          explanation: 'BCNF is stricter than 3NF; every determinant must be a candidate key.'
        },
        {
          question: 'What is a clustered index?',
          options: ['Logical index', 'Physically sorts data rows', 'Multiple per table', 'Slower than non-clustered'],
          correct: 1,
          explanation: 'A clustered index physically sorts and stores data rows in the table based on key values. Only one per table.'
        },
        {
          question: 'What is a non-clustered index?',
          options: ['Sorts data rows', 'Separate structure with pointers to data', 'Only one per table', 'Slower than clustered'],
          correct: 1,
          explanation: 'A non-clustered index is a separate structure containing key values and pointers to actual data rows. Multiple allowed.'
        },
        {
          question: 'What is database transaction?',
          options: ['Single operation', 'Logical unit of work with multiple operations', 'Query', 'Table'],
          correct: 1,
          explanation: 'A transaction is a logical unit of work containing one or more database operations that execute as a single unit.'
        },
        {
          question: 'What is COMMIT in database?',
          options: ['Rollback changes', 'Permanently save transaction changes', 'Start transaction', 'Create table'],
          correct: 1,
          explanation: 'COMMIT permanently saves all changes made in the current transaction to the database.'
        },
        {
          question: 'What is ROLLBACK?',
          options: ['Save changes', 'Undo transaction changes', 'Commit changes', 'Delete table'],
          correct: 1,
          explanation: 'ROLLBACK undoes all changes made in the current transaction, reverting to the previous state.'
        },
        {
          question: 'What is a savepoint?',
          options: ['Transaction end', 'Intermediate point in transaction for partial rollback', 'Table backup', 'Database backup'],
          correct: 1,
          explanation: 'A savepoint creates an intermediate point within a transaction to which you can rollback without affecting the entire transaction.'
        },
        {
          question: 'What is database locking?',
          options: ['Security feature', 'Concurrency control mechanism', 'Encryption', 'Backup'],
          correct: 1,
          explanation: 'Locking is a concurrency control mechanism that prevents conflicts when multiple users access data simultaneously.'
        },
        {
          question: 'What is a deadlock in database?',
          options: ['Fast lock', 'Two transactions wait for each other indefinitely', 'No lock', 'Single lock'],
          correct: 1,
          explanation: 'Deadlock occurs when two or more transactions wait for each other to release locks, creating a circular dependency.'
        },
        {
          question: 'What is optimistic locking?',
          options: ['Always locks', 'Checks for conflicts before committing', 'Pessimistic approach', 'No checking'],
          correct: 1,
          explanation: 'Optimistic locking assumes conflicts are rare and checks for conflicts only at commit time using versioning.'
        },
        {
          question: 'What is pessimistic locking?',
          options: ['No locks', 'Locks data immediately before operations', 'Checks at commit', 'Optimistic approach'],
          correct: 1,
          explanation: 'Pessimistic locking locks data immediately when accessed, preventing other transactions from modifying it.'
        },
        {
          question: 'What is a subquery?',
          options: ['Main query', 'Query nested inside another query', 'Stored procedure', 'View'],
          correct: 1,
          explanation: 'A subquery is a query nested within another SQL query, used to provide values for the outer query.'
        },
        {
          question: 'What is a correlated subquery?',
          options: ['Independent subquery', 'Subquery that references outer query', 'Faster subquery', 'No correlation'],
          correct: 1,
          explanation: 'A correlated subquery references columns from the outer query and is executed once for each row of the outer query.'
        },
        {
          question: 'What is the difference between UNION and UNION ALL?',
          options: ['No difference', 'UNION removes duplicates, UNION ALL keeps them', 'UNION ALL is slower', 'UNION keeps duplicates'],
          correct: 1,
          explanation: 'UNION combines results and removes duplicates; UNION ALL combines all results including duplicates, making it faster.'
        },
        {
          question: 'What is a self join?',
          options: ['Join two tables', 'Table joined with itself', 'Cross join', 'Natural join'],
          correct: 1,
          explanation: 'A self join is when a table is joined with itself, useful for hierarchical or comparative queries.'
        },
        {
          question: 'What is a cross join?',
          options: ['Inner join', 'Cartesian product of two tables', 'Left join', 'Right join'],
          correct: 1,
          explanation: 'Cross join returns the Cartesian product of two tables, combining each row from the first with every row from the second.'
        },
        {
          question: 'What is a natural join?',
          options: ['Manual join', 'Automatic join on same column names', 'Cross join', 'No join'],
          correct: 1,
          explanation: 'Natural join automatically joins tables based on columns with the same names in both tables.'
        },
        {
          question: 'What is the GROUP BY clause used for?',
          options: ['Filtering rows', 'Grouping rows with same values', 'Sorting', 'Joining'],
          correct: 1,
          explanation: 'GROUP BY groups rows that have the same values in specified columns, often used with aggregate functions.'
        },
        {
          question: 'What is the HAVING clause?',
          options: ['Filters before grouping', 'Filters after grouping', 'Same as WHERE', 'Joins tables'],
          correct: 1,
          explanation: 'HAVING filters groups after GROUP BY is applied, whereas WHERE filters rows before grouping.'
        },
        {
          question: 'What is the difference between WHERE and HAVING?',
          options: ['No difference', 'WHERE filters rows, HAVING filters groups', 'HAVING is faster', 'WHERE is for groups'],
          correct: 1,
          explanation: 'WHERE filters individual rows before grouping; HAVING filters groups after GROUP BY and can use aggregate functions.'
        },
        {
          question: 'What is COUNT() function?',
          options: ['Sums values', 'Counts number of rows', 'Averages values', 'Finds maximum'],
          correct: 1,
          explanation: 'COUNT() returns the number of rows that match specified criteria or the total number of rows.'
        },
        {
          question: 'What is the difference between COUNT(*) and COUNT(column)?',
          options: ['No difference', 'COUNT(*) includes NULLs, COUNT(column) excludes NULLs', 'COUNT(column) is faster', 'COUNT(*) excludes NULLs'],
          correct: 1,
          explanation: 'COUNT(*) counts all rows including NULLs; COUNT(column) counts only non-NULL values in that column.'
        },
        {
          question: 'What is a unique constraint?',
          options: ['Allows duplicates', 'Ensures all values in column are different', 'Primary key', 'Foreign key'],
          correct: 1,
          explanation: 'A unique constraint ensures that all values in a column or set of columns are distinct.'
        },
        {
          question: 'What is the difference between primary key and unique key?',
          options: ['No difference', 'Primary key cannot be NULL, unique key can', 'Unique key cannot be NULL', 'Both allow NULL'],
          correct: 1,
          explanation: 'Primary key cannot contain NULL and only one per table; unique key can contain NULL (usually one) and multiple allowed.'
        },
        {
          question: 'What is a check constraint?',
          options: ['No validation', 'Validates data based on condition', 'Primary key', 'Foreign key'],
          correct: 1,
          explanation: 'A check constraint validates data in a column against a specified condition before insertion or update.'
        },
        {
          question: 'What is a default constraint?',
          options: ['No default', 'Provides default value when none specified', 'Primary key', 'Unique key'],
          correct: 1,
          explanation: 'A default constraint automatically assigns a default value to a column when no value is provided.'
        },
        {
          question: 'What is a NOT NULL constraint?',
          options: ['Allows NULL', 'Ensures column cannot contain NULL values', 'Default constraint', 'Unique constraint'],
          correct: 1,
          explanation: 'NOT NULL constraint ensures that a column cannot contain NULL values; a value must always be provided.'
        },
        {
          question: 'What is database normalization?',
          options: ['Adding redundancy', 'Organizing data to reduce redundancy', 'Deleting data', 'Creating indexes'],
          correct: 1,
          explanation: 'Normalization is the process of organizing data to reduce redundancy and improve data integrity.'
        },
        {
          question: 'What is a surrogate key?',
          options: ['Natural key', 'Artificial key with no business meaning', 'Foreign key', 'Composite key'],
          correct: 1,
          explanation: 'A surrogate key is an artificial identifier (often auto-incrementing number) with no business meaning, used as primary key.'
        },
        {
          question: 'What is a natural key?',
          options: ['Artificial key', 'Key based on real-world attributes', 'Surrogate key', 'Foreign key'],
          correct: 1,
          explanation: 'A natural key is derived from real-world attributes of the entity (e.g., SSN, email) and has business meaning.'
        },
        {
          question: 'What is an alternate key?',
          options: ['Primary key', 'Candidate key not chosen as primary key', 'Foreign key', 'Composite key'],
          correct: 1,
          explanation: 'An alternate key is a candidate key that was not chosen as the primary key but still uniquely identifies records.'
        },
        {
          question: 'What is cardinality in database?',
          options: ['Data type', 'Number of unique values in column', 'Table size', 'Index count'],
          correct: 1,
          explanation: 'Cardinality refers to the uniqueness of data values in a column; high cardinality means many unique values.'
        },
        {
          question: 'What is a schema in database?',
          options: ['Table', 'Logical structure of database', 'Query', 'Index'],
          correct: 1,
          explanation: 'A schema is the logical structure of a database, defining how data is organized including tables, relationships, and constraints.'
        },
        {
          question: 'What is the difference between schema and database?',
          options: ['No difference', 'Database contains multiple schemas', 'Schema contains databases', 'Same thing'],
          correct: 1,
          explanation: 'A database is the physical storage; a schema is the logical organization within the database (though terminology varies by DBMS).'
        },
        {
          question: 'What is a materialized view?',
          options: ['Regular view', 'Pre-computed view stored physically', 'Temporary view', 'Virtual view'],
          correct: 1,
          explanation: 'A materialized view is a pre-computed view that stores the query results physically, improving performance for complex queries.'
        },
        {
          question: 'What is query optimization?',
          options: ['Making queries complex', 'Improving query performance', 'Deleting queries', 'Creating queries'],
          correct: 1,
          explanation: 'Query optimization is the process of improving query execution performance by choosing efficient execution plans.'
        },
        {
          question: 'What is an execution plan?',
          options: ['Database design', 'Steps database takes to execute query', 'Backup plan', 'Security plan'],
          correct: 1,
          explanation: 'An execution plan shows the steps and operations the database engine will use to execute a query.'
        },
        {
          question: 'What is database sharding?',
          options: ['Vertical partitioning', 'Horizontal partitioning across servers', 'Deleting data', 'Creating replicas'],
          correct: 1,
          explanation: 'Sharding is horizontal partitioning where data is distributed across multiple database servers to improve scalability.'
        },
        {
          question: 'What is database replication?',
          options: ['Deleting data', 'Copying data to multiple databases', 'Sharding', 'Partitioning'],
          correct: 1,
          explanation: 'Replication is the process of copying and maintaining database objects in multiple databases to improve availability and performance.'
        },
        {
          question: 'What is the CAP theorem?',
          options: ['All three guaranteed', 'Consistency, Availability, Partition tolerance - pick two', 'Database design', 'Normalization'],
          correct: 1,
          explanation: 'CAP theorem states distributed systems can only guarantee two of: Consistency, Availability, and Partition tolerance.'
        },
        {
          question: 'What is OLTP?',
          options: ['Analytical processing', 'Online Transaction Processing', 'Batch processing', 'Data warehousing'],
          correct: 1,
          explanation: 'OLTP (Online Transaction Processing) handles real-time transaction-oriented applications with many short queries.'
        },
        {
          question: 'What is OLAP?',
          options: ['Transaction processing', 'Online Analytical Processing', 'Real-time processing', 'Simple queries'],
          correct: 1,
          explanation: 'OLAP (Online Analytical Processing) handles complex analytical queries on large datasets for business intelligence.'
        },
        {
          question: 'What is a data warehouse?',
          options: ['OLTP database', 'Central repository for analytical data', 'Backup storage', 'Cache'],
          correct: 1,
          explanation: 'A data warehouse is a centralized repository that stores integrated data from multiple sources for analysis and reporting.'
        },
        {
          question: 'What is ETL?',
          options: ['Database type', 'Extract, Transform, Load - data integration process', 'Query language', 'Index type'],
          correct: 1,
          explanation: 'ETL (Extract, Transform, Load) is the process of extracting data from sources, transforming it, and loading into a data warehouse.'
        },
        {
          question: 'What is a fact table?',
          options: ['Dimension table', 'Central table with quantitative data', 'Lookup table', 'Temporary table'],
          correct: 1,
          explanation: 'A fact table stores quantitative data (facts/measures) for analysis, typically at the center of a star schema.'
        },
        {
          question: 'What is a dimension table?',
          options: ['Fact table', 'Descriptive attributes for analysis', 'Transaction table', 'Index table'],
          correct: 1,
          explanation: 'A dimension table contains descriptive attributes (dimensions) used to filter and group facts in analysis.'
        },
        {
          question: 'What is a star schema?',
          options: ['Complex schema', 'Fact table surrounded by dimension tables', 'Snowflake schema', 'Normalized schema'],
          correct: 1,
          explanation: 'Star schema has a central fact table connected directly to dimension tables, forming a star-like structure.'
        },
        {
          question: 'What is a snowflake schema?',
          options: ['Star schema', 'Normalized dimension tables', 'Denormalized schema', 'No dimensions'],
          correct: 1,
          explanation: 'Snowflake schema is a normalized version of star schema where dimension tables are broken into subdimensions.'
        },
        {
          question: 'What is database normalization benefit?',
          options: ['More redundancy', 'Reduces redundancy and improves integrity', 'Slower queries', 'More storage'],
          correct: 1,
          explanation: 'Normalization reduces data redundancy, improves data integrity, and makes maintenance easier.'
        },
        {
          question: 'What is denormalization benefit?',
          options: ['More updates needed', 'Faster read queries', 'More integrity issues', 'Less storage'],
          correct: 1,
          explanation: 'Denormalization improves read query performance by reducing joins, at the cost of redundancy and update complexity.'
        },
        {
          question: 'What is a composite index?',
          options: ['Single column index', 'Index on multiple columns', 'Clustered index', 'Unique index'],
          correct: 1,
          explanation: 'A composite index is an index on multiple columns, useful for queries filtering on those columns together.'
        },
        {
          question: 'What is index selectivity?',
          options: ['Index size', 'Ratio of distinct values to total rows', 'Index speed', 'Index type'],
          correct: 1,
          explanation: 'Index selectivity measures the uniqueness of values; high selectivity (many distinct values) makes indexes more effective.'
        },
        {
          question: 'What is a covering index?',
          options: ['Partial index', 'Index containing all queried columns', 'Clustered index', 'Primary key'],
          correct: 1,
          explanation: 'A covering index includes all columns needed by a query, allowing the query to be satisfied entirely from the index.'
        },
        {
          question: 'What is a filtered index?',
          options: ['Full index', 'Index on subset of rows meeting condition', 'Clustered index', 'Unique index'],
          correct: 1,
          explanation: 'A filtered index is created on a subset of rows that meet a WHERE condition, reducing index size and improving performance.'
        },
        {
          question: 'What is database isolation level?',
          options: ['Security level', 'Degree of transaction isolation from others', 'Performance level', 'Storage level'],
          correct: 1,
          explanation: 'Isolation level determines how transaction changes are visible to other concurrent transactions, balancing consistency and performance.'
        },
        {
          question: 'What is READ UNCOMMITTED isolation level?',
          options: ['Highest isolation', 'Lowest isolation, allows dirty reads', 'Medium isolation', 'Serializable'],
          correct: 1,
          explanation: 'READ UNCOMMITTED allows dirty reads (reading uncommitted changes), providing lowest isolation but highest performance.'
        },
        {
          question: 'What is READ COMMITTED isolation level?',
          options: ['Allows dirty reads', 'Prevents dirty reads', 'Highest isolation', 'No isolation'],
          correct: 1,
          explanation: 'READ COMMITTED prevents dirty reads by only allowing reading of committed data, but allows non-repeatable reads.'
        },
        {
          question: 'What is REPEATABLE READ isolation level?',
          options: ['Allows non-repeatable reads', 'Prevents non-repeatable reads', 'Lowest isolation', 'No locks'],
          correct: 1,
          explanation: 'REPEATABLE READ prevents non-repeatable reads by maintaining read locks, but may allow phantom reads.'
        },
        {
          question: 'What is SERIALIZABLE isolation level?',
          options: ['Lowest isolation', 'Highest isolation, prevents all anomalies', 'Medium isolation', 'No locks'],
          correct: 1,
          explanation: 'SERIALIZABLE is the highest isolation level, preventing all anomalies (dirty, non-repeatable, phantom reads) but with performance cost.'
        },
        {
          question: 'What is a dirty read?',
          options: ['Reading committed data', 'Reading uncommitted data', 'No reading', 'Reading NULL'],
          correct: 1,
          explanation: 'A dirty read occurs when a transaction reads data that has been modified but not yet committed by another transaction.'
        },
        {
          question: 'What is a non-repeatable read?',
          options: ['Same data on re-read', 'Different data on re-read within transaction', 'No reads', 'Dirty read'],
          correct: 1,
          explanation: 'A non-repeatable read occurs when re-reading the same data within a transaction returns different values due to other committed changes.'
        },
        {
          question: 'What is a phantom read?',
          options: ['Same rows on re-read', 'Different rows appear/disappear on re-read', 'Dirty read', 'No reads'],
          correct: 1,
          explanation: 'A phantom read occurs when re-executing a query returns different rows due to other transactions inserting or deleting rows.'
        },
        {
          question: 'What is a database cursor?',
          options: ['Table pointer', 'Pointer to result set for row-by-row processing', 'Index', 'Constraint'],
          correct: 1,
          explanation: 'A cursor is a database object that allows row-by-row processing of query results, useful for complex operations.'
        },
        {
          question: 'What is a prepared statement?',
          options: ['Regular query', 'Precompiled SQL with parameters', 'Stored procedure', 'View'],
          correct: 1,
          explanation: 'A prepared statement is a precompiled SQL template with parameters, improving performance and preventing SQL injection.'
        },
        {
          question: 'What is SQL injection?',
          options: ['Database feature', 'Security vulnerability from malicious SQL input', 'Query optimization', 'Index type'],
          correct: 1,
          explanation: 'SQL injection is a security vulnerability where attackers inject malicious SQL code through user input to access or modify data.'
        },
        {
          question: 'How to prevent SQL injection?',
          options: ['Use string concatenation', 'Use parameterized queries/prepared statements', 'Disable security', 'Use plain SQL'],
          correct: 1,
          explanation: 'Use parameterized queries or prepared statements that separate SQL logic from data, preventing malicious code injection.'
        },
        {
          question: 'What is a B-tree index?',
          options: ['Linear structure', 'Balanced tree structure for indexing', 'Hash structure', 'Unordered structure'],
          correct: 1,
          explanation: 'B-tree is a balanced tree data structure used for indexing, providing efficient searching, insertion, and deletion.'
        },
        {
          question: 'What is a hash index?',
          options: ['Tree structure', 'Hash table for exact match lookups', 'B-tree variant', 'Sorted structure'],
          correct: 1,
          explanation: 'Hash index uses a hash table for very fast exact match lookups, but doesn\'t support range queries.'
        },
        {
          question: 'What is database partitioning?',
          options: ['Combining tables', 'Dividing large tables into smaller pieces', 'Creating indexes', 'Deleting data'],
          correct: 1,
          explanation: 'Partitioning divides large tables into smaller, more manageable pieces while still appearing as a single table.'
        },
        {
          question: 'What is horizontal partitioning?',
          options: ['Dividing by columns', 'Dividing by rows', 'No division', 'Random division'],
          correct: 1,
          explanation: 'Horizontal partitioning divides a table by rows, storing different rows in different partitions based on criteria.'
        },
        {
          question: 'What is vertical partitioning?',
          options: ['Dividing by rows', 'Dividing by columns', 'No division', 'Random division'],
          correct: 1,
          explanation: 'Vertical partitioning divides a table by columns, storing different columns in different partitions.'
        },
        {
          question: 'What is a database backup?',
          options: ['Deleting data', 'Copy of database for disaster recovery', 'Index creation', 'Query optimization'],
          correct: 1,
          explanation: 'A database backup is a copy of database data that can be used to restore the database in case of failure or data loss.'
        },
        {
          question: 'What is a full backup?',
          options: ['Partial backup', 'Complete copy of entire database', 'Incremental backup', 'Differential backup'],
          correct: 1,
          explanation: 'A full backup is a complete copy of the entire database at a point in time.'
        },
        {
          question: 'What is an incremental backup?',
          options: ['Full backup', 'Backs up only changes since last backup', 'Complete copy', 'No backup'],
          correct: 1,
          explanation: 'An incremental backup only backs up data that has changed since the last backup (full or incremental).'
        },
        {
          question: 'What is a differential backup?',
          options: ['Full backup', 'Backs up changes since last full backup', 'Incremental backup', 'No backup'],
          correct: 1,
          explanation: 'A differential backup backs up all changes made since the last full backup, regardless of intervening backups.'
        },
        {
          question: 'What is database recovery?',
          options: ['Creating database', 'Restoring database from backup after failure', 'Deleting database', 'Optimizing database'],
          correct: 1,
          explanation: 'Database recovery is the process of restoring a database to a consistent state after a failure or data loss.'
        },
        {
          question: 'What is point-in-time recovery?',
          options: ['Latest recovery only', 'Restoring to specific point in time', 'No recovery', 'Random recovery'],
          correct: 1,
          explanation: 'Point-in-time recovery restores a database to a specific point in time using backups and transaction logs.'
        },
        {
          question: 'What is database mirroring?',
          options: ['Backup storage', 'Real-time copy maintained on standby server', 'Sharding', 'Partitioning'],
          correct: 1,
          explanation: 'Database mirroring maintains a real-time synchronized copy of a database on a standby server for high availability.'
        },
        {
          question: 'What is a NoSQL database?',
          options: ['SQL only', 'Non-relational database', 'Same as SQL', 'No databases'],
          correct: 1,
          explanation: 'NoSQL databases are non-relational databases designed for specific use cases like documents, key-value, graphs, or columns.'
        },
        {
          question: 'What is BASE in NoSQL?',
          options: ['Same as ACID', 'Basically Available, Soft state, Eventually consistent', 'Strong consistency', 'No model'],
          correct: 1,
          explanation: 'BASE (Basically Available, Soft state, Eventually consistent) is an alternative to ACID used in distributed NoSQL systems.'
        },
        {
          question: 'What is eventual consistency?',
          options: ['Immediate consistency', 'Consistency achieved over time', 'Strong consistency', 'No consistency'],
          correct: 1,
          explanation: 'Eventual consistency means that if no new updates occur, all replicas will eventually have the same data.'
        },
        {
          question: 'What is a document database?',
          options: ['Relational database', 'Stores data as documents (JSON, XML)', 'Graph database', 'Key-value store'],
          correct: 1,
          explanation: 'Document databases store data as semi-structured documents (like JSON or XML), providing flexibility in schema.'
        }
      ];
      return { id: i + 1, ...questions[i % questions.length] };
    })
  },
  'os': {
    title: 'Operating Systems',
    theory: 'An Operating System is system software that manages computer hardware, software resources, and provides common services for computer programs.',
    keyPoints: [
      'Process: Program in execution',
      'Thread: Lightweight process, smallest unit of execution',
      'Deadlock: Circular wait for resources',
      'Virtual Memory: Extends physical memory using disk',
      'Scheduling: Determines which process runs when',
      'Semaphore: Synchronization mechanism',
    ],
    questions: Array.from({ length: 100 }, (_, i) => {
      const questions = [
        {
          question: 'What are the four necessary conditions for deadlock?',
          options: ['Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait', 'Starvation, Waiting, Holding, Circular', 'Lock, Wait, Hold, Circle', 'None of the above'],
          correct: 0,
          explanation: 'The four Coffman conditions for deadlock: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait must all be present.'
        },
        {
          question: 'Which scheduling algorithm can cause starvation?',
          options: ['FCFS', 'Round Robin', 'Priority Scheduling', 'SJF with aging'],
          correct: 2,
          explanation: 'Priority Scheduling can cause starvation where low-priority processes may never execute if high-priority processes keep arriving.'
        },
        {
          question: 'What is thrashing in operating systems?',
          options: ['CPU running too fast', 'Excessive paging/swapping reducing performance', 'Memory overflow', 'Disk failure'],
          correct: 1,
          explanation: 'Thrashing occurs when a system spends more time paging/swapping data than executing processes, severely degrading performance.'
        },
        {
          question: 'What is the difference between process and thread?',
          options: ['No difference', 'Process is lightweight, thread is heavyweight', 'Thread shares memory with other threads of same process', 'Process executes faster'],
          correct: 2,
          explanation: 'Threads within the same process share memory space, while processes have separate memory spaces. Threads are lighter and faster to create.'
        },
        {
          question: 'Which page replacement algorithm has the lowest page fault rate theoretically?',
          options: ['FIFO', 'LRU', 'Optimal Page Replacement', 'Clock'],
          correct: 2,
          explanation: 'Optimal Page Replacement algorithm replaces the page that will not be used for the longest time, giving the lowest fault rate (but requires future knowledge).'
        },
        {
          question: 'What is a process control block (PCB)?',
          options: ['Hardware component', 'Data structure containing process information', 'CPU register', 'Memory location'],
          correct: 1,
          explanation: 'PCB is a data structure maintained by the OS containing process information like state, program counter, registers, and memory limits.'
        },
        {
          question: 'What are the different process states?',
          options: ['Only running', 'New, Ready, Running, Waiting, Terminated', 'Start, Stop', 'Active, Inactive'],
          correct: 1,
          explanation: 'Process states include: New (being created), Ready (waiting for CPU), Running (executing), Waiting (waiting for I/O), Terminated (finished).'
        },
        {
          question: 'What is context switching?',
          options: ['Switching programs', 'Saving/restoring CPU state when switching processes', 'Changing memory', 'Disk operation'],
          correct: 1,
          explanation: 'Context switching is saving the state of the current process and loading the saved state of another process.'
        },
        {
          question: 'What is the difference between preemptive and non-preemptive scheduling?',
          options: ['No difference', 'Preemptive can interrupt, non-preemptive runs to completion', 'Non-preemptive is faster', 'Preemptive is simpler'],
          correct: 1,
          explanation: 'Preemptive scheduling can interrupt a running process; non-preemptive scheduling allows process to run until completion or block.'
        },
        {
          question: 'What is FCFS (First Come First Serve) scheduling?',
          options: ['Complex algorithm', 'Simple queue-based scheduling', 'Priority-based', 'Random selection'],
          correct: 1,
          explanation: 'FCFS schedules processes in the order they arrive, like a queue. Simple but can cause convoy effect.'
        },
        {
          question: 'What is the convoy effect?',
          options: ['Fast processes', 'Small processes wait for large process', 'No waiting', 'Equal wait times'],
          correct: 1,
          explanation: 'Convoy effect occurs when many small processes wait for one large process to complete, reducing CPU utilization.'
        },
        {
          question: 'What is Round Robin scheduling?',
          options: ['FCFS variant', 'Each process gets fixed time slice', 'Priority-based', 'Shortest job first'],
          correct: 1,
          explanation: 'Round Robin gives each process a fixed time quantum in circular order, providing fairness and responsiveness.'
        },
        {
          question: 'What is SJF (Shortest Job First) scheduling?',
          options: ['Longest job first', 'Schedules shortest jobs first', 'Random selection', 'Priority-based'],
          correct: 1,
          explanation: 'SJF schedules the process with the shortest execution time first, minimizing average waiting time.'
        },
        {
          question: 'What is priority scheduling?',
          options: ['Random scheduling', 'Schedules based on priority values', 'FCFS', 'Round Robin'],
          correct: 1,
          explanation: 'Priority scheduling assigns priority values to processes and schedules highest priority first.'
        },
        {
          question: 'What is aging in scheduling?',
          options: ['Process termination', 'Gradually increasing priority to prevent starvation', 'Decreasing priority', 'No change'],
          correct: 1,
          explanation: 'Aging gradually increases the priority of waiting processes to prevent starvation in priority scheduling.'
        },
        {
          question: 'What is a semaphore?',
          options: ['Hardware device', 'Synchronization primitive', 'Memory location', 'CPU register'],
          correct: 1,
          explanation: 'A semaphore is a synchronization primitive (integer variable) used to control access to shared resources.'
        },
        {
          question: 'What is the difference between binary and counting semaphore?',
          options: ['No difference', 'Binary has 0/1, counting has range', 'Counting is simpler', 'Binary is faster'],
          correct: 1,
          explanation: 'Binary semaphore can only be 0 or 1 (mutex); counting semaphore can have any non-negative value for multiple resources.'
        },
        {
          question: 'What is a mutex?',
          options: ['Counting semaphore', 'Mutual exclusion lock', 'CPU scheduler', 'Memory manager'],
          correct: 1,
          explanation: 'Mutex (mutual exclusion) is a locking mechanism that ensures only one thread can access a resource at a time.'
        },
        {
          question: 'What is a race condition?',
          options: ['Fast execution', 'Output depends on timing of events', 'CPU competition', 'No conflict'],
          correct: 1,
          explanation: 'Race condition occurs when system behavior depends on the relative timing of events, leading to unpredictable results.'
        },
        {
          question: 'What is a critical section?',
          options: ['Non-shared code', 'Code accessing shared resources', 'CPU-intensive code', 'Error handling code'],
          correct: 1,
          explanation: 'Critical section is code that accesses shared resources and must not be executed by more than one process simultaneously.'
        },
        {
          question: 'What are the requirements for critical section solution?',
          options: ['Only mutual exclusion', 'Mutual exclusion, progress, bounded waiting', 'No requirements', 'Only progress'],
          correct: 1,
          explanation: 'Critical section solution must satisfy: mutual exclusion, progress (no deadlock), and bounded waiting (no starvation).'
        },
        {
          question: 'What is a monitor?',
          options: ['Display device', 'High-level synchronization construct', 'CPU component', 'Memory type'],
          correct: 1,
          explanation: 'A monitor is a high-level synchronization construct that encapsulates shared data and procedures operating on it.'
        },
        {
          question: 'What is the producer-consumer problem?',
          options: ['CPU problem', 'Synchronization problem with bounded buffer', 'Memory problem', 'Disk problem'],
          correct: 1,
          explanation: 'Producer-consumer is a classic synchronization problem where producers add items to buffer and consumers remove them.'
        },
        {
          question: 'What is the readers-writers problem?',
          options: ['File problem', 'Multiple readers or one writer access', 'Memory problem', 'CPU problem'],
          correct: 1,
          explanation: 'Readers-writers problem involves allowing multiple concurrent readers or one exclusive writer to access shared data.'
        },
        {
          question: 'What is the dining philosophers problem?',
          options: ['Food problem', 'Resource allocation and deadlock problem', 'CPU problem', 'Memory problem'],
          correct: 1,
          explanation: 'Dining philosophers is a classic problem illustrating synchronization issues and deadlock prevention strategies.'
        },
        {
          question: 'What is virtual memory?',
          options: ['Physical RAM', 'Technique using disk as extension of RAM', 'Cache memory', 'CPU memory'],
          correct: 1,
          explanation: 'Virtual memory extends physical RAM by using disk space, allowing programs larger than physical memory to run.'
        },
        {
          question: 'What is paging?',
          options: ['Sequential access', 'Dividing memory into fixed-size pages', 'Random access', 'Continuous allocation'],
          correct: 1,
          explanation: 'Paging divides physical memory into fixed-size blocks (frames) and logical memory into same-sized blocks (pages).'
        },
        {
          question: 'What is segmentation?',
          options: ['Fixed-size division', 'Variable-size logical division', 'Same as paging', 'No division'],
          correct: 1,
          explanation: 'Segmentation divides memory into variable-sized segments based on logical divisions like code, data, stack.'
        },
        {
          question: 'What is a page fault?',
          options: ['Hardware error', 'Required page not in memory', 'Disk error', 'CPU error'],
          correct: 1,
          explanation: 'Page fault occurs when a process accesses a page not currently in physical memory, triggering load from disk.'
        },
        {
          question: 'What is the page table?',
          options: ['Disk structure', 'Maps virtual to physical addresses', 'CPU register', 'Cache'],
          correct: 1,
          explanation: 'Page table is a data structure that maps virtual page numbers to physical frame numbers.'
        },
        {
          question: 'What is TLB (Translation Lookaside Buffer)?',
          options: ['Disk cache', 'Fast cache for page table entries', 'Main memory', 'Hard disk'],
          correct: 1,
          explanation: 'TLB is a fast hardware cache storing recent virtual-to-physical address translations to speed up paging.'
        },
        {
          question: 'What is FIFO page replacement?',
          options: ['Complex algorithm', 'Replaces oldest page', 'Replaces newest page', 'Random replacement'],
          correct: 1,
          explanation: 'FIFO (First In First Out) replaces the page that has been in memory the longest. Simple but can cause Belady\'s anomaly.'
        },
        {
          question: 'What is LRU (Least Recently Used) page replacement?',
          options: ['Most recent', 'Replaces page not used for longest time', 'Random', 'Oldest page'],
          correct: 1,
          explanation: 'LRU replaces the page that hasn\'t been used for the longest time, based on temporal locality principle.'
        },
        {
          question: 'What is Belady\'s anomaly?',
          options: ['More frames reduce faults', 'More frames can increase page faults', 'No anomaly', 'CPU issue'],
          correct: 1,
          explanation: 'Belady\'s anomaly is when increasing the number of page frames results in more page faults (occurs with FIFO).'
        },
        {
          question: 'What is working set?',
          options: ['All pages', 'Set of pages currently being used', 'Disk pages', 'Cache pages'],
          correct: 1,
          explanation: 'Working set is the set of pages that a process is actively using at a given time.'
        },
        {
          question: 'What is demand paging?',
          options: ['Load all pages', 'Load pages only when needed', 'No paging', 'Pre-load pages'],
          correct: 1,
          explanation: 'Demand paging loads pages into memory only when they are actually needed (on page fault).'
        },
        {
          question: 'What is page buffering?',
          options: ['No buffering', 'Keeping pool of free frames', 'Disk buffering', 'CPU buffering'],
          correct: 1,
          explanation: 'Page buffering maintains a pool of free frames and a list of modified pages to optimize paging operations.'
        },
        {
          question: 'What is internal fragmentation?',
          options: ['Between blocks', 'Wasted space within allocated block', 'No waste', 'External waste'],
          correct: 1,
          explanation: 'Internal fragmentation is wasted space within an allocated memory block (e.g., unused space in a page).'
        },
        {
          question: 'What is external fragmentation?',
          options: ['Within blocks', 'Free memory scattered in small blocks', 'No waste', 'Internal waste'],
          correct: 1,
          explanation: 'External fragmentation occurs when free memory is scattered in small non-contiguous blocks, unable to satisfy requests.'
        },
        {
          question: 'What is compaction?',
          options: ['Creating fragments', 'Moving processes to combine free space', 'Deleting processes', 'No action'],
          correct: 1,
          explanation: 'Compaction moves all processes together to combine all free memory into one large contiguous block.'
        },
        {
          question: 'What is a disk scheduling algorithm?',
          options: ['CPU scheduling', 'Determines order of disk I/O requests', 'Memory scheduling', 'Network scheduling'],
          correct: 1,
          explanation: 'Disk scheduling determines the order in which disk I/O requests are serviced to optimize performance.'
        },
        {
          question: 'What is FCFS disk scheduling?',
          options: ['Complex algorithm', 'Services requests in arrival order', 'Shortest seek first', 'Random'],
          correct: 1,
          explanation: 'FCFS disk scheduling services requests in the order they arrive. Simple but can be inefficient.'
        },
        {
          question: 'What is SSTF (Shortest Seek Time First)?',
          options: ['FCFS variant', 'Services request closest to current position', 'Longest seek first', 'Random'],
          correct: 1,
          explanation: 'SSTF selects the request with minimum seek time from current head position, reducing average seek time.'
        },
        {
          question: 'What is SCAN disk scheduling?',
          options: ['Random scan', 'Head moves to end, then reverses', 'FCFS', 'SSTF'],
          correct: 1,
          explanation: 'SCAN (elevator algorithm) moves head in one direction servicing requests, then reverses at end.'
        },
        {
          question: 'What is C-SCAN disk scheduling?',
          options: ['Regular SCAN', 'Circular SCAN, services one direction only', 'FCFS', 'SSTF'],
          correct: 1,
          explanation: 'C-SCAN services requests in one direction, then jumps back to start without servicing on return.'
        },
        {
          question: 'What is LOOK disk scheduling?',
          options: ['SCAN variant', 'SCAN but reverses at last request, not end', 'FCFS', 'Random'],
          correct: 1,
          explanation: 'LOOK is like SCAN but reverses direction at the last request in each direction, not at disk end.'
        },
        {
          question: 'What is a file system?',
          options: ['Hardware component', 'Method for storing and organizing files', 'CPU feature', 'Memory type'],
          correct: 1,
          explanation: 'File system is a method for storing, organizing, and retrieving files on storage devices.'
        },
        {
          question: 'What is an inode?',
          options: ['File name', 'Data structure storing file metadata', 'File content', 'Directory'],
          correct: 1,
          explanation: 'An inode is a data structure storing metadata about a file (permissions, timestamps, location) but not filename or data.'
        },
        {
          question: 'What is contiguous allocation?',
          options: ['Scattered blocks', 'File occupies consecutive blocks', 'Random allocation', 'Linked allocation'],
          correct: 1,
          explanation: 'Contiguous allocation stores each file in consecutive disk blocks, providing fast access but causing external fragmentation.'
        },
        {
          question: 'What is linked allocation?',
          options: ['Contiguous blocks', 'Each block points to next block', 'Random blocks', 'No links'],
          correct: 1,
          explanation: 'Linked allocation stores each file as a linked list of disk blocks, eliminating fragmentation but slowing random access.'
        },
        {
          question: 'What is indexed allocation?',
          options: ['No index', 'Index block points to all file blocks', 'Contiguous', 'Linked'],
          correct: 1,
          explanation: 'Indexed allocation uses an index block containing pointers to all blocks of a file, supporting efficient random access.'
        },
        {
          question: 'What is a directory?',
          options: ['File content', 'Structure organizing files', 'Memory location', 'CPU register'],
          correct: 1,
          explanation: 'A directory is a file system structure that organizes and provides information about files.'
        },
        {
          question: 'What is a hard link?',
          options: ['Symbolic link', 'Direct reference to inode', 'Copy of file', 'Shortcut'],
          correct: 1,
          explanation: 'A hard link is a direct reference to an inode, creating another name for the same file.'
        },
        {
          question: 'What is a symbolic link (soft link)?',
          options: ['Hard link', 'Pointer to file path', 'Copy of file', 'Direct inode reference'],
          correct: 1,
          explanation: 'A symbolic link is a file containing a path to another file, like a shortcut.'
        },
        {
          question: 'What is file access control?',
          options: ['No control', 'Permissions controlling who can access files', 'File size limit', 'Disk space'],
          correct: 1,
          explanation: 'File access control defines permissions (read, write, execute) determining who can access files.'
        },
        {
          question: 'What is a kernel?',
          options: ['Application software', 'Core of operating system', 'User program', 'Device driver'],
          correct: 1,
          explanation: 'The kernel is the core of an operating system that manages hardware, processes, memory, and system calls.'
        },
        {
          question: 'What is user mode vs kernel mode?',
          options: ['No difference', 'User mode restricted, kernel mode privileged', 'Both same', 'User mode privileged'],
          correct: 1,
          explanation: 'User mode has restricted access to hardware; kernel mode has full access to all system resources.'
        },
        {
          question: 'What is a system call?',
          options: ['Function call', 'Interface between user program and OS', 'Kernel function', 'Hardware interrupt'],
          correct: 1,
          explanation: 'A system call is a programmatic interface allowing user programs to request services from the operating system kernel.'
        },
        {
          question: 'What is an interrupt?',
          options: ['Continuous signal', 'Signal alerting CPU to event', 'Error', 'CPU instruction'],
          correct: 1,
          explanation: 'An interrupt is a signal to the CPU indicating an event requiring immediate attention, suspending current execution.'
        },
        {
          question: 'What is the difference between interrupt and trap?',
          options: ['No difference', 'Interrupt is hardware, trap is software', 'Both hardware', 'Both software'],
          correct: 1,
          explanation: 'Interrupts are signals from hardware devices; traps (exceptions) are software-generated interrupts from errors or system calls.'
        },
        {
          question: 'What is DMA (Direct Memory Access)?',
          options: ['CPU transfers', 'Device transfers data without CPU', 'Slow transfer', 'No transfers'],
          correct: 1,
          explanation: 'DMA allows hardware devices to transfer data directly to/from memory without CPU intervention, improving efficiency.'
        },
        {
          question: 'What is spooling?',
          options: ['Direct access', 'Buffering I/O for devices like printers', 'CPU cache', 'Memory management'],
          correct: 1,
          explanation: 'Spooling (Simultaneous Peripheral Operations Online) buffers data for slow devices like printers in a queue.'
        },
        {
          question: 'What is caching?',
          options: ['Slow storage', 'Storing frequently used data in fast memory', 'Disk storage', 'No storage'],
          correct: 1,
          explanation: 'Caching stores frequently accessed data in faster memory (cache) to reduce access time.'
        },
        {
          question: 'What is buffering?',
          options: ['No temporary storage', 'Temporary storage for data transfer', 'Permanent storage', 'Cache'],
          correct: 1,
          explanation: 'Buffering uses temporary storage to hold data during transfer between devices with different speeds.'
        },
        {
          question: 'What is a device driver?',
          options: ['Application', 'Software controlling hardware device', 'User program', 'File system'],
          correct: 1,
          explanation: 'A device driver is software that enables the OS to communicate with and control hardware devices.'
        },
        {
          question: 'What is multitasking?',
          options: ['Single task', 'Multiple tasks appear to run simultaneously', 'No tasks', 'Sequential tasks'],
          correct: 1,
          explanation: 'Multitasking allows multiple processes to appear to run concurrently by rapidly switching between them.'
        },
        {
          question: 'What is multiprogramming?',
          options: ['Single program', 'Multiple programs in memory', 'No programs', 'One program'],
          correct: 1,
          explanation: 'Multiprogramming keeps multiple programs in memory, switching between them to maximize CPU utilization.'
        },
        {
          question: 'What is multiprocessing?',
          options: ['Single CPU', 'Multiple CPUs in system', 'No CPUs', 'Virtual CPUs'],
          correct: 1,
          explanation: 'Multiprocessing uses multiple physical CPUs/cores to execute multiple processes truly simultaneously.'
        },
        {
          question: 'What is time-sharing?',
          options: ['No sharing', 'Multiple users share CPU time', 'Dedicated CPU', 'Single user'],
          correct: 1,
          explanation: 'Time-sharing rapidly switches CPU between users, giving each the illusion of dedicated access.'
        },
        {
          question: 'What is real-time operating system?',
          options: ['No time constraints', 'OS with strict timing constraints', 'Batch OS', 'Regular OS'],
          correct: 1,
          explanation: 'Real-time OS must respond to events within strict time constraints, used in embedded systems and control applications.'
        },
        {
          question: 'What is the difference between hard and soft real-time?',
          options: ['No difference', 'Hard has strict deadlines, soft is flexible', 'Both flexible', 'Both strict'],
          correct: 1,
          explanation: 'Hard real-time has strict deadlines that must be met; soft real-time prefers timely response but occasional misses acceptable.'
        },
        {
          question: 'What is a distributed operating system?',
          options: ['Single machine', 'Manages multiple networked computers as one', 'No network', 'Standalone'],
          correct: 1,
          explanation: 'Distributed OS manages multiple networked computers, presenting them as a single coherent system.'
        },
        {
          question: 'What is load balancing?',
          options: ['Imbalanced load', 'Distributing work across multiple resources', 'No distribution', 'Single resource'],
          correct: 1,
          explanation: 'Load balancing distributes workload across multiple computing resources to optimize performance and avoid overload.'
        },
        {
          question: 'What is process synchronization?',
          options: ['No coordination', 'Coordinating concurrent processes', 'Sequential execution', 'Independent processes'],
          correct: 1,
          explanation: 'Process synchronization coordinates concurrent processes accessing shared resources to maintain data consistency.'
        },
        {
          question: 'What is inter-process communication (IPC)?',
          options: ['No communication', 'Mechanism for processes to communicate', 'File system', 'Memory'],
          correct: 1,
          explanation: 'IPC provides mechanisms (pipes, message queues, shared memory, sockets) for processes to exchange data.'
        },
        {
          question: 'What is a pipe in IPC?',
          options: ['Physical pipe', 'Unidirectional data channel between processes', 'Network connection', 'File'],
          correct: 1,
          explanation: 'A pipe is a unidirectional communication channel allowing data flow from one process to another.'
        },
        {
          question: 'What is shared memory?',
          options: ['Separate memory', 'Memory region accessible by multiple processes', 'No sharing', 'Disk memory'],
          correct: 1,
          explanation: 'Shared memory is a memory region that multiple processes can access, providing fast IPC.'
        },
        {
          question: 'What is message passing?',
          options: ['No messages', 'Processes communicate by sending messages', 'Shared memory', 'File transfer'],
          correct: 1,
          explanation: 'Message passing allows processes to communicate by sending and receiving messages without shared memory.'
        },
        {
          question: 'What is a socket?',
          options: ['Hardware port', 'Endpoint for network communication', 'File handle', 'Memory location'],
          correct: 1,
          explanation: 'A socket is an endpoint for sending/receiving data across a network, supporting inter-process communication.'
        },
        {
          question: 'What is memory management?',
          options: ['No management', 'Controlling allocation and access to memory', 'Disk management', 'CPU management'],
          correct: 1,
          explanation: 'Memory management controls the allocation, deallocation, and access to physical and virtual memory.'
        },
        {
          question: 'What is memory protection?',
          options: ['No protection', 'Preventing processes from accessing others\' memory', 'Sharing memory', 'No boundaries'],
          correct: 1,
          explanation: 'Memory protection prevents processes from accessing memory not allocated to them, ensuring isolation and security.'
        },
        {
          question: 'What is the boot process?',
          options: ['Shutdown', 'Sequence of loading OS into memory', 'Running programs', 'File access'],
          correct: 1,
          explanation: 'Boot process is the sequence of operations that loads the operating system into memory when computer starts.'
        },
        {
          question: 'What is BIOS/UEFI?',
          options: ['OS component', 'Firmware initializing hardware at boot', 'Application', 'Device driver'],
          correct: 1,
          explanation: 'BIOS/UEFI is firmware that initializes hardware and loads the bootloader to start the operating system.'
        },
        {
          question: 'What is a bootloader?',
          options: ['Application', 'Program loading operating system', 'Device driver', 'File system'],
          correct: 1,
          explanation: 'Bootloader is a small program that loads the operating system kernel into memory during boot process.'
        },
        {
          question: 'What is shell?',
          options: ['Kernel', 'User interface to OS', 'Hardware', 'File system'],
          correct: 1,
          explanation: 'Shell is a command-line or graphical user interface that allows users to interact with the operating system.'
        },
        {
          question: 'What is CLI (Command Line Interface)?',
          options: ['Graphical interface', 'Text-based user interface', 'Hardware interface', 'No interface'],
          correct: 1,
          explanation: 'CLI is a text-based interface where users interact with the OS by typing commands.'
        },
        {
          question: 'What is GUI (Graphical User Interface)?',
          options: ['Text interface', 'Visual interface with windows and icons', 'Command line', 'No interface'],
          correct: 1,
          explanation: 'GUI is a visual interface using windows, icons, and menus for user interaction with the OS.'
        },
        {
          question: 'What is process scheduling?',
          options: ['No scheduling', 'Determining which process runs when', 'Memory allocation', 'Disk access'],
          correct: 1,
          explanation: 'Process scheduling determines the order and timing of process execution to optimize CPU utilization and performance.'
        },
        {
          question: 'What is CPU burst?',
          options: ['I/O operation', 'Period of continuous CPU execution', 'Idle time', 'Memory access'],
          correct: 1,
          explanation: 'CPU burst is a period during which a process executes instructions on the CPU without interruption.'
        },
        {
          question: 'What is I/O burst?',
          options: ['CPU execution', 'Period waiting for I/O operations', 'Memory access', 'No waiting'],
          correct: 1,
          explanation: 'I/O burst is a period during which a process waits for input/output operations to complete.'
        },
        {
          question: 'What is response time?',
          options: ['Completion time', 'Time from submission to first response', 'Waiting time', 'Turnaround time'],
          correct: 1,
          explanation: 'Response time is the time from when a request is submitted until the first response is produced.'
        },
        {
          question: 'What is turnaround time?',
          options: ['Response time', 'Total time from submission to completion', 'Waiting time', 'Execution time'],
          correct: 1,
          explanation: 'Turnaround time is the total time from when a process is submitted until it completes execution.'
        },
        {
          question: 'What is waiting time?',
          options: ['Execution time', 'Time spent in ready queue', 'Response time', 'Turnaround time'],
          correct: 1,
          explanation: 'Waiting time is the total time a process spends waiting in the ready queue before execution.'
        },
        {
          question: 'What is CPU utilization?',
          options: ['Time idle', 'Percentage of time CPU is busy', 'Memory usage', 'Disk usage'],
          correct: 1,
          explanation: 'CPU utilization is the percentage of time the CPU is actively executing processes rather than being idle.'
        },
        {
          question: 'What is throughput?',
          options: ['Single process', 'Number of processes completed per time unit', 'CPU speed', 'Memory size'],
          correct: 1,
          explanation: 'Throughput is the number of processes completed per unit of time, measuring system productivity.'
        },
        {
          question: 'What is multi-level queue scheduling?',
          options: ['Single queue', 'Multiple queues with different priorities', 'No queues', 'Round robin only'],
          correct: 1,
          explanation: 'Multi-level queue scheduling uses multiple ready queues, each with different priority levels and scheduling algorithms.'
        },
        {
          question: 'What is multi-level feedback queue?',
          options: ['Fixed queues', 'Processes can move between priority queues', 'Single queue', 'No movement'],
          correct: 1,
          explanation: 'Multi-level feedback queue allows processes to move between queues based on behavior, balancing priorities dynamically.'
        }
      ];
      return { id: i + 1, ...questions[i % questions.length] };
    })
  },
  'networks': {
    title: 'Computer Networks',
    theory: 'Computer Networks involve the interconnection of computing devices to share resources and communicate. Understanding protocols, layers, and data transmission is crucial.',
    keyPoints: [
      'OSI Model: 7 layers (Physical, Data Link, Network, Transport, Session, Presentation, Application)',
      'TCP: Connection-oriented, reliable protocol',
      'UDP: Connectionless, faster but unreliable',
      'IP Address: Unique identifier for devices on network',
      'DNS: Translates domain names to IP addresses',
      'HTTP/HTTPS: Web communication protocols',
    ],
    questions: Array.from({ length: 100 }, (_, i) => {
      const questions = [
        {
          question: 'Which layer of OSI model is responsible for error detection and correction?',
          options: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer'],
          correct: 1,
          explanation: 'The Data Link Layer is responsible for error detection and correction, framing, and physical addressing.'
        },
        {
          question: 'What is the difference between TCP and UDP?',
          options: ['No difference', 'TCP is reliable and connection-oriented, UDP is unreliable and connectionless', 'UDP is slower', 'TCP uses more bandwidth always'],
          correct: 1,
          explanation: 'TCP provides reliable, ordered delivery with connection establishment. UDP is faster but doesn\'t guarantee delivery or order.'
        },
        {
          question: 'What does DNS stand for?',
          options: ['Domain Name System', 'Digital Network Service', 'Data Node Server', 'Domain Network System'],
          correct: 0,
          explanation: 'DNS (Domain Name System) translates human-readable domain names (like google.com) into IP addresses.'
        },
        {
          question: 'Which protocol operates at the Application layer?',
          options: ['IP', 'TCP', 'HTTP', 'Ethernet'],
          correct: 2,
          explanation: 'HTTP (Hypertext Transfer Protocol) operates at the Application layer of the OSI model and TCP/IP stack.'
        },
        {
          question: 'What is the purpose of a subnet mask?',
          options: ['To encrypt data', 'To divide IP address into network and host portions', 'To speed up internet', 'To block viruses'],
          correct: 1,
          explanation: 'A subnet mask divides an IP address into network and host portions, enabling proper routing and network segmentation.'
        },
        {
          question: 'What is the OSI model?',
          options: ['Hardware specification', '7-layer network architecture model', 'Programming language', 'Database model'],
          correct: 1,
          explanation: 'OSI (Open Systems Interconnection) is a conceptual 7-layer model describing network communication.'
        },
        {
          question: 'What is the TCP/IP model?',
          options: ['Same as OSI', '4-layer practical network model', '10-layer model', 'Hardware model'],
          correct: 1,
          explanation: 'TCP/IP is a practical 4-layer model (Link, Internet, Transport, Application) used in actual internet communication.'
        },
        {
          question: 'What layer does routing occur at?',
          options: ['Data Link', 'Network', 'Transport', 'Application'],
          correct: 1,
          explanation: 'Routing occurs at the Network layer (Layer 3), which handles logical addressing and path determination.'
        },
        {
          question: 'What is a MAC address?',
          options: ['Software address', 'Physical hardware address', 'IP address', 'Domain name'],
          correct: 1,
          explanation: 'MAC (Media Access Control) address is a unique physical hardware address assigned to network interfaces.'
        },
        {
          question: 'What is an IP address?',
          options: ['Physical address', 'Logical network address', 'MAC address', 'Port number'],
          correct: 1,
          explanation: 'IP address is a logical address identifying a device on a network, used for routing packets.'
        },
        {
          question: 'What is IPv4?',
          options: ['128-bit address', '32-bit address protocol', '64-bit address', '16-bit address'],
          correct: 1,
          explanation: 'IPv4 uses 32-bit addresses (e.g., 192.168.1.1), providing about 4.3 billion unique addresses.'
        },
        {
          question: 'What is IPv6?',
          options: ['32-bit address', '128-bit address protocol', '64-bit address', '256-bit address'],
          correct: 1,
          explanation: 'IPv6 uses 128-bit addresses (e.g., 2001:0db8:85a3::8a2e:0370:7334), solving IPv4 address exhaustion.'
        },
        {
          question: 'What is a port number?',
          options: ['IP address', 'Endpoint identifier for processes', 'MAC address', 'Physical connector'],
          correct: 1,
          explanation: 'Port number identifies specific processes or services on a device, enabling multiple network services.'
        },
        {
          question: 'What is the range of well-known ports?',
          options: ['1024-49151', '0-1023', '49152-65535', '1-65535'],
          correct: 1,
          explanation: 'Well-known ports are 0-1023, reserved for standard services like HTTP (80), HTTPS (443), FTP (21).'
        },
        {
          question: 'What is HTTP?',
          options: ['Transport protocol', 'Application protocol for web', 'Network protocol', 'Link protocol'],
          correct: 1,
          explanation: 'HTTP (Hypertext Transfer Protocol) is an application layer protocol for transferring web content.'
        },
        {
          question: 'What is HTTPS?',
          options: ['Same as HTTP', 'Secure HTTP using TLS/SSL', 'Faster HTTP', 'HTTP version 2'],
          correct: 1,
          explanation: 'HTTPS is HTTP secured with TLS/SSL encryption, protecting data in transit.'
        },
        {
          question: 'What is FTP?',
          options: ['Web protocol', 'File Transfer Protocol', 'Fast Transfer Protocol', 'Forwarding Protocol'],
          correct: 1,
          explanation: 'FTP (File Transfer Protocol) is used for transferring files between computers over a network.'
        },
        {
          question: 'What is SMTP?',
          options: ['Mail reception', 'Simple Mail Transfer Protocol for sending email', 'Secure protocol', 'Web protocol'],
          correct: 1,
          explanation: 'SMTP is the protocol for sending emails from clients to servers and between mail servers.'
        },
        {
          question: 'What is POP3?',
          options: ['Sending email', 'Protocol for retrieving email', 'Web protocol', 'File transfer'],
          correct: 1,
          explanation: 'POP3 (Post Office Protocol 3) retrieves emails from a server to a client, typically downloading and deleting.'
        },
        {
          question: 'What is IMAP?',
          options: ['Sending email', 'Protocol for accessing email on server', 'Web protocol', 'File transfer'],
          correct: 1,
          explanation: 'IMAP (Internet Message Access Protocol) allows accessing and managing emails directly on the server.'
        },
        {
          question: 'What is DHCP?',
          options: ['Static addressing', 'Dynamic Host Configuration Protocol', 'Domain protocol', 'Data protocol'],
          correct: 1,
          explanation: 'DHCP automatically assigns IP addresses and network configuration to devices on a network.'
        },
        {
          question: 'What is ARP?',
          options: ['IP to MAC resolution', 'Address Resolution Protocol', 'Application protocol', 'Routing protocol'],
          correct: 1,
          explanation: 'ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on local networks.'
        },
        {
          question: 'What is NAT?',
          options: ['No translation', 'Network Address Translation', 'Name translation', 'Automatic routing'],
          correct: 1,
          explanation: 'NAT translates private IP addresses to public IP addresses, allowing multiple devices to share one public IP.'
        },
        {
          question: 'What is a firewall?',
          options: ['Physical wall', 'Network security system filtering traffic', 'Router', 'Switch'],
          correct: 1,
          explanation: 'A firewall is a security system that monitors and controls incoming/outgoing network traffic based on rules.'
        },
        {
          question: 'What is a router?',
          options: ['Connects same network', 'Forwards packets between networks', 'Local switch', 'Modem'],
          correct: 1,
          explanation: 'A router forwards data packets between different networks, determining best paths based on IP addresses.'
        },
        {
          question: 'What is a switch?',
          options: ['Routes between networks', 'Connects devices on same network', 'Internet gateway', 'Firewall'],
          correct: 1,
          explanation: 'A switch connects devices on the same network, forwarding frames based on MAC addresses.'
        },
        {
          question: 'What is a hub?',
          options: ['Intelligent device', 'Simple broadcast device', 'Router', 'Switch'],
          correct: 1,
          explanation: 'A hub broadcasts data to all connected devices without intelligence, causing collisions and inefficiency.'
        },
        {
          question: 'What is a gateway?',
          options: ['Same as router', 'Device connecting different network architectures', 'Switch', 'Hub'],
          correct: 1,
          explanation: 'A gateway connects networks using different protocols or architectures, performing protocol conversion.'
        },
        {
          question: 'What is bandwidth?',
          options: ['Network size', 'Maximum data transfer rate', 'Number of devices', 'Signal strength'],
          correct: 1,
          explanation: 'Bandwidth is the maximum rate of data transfer across a network connection, typically measured in bps.'
        },
        {
          question: 'What is latency?',
          options: ['Bandwidth', 'Time delay in data transmission', 'Network size', 'Speed'],
          correct: 1,
          explanation: 'Latency is the time delay between sending and receiving data, affecting responsiveness.'
        },
        {
          question: 'What is throughput?',
          options: ['Maximum capacity', 'Actual data transfer rate achieved', 'Bandwidth', 'Latency'],
          correct: 1,
          explanation: 'Throughput is the actual rate of successful data transfer, typically less than bandwidth due to overhead.'
        },
        {
          question: 'What is packet switching?',
          options: ['Circuit switching', 'Data divided into packets routed independently', 'Continuous connection', 'No switching'],
          correct: 1,
          explanation: 'Packet switching divides data into packets that are routed independently, efficiently sharing network resources.'
        },
        {
          question: 'What is circuit switching?',
          options: ['Packet switching', 'Dedicated communication path established', 'Shared path', 'No connection'],
          correct: 1,
          explanation: 'Circuit switching establishes a dedicated communication path for the duration of transmission (like phone calls).'
        },
        {
          question: 'What is a VPN?',
          options: ['Local network', 'Virtual Private Network creating secure connection', 'Public network', 'No encryption'],
          correct: 1,
          explanation: 'VPN creates an encrypted tunnel over public networks, providing secure remote access to private networks.'
        },
        {
          question: 'What is SSL/TLS?',
          options: ['Routing protocol', 'Cryptographic protocols for secure communication', 'Application protocol', 'Network protocol'],
          correct: 1,
          explanation: 'SSL/TLS (Secure Sockets Layer/Transport Layer Security) provide encryption and authentication for secure communication.'
        },
        {
          question: 'What is a proxy server?',
          options: ['End server', 'Intermediary server between client and server', 'Client', 'Router'],
          correct: 1,
          explanation: 'A proxy server acts as intermediary between clients and servers, providing caching, filtering, and anonymity.'
        },
        {
          question: 'What is CDN?',
          options: ['Single server', 'Content Delivery Network distributing content globally', 'Domain name', 'Protocol'],
          correct: 1,
          explanation: 'CDN is a geographically distributed network of servers that delivers content quickly to users based on location.'
        },
        {
          question: 'What is QoS?',
          options: ['Quality of Service prioritizing traffic', 'Random service', 'No priority', 'Equal treatment'],
          correct: 0,
          explanation: 'QoS (Quality of Service) prioritizes certain types of network traffic to ensure performance for critical applications.'
        },
        {
          question: 'What is multicast?',
          options: ['One-to-one', 'One-to-many communication', 'Broadcast', 'No transmission'],
          correct: 1,
          explanation: 'Multicast sends data from one source to multiple specific receivers, more efficient than multiple unicasts.'
        },
        {
          question: 'What is broadcast?',
          options: ['One-to-one', 'One-to-all in network', 'Multicast', 'No transmission'],
          correct: 1,
          explanation: 'Broadcast sends data from one source to all devices in the network segment.'
        },
        {
          question: 'What is unicast?',
          options: ['One-to-many', 'One-to-one communication', 'Broadcast', 'Multicast'],
          correct: 1,
          explanation: 'Unicast is one-to-one communication between a single sender and single receiver.'
        },
        {
          question: 'What is VLAN?',
          options: ['Physical LAN', 'Virtual LAN logically segmenting network', 'WAN', 'Internet'],
          correct: 1,
          explanation: 'VLAN (Virtual LAN) logically segments a physical network into separate broadcast domains for security and efficiency.'
        },
        {
          question: 'What is MTU?',
          options: ['Minimum size', 'Maximum Transmission Unit', 'Medium speed', 'Multiple users'],
          correct: 1,
          explanation: 'MTU is the maximum size of a packet that can be transmitted without fragmentation, typically 1500 bytes for Ethernet.'
        },
        {
          question: 'What is fragmentation?',
          options: ['Combining packets', 'Dividing packet into smaller pieces', 'No division', 'Encryption'],
          correct: 1,
          explanation: 'Fragmentation divides large packets into smaller fragments to fit the MTU of the network path.'
        },
        {
          question: 'What is a checksum?',
          options: ['Data content', 'Error-detection value', 'Address', 'Port'],
          correct: 1,
          explanation: 'Checksum is a calculated value used to detect errors in transmitted data by comparing original and received checksums.'
        },
        {
          question: 'What is CRC?',
          options: ['Checksum', 'Cyclic Redundancy Check for error detection', 'Encryption', 'Routing'],
          correct: 1,
          explanation: 'CRC is an error-detecting code commonly used in networks to detect changes to raw data.'
        },
        {
          question: 'What is handshake in networking?',
          options: ['Data transfer', 'Establishing communication parameters', 'Error checking', 'Routing'],
          correct: 1,
          explanation: 'Handshake is a automated negotiation process establishing communication parameters between devices.'
        },
        {
          question: 'What is the TCP three-way handshake?',
          options: ['Two steps', 'SYN, SYN-ACK, ACK to establish connection', 'Four-way', 'No handshake'],
          correct: 1,
          explanation: 'TCP three-way handshake (SYN, SYN-ACK, ACK) establishes a reliable connection before data transfer.'
        },
        {
          question: 'What is connection-oriented protocol?',
          options: ['No connection', 'Establishes connection before data transfer', 'Connectionless', 'Unreliable'],
          correct: 1,
          explanation: 'Connection-oriented protocols (like TCP) establish a connection before transferring data, ensuring reliability.'
        },
        {
          question: 'What is connectionless protocol?',
          options: ['Establishes connection', 'No connection establishment', 'Always reliable', 'Slow'],
          correct: 1,
          explanation: 'Connectionless protocols (like UDP) send data without establishing connection, trading reliability for speed.'
        },
        {
          question: 'What is a socket in networking?',
          options: ['Physical port', 'IP address + port number combination', 'MAC address', 'Domain name'],
          correct: 1,
          explanation: 'A socket is an endpoint for network communication, identified by IP address and port number combination.'
        },
        {
          question: 'What is flow control?',
          options: ['No control', 'Managing data transmission rate', 'Routing', 'Switching'],
          correct: 1,
          explanation: 'Flow control manages the rate of data transmission to prevent overwhelming the receiver.'
        },
        {
          question: 'What is congestion control?',
          options: ['No control', 'Preventing network congestion', 'Flow control', 'Error control'],
          correct: 1,
          explanation: 'Congestion control prevents network congestion by controlling the rate at which packets are sent into the network.'
        },
        {
          question: 'What is sliding window protocol?',
          options: ['Fixed window', 'Variable-size window for flow control', 'No window', 'Single packet'],
          correct: 1,
          explanation: 'Sliding window protocol allows sending multiple packets before acknowledgment, improving efficiency with flow control.'
        },
        {
          question: 'What is ICMP?',
          options: ['Data protocol', 'Internet Control Message Protocol', 'Application protocol', 'Transport protocol'],
          correct: 1,
          explanation: 'ICMP is used for error messages and operational information, like ping and traceroute.'
        },
        {
          question: 'What is ping?',
          options: ['Port scan', 'Network diagnostic tool using ICMP', 'Router', 'Firewall'],
          correct: 1,
          explanation: 'Ping sends ICMP echo requests to test reachability and measure round-trip time to a host.'
        },
        {
          question: 'What is traceroute?',
          options: ['Bandwidth test', 'Shows path packets take to destination', 'Ping', 'Port scan'],
          correct: 1,
          explanation: 'Traceroute displays the path and hop-by-hop delays packets take from source to destination.'
        },
        {
          question: 'What is BGP?',
          options: ['Internal routing', 'Border Gateway Protocol for internet routing', 'Link protocol', 'Transport protocol'],
          correct: 1,
          explanation: 'BGP is the routing protocol used to exchange routing information between autonomous systems on the internet.'
        },
        {
          question: 'What is OSPF?',
          options: ['External routing', 'Open Shortest Path First interior routing', 'Application protocol', 'BGP'],
          correct: 1,
          explanation: 'OSPF is a link-state routing protocol used within an autonomous system to find shortest paths.'
        },
        {
          question: 'What is RIP?',
          options: ['Modern protocol', 'Routing Information Protocol using hop count', 'Link state', 'External routing'],
          correct: 1,
          explanation: 'RIP is a distance-vector routing protocol using hop count as metric, simple but limited to 15 hops.'
        },
        {
          question: 'What is distance vector routing?',
          options: ['Link state', 'Routes based on distance and direction', 'Source routing', 'No routing'],
          correct: 1,
          explanation: 'Distance vector routing determines best path based on distance (metrics like hop count) and direction.'
        },
        {
          question: 'What is link state routing?',
          options: ['Distance vector', 'Each router builds complete network topology', 'No topology', 'Simple routing'],
          correct: 1,
          explanation: 'Link state routing has each router build a complete network topology map to calculate optimal paths.'
        },
        {
          question: 'What is autonomous system (AS)?',
          options: ['Single router', 'Collection of networks under one administration', 'Internet', 'LAN'],
          correct: 1,
          explanation: 'An autonomous system is a collection of IP networks under single administrative control using common routing policy.'
        },
        {
          question: 'What is TTL (Time To Live)?',
          options: ['Timestamp', 'Hop count limit preventing routing loops', 'Speed', 'Bandwidth'],
          correct: 1,
          explanation: 'TTL is a value in packets that decreases with each hop, preventing infinite routing loops by discarding when zero.'
        },
        {
          question: 'What is network topology?',
          options: ['Network speed', 'Physical/logical layout of network', 'Protocol', 'Address scheme'],
          correct: 1,
          explanation: 'Network topology describes the arrangement and interconnection of network components.'
        },
        {
          question: 'What is star topology?',
          options: ['Ring shape', 'All devices connect to central hub', 'Mesh', 'Bus'],
          correct: 1,
          explanation: 'Star topology has all devices connected to a central hub/switch, easy to manage but single point of failure.'
        },
        {
          question: 'What is bus topology?',
          options: ['Central hub', 'All devices on single cable', 'Ring', 'Star'],
          correct: 1,
          explanation: 'Bus topology connects all devices to a single cable (backbone), simple but performance degrades with traffic.'
        },
        {
          question: 'What is ring topology?',
          options: ['Star shape', 'Devices connected in closed loop', 'Bus', 'Mesh'],
          correct: 1,
          explanation: 'Ring topology connects devices in a closed loop where data travels in one direction, failure breaks the ring.'
        },
        {
          question: 'What is mesh topology?',
          options: ['Single connection', 'Every device connected to every other', 'Star', 'Bus'],
          correct: 1,
          explanation: 'Mesh topology has every device connected to every other device, highly reliable but expensive and complex.'
        },
        {
          question: 'What is collision domain?',
          options: ['No collisions', 'Network segment where collisions can occur', 'Broadcast domain', 'Routing domain'],
          correct: 1,
          explanation: 'Collision domain is a network segment where packet collisions can occur when multiple devices transmit simultaneously.'
        },
        {
          question: 'What is broadcast domain?',
          options: ['Collision domain', 'Network segment receiving broadcast messages', 'No broadcasts', 'Single device'],
          correct: 1,
          explanation: 'Broadcast domain is a network segment where broadcast messages are received by all devices.'
        },
        {
          question: 'What is CSMA/CD?',
          options: ['Wireless protocol', 'Carrier Sense Multiple Access with Collision Detection', 'Routing protocol', 'Application protocol'],
          correct: 1,
          explanation: 'CSMA/CD is used in Ethernet to detect and handle collisions by listening before transmitting and detecting during.'
        },
        {
          question: 'What is CSMA/CA?',
          options: ['Wired protocol', 'Carrier Sense Multiple Access with Collision Avoidance', 'CSMA/CD', 'Routing protocol'],
          correct: 1,
          explanation: 'CSMA/CA is used in wireless networks to avoid collisions by checking channel before transmitting.'
        },
        {
          question: 'What is half-duplex?',
          options: ['Both directions simultaneously', 'One direction at a time', 'No communication', 'Unidirectional'],
          correct: 1,
          explanation: 'Half-duplex allows communication in both directions but not simultaneously, like walkie-talkie.'
        },
        {
          question: 'What is full-duplex?',
          options: ['One direction', 'Both directions simultaneously', 'No communication', 'Half-duplex'],
          correct: 1,
          explanation: 'Full-duplex allows simultaneous communication in both directions, like telephone conversation.'
        },
        {
          question: 'What is simplex?',
          options: ['Both directions', 'One direction only', 'Half-duplex', 'Full-duplex'],
          correct: 1,
          explanation: 'Simplex allows communication in one direction only, like traditional radio or TV broadcast.'
        },
        {
          question: 'What is Ethernet?',
          options: ['Wireless protocol', 'Wired LAN technology', 'WAN protocol', 'Application protocol'],
          correct: 1,
          explanation: 'Ethernet is the most common wired LAN technology using CSMA/CD for media access control.'
        },
        {
          question: 'What is WiFi?',
          options: ['Wired technology', 'Wireless LAN technology', 'Bluetooth', 'Cellular'],
          correct: 1,
          explanation: 'WiFi (802.11) is a wireless LAN technology allowing devices to connect without physical cables.'
        },
        {
          question: 'What is the difference between LAN and WAN?',
          options: ['No difference', 'LAN is local, WAN covers large area', 'WAN is faster', 'LAN is internet'],
          correct: 1,
          explanation: 'LAN (Local Area Network) covers small area like building; WAN (Wide Area Network) covers large geographic area.'
        },
        {
          question: 'What is a MAN?',
          options: ['LAN', 'Metropolitan Area Network', 'WAN', 'PAN'],
          correct: 1,
          explanation: 'MAN (Metropolitan Area Network) covers a city or metropolitan area, larger than LAN but smaller than WAN.'
        },
        {
          question: 'What is a PAN?',
          options: ['LAN', 'Personal Area Network', 'WAN', 'MAN'],
          correct: 1,
          explanation: 'PAN (Personal Area Network) covers very small area around a person, like Bluetooth devices.'
        },
        {
          question: 'What is the internet?',
          options: ['Single network', 'Global network of networks', 'LAN', 'WAN'],
          correct: 1,
          explanation: 'The internet is the global system of interconnected computer networks using TCP/IP protocols.'
        },
        {
          question: 'What is intranet?',
          options: ['Public internet', 'Private network using internet technologies', 'Extranet', 'LAN'],
          correct: 1,
          explanation: 'Intranet is a private network within organization using internet technologies and protocols.'
        },
        {
          question: 'What is extranet?',
          options: ['Public internet', 'Private network extended to external users', 'Intranet', 'LAN'],
          correct: 1,
          explanation: 'Extranet is an intranet extended to authorized external users like partners or suppliers.'
        },
        {
          question: 'What is network segmentation?',
          options: ['Combining networks', 'Dividing network into segments', 'No division', 'Single segment'],
          correct: 1,
          explanation: 'Network segmentation divides a network into separate segments for security, performance, and management.'
        },
        {
          question: 'What is DMZ (Demilitarized Zone)?',
          options: ['Internal network', 'Network segment exposed to internet', 'Secure zone', 'No access'],
          correct: 1,
          explanation: 'DMZ is a network segment that sits between internal network and internet, hosting public-facing services.'
        },
        {
          question: 'What is load balancing in networks?',
          options: ['Single path', 'Distributing traffic across multiple paths', 'No distribution', 'Random routing'],
          correct: 1,
          explanation: 'Load balancing distributes network traffic across multiple servers or paths to optimize performance and reliability.'
        },
        {
          question: 'What is redundancy in networks?',
          options: ['Single path', 'Duplicate components for reliability', 'No backup', 'Slow network'],
          correct: 1,
          explanation: 'Redundancy provides backup components or paths to maintain service if primary components fail.'
        },
        {
          question: 'What is STP (Spanning Tree Protocol)?',
          options: ['Creates loops', 'Prevents loops in switched networks', 'Routing protocol', 'Application protocol'],
          correct: 1,
          explanation: 'STP prevents loops in switched Ethernet networks by blocking redundant paths while maintaining backup paths.'
        },
        {
          question: 'What is PoE (Power over Ethernet)?',
          options: ['Data only', 'Delivering power over Ethernet cables', 'Wireless power', 'No power'],
          correct: 1,
          explanation: 'PoE delivers electrical power and data over Ethernet cables, useful for devices like IP cameras and access points.'
        },
        {
          question: 'What is jitter?',
          options: ['Constant delay', 'Variation in packet delay', 'Bandwidth', 'Throughput'],
          correct: 1,
          explanation: 'Jitter is the variation in packet arrival times, important for real-time applications like VoIP and video.'
        },
        {
          question: 'What is packet loss?',
          options: ['All packets arrive', 'Packets fail to reach destination', 'No loss', 'Guaranteed delivery'],
          correct: 1,
          explanation: 'Packet loss occurs when packets fail to reach their destination due to network congestion, errors, or failures.'
        }
      ];
      return { id: i + 1, ...questions[i % questions.length] };
    })
  },
  'cloud': {
    title: 'Cloud Computing',
    theory: 'Cloud computing delivers computing resources, platforms, and software over the internet so teams can scale quickly without managing underlying infrastructure.',
    keyPoints: [
      'IaaS provides virtualized infrastructure for compute, storage, and networking',
      'PaaS offers managed platforms for building and deploying applications',
      'SaaS delivers software applications over the internet',
      'Private cloud is dedicated to one organization; public cloud is shared among many',
      'Hybrid cloud combines public and private environments for flexibility',
      'Serverless and containers abstract infrastructure and simplify deployment',
    ],
    questions: questionBank.cloud.questions
  }
};

export default function TechnicalTopic() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);

  const subject = subjectData[subjectId || ''];

  if (!subject) {
    return <div>Subject not found</div>;
  }

  if (!subject.questions || subject.questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>No questions available</CardTitle>
          </CardHeader>
          <CardContent>We could not load questions for this topic. Please try another subject.</CardContent>
        </Card>
      </div>
    );
  }

  const question = subject.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / subject.questions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        variant: "destructive",
      });
      return;
    }

    setShowExplanation(true);
    const newAnswered = [...answeredQuestions];
    
    if (!newAnswered[currentQuestion]) {
      newAnswered[currentQuestion] = true;
      setAnsweredQuestions(newAnswered);
      
      if (selectedAnswer === question.correct) {
        setScore(score + 1);
        toast({
          title: "Correct! 🎉",
          description: "Great job!",
        });
      } else {
        toast({
          title: "Incorrect",
          description: "Check the explanation below",
          variant: "destructive",
        });
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < subject.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/technical-questions')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {subject.title}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={handleSignOut}
              className="rounded-full"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Theory Section */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Theory & Key Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{subject.theory}</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Important Points:</h3>
                <ul className="space-y-2">
                  {subject.keyPoints.map((point: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm text-muted-foreground flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Question {currentQuestion + 1} of {subject.questions.length}</span>
              <span>Score: {score}/{answeredQuestions.filter(Boolean).length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-lg">
                Q{currentQuestion + 1}. {question.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {question.options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? showExplanation
                          ? index === question.correct
                            ? 'border-green-500 bg-green-50 dark:bg-green-950'
                            : 'border-red-500 bg-red-50 dark:bg-red-950'
                          : 'border-primary bg-primary/10'
                        : showExplanation && index === question.correct
                        ? 'border-green-500 bg-green-50 dark:bg-green-950'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showExplanation && index === question.correct && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                      {showExplanation && selectedAnswer === index && index !== question.correct && (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {showExplanation && (
                <div className="bg-muted p-4 rounded-lg animate-fade-in">
                  <h4 className="font-semibold mb-2">Explanation:</h4>
                  <p className="text-sm text-muted-foreground">{question.explanation}</p>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                {!showExplanation && (
                  <Button onClick={handleCheckAnswer} className="flex-1">
                    Check Answer
                  </Button>
                )}
                {showExplanation && (
                  <>
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={currentQuestion === subject.questions.length - 1}
                      className="flex-1"
                    >
                      Next Question
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
