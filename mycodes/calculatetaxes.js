class Animal {
    constructor(name, sound) {
        Animal.name = name; // Assign name to the object
        Animal.sound = sound; // Assign sound to the object
    }

    // Method
    makeSound() {
        console.log(`${constructor.name} says ${constructor.sound}`);
    }
}

// Create objects from the class
const dog = new Animal("Dog", "Woof");
const cat = new Animal("Cat", "Meow");

// Use the method
dog.makeSound(); // Output: Dog says Woof
cat.makeSound(); // Output: Cat says Meow
