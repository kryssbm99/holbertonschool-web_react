// Define the interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass that adheres to the interface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns 'Currently working'
  workOnHomework(): string {
    return "Currently working";
  }

  // Method that returns the firstName of the student
  displayName(): string {
    return this.firstName;
  }
}

// Test the class with an example
const student1 = new StudentClass('John', 'Doe');
console.log(student1.displayName()); // Output: John
console.log(student1.workOnHomework()); // Output: Currently working
