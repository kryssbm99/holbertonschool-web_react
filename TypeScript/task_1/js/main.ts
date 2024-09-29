// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional property
    location: string;
    [propName: string]: any; // Index signature to allow any additional property
  }
  
  // Create a teacher object using the interface
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  // Log the object to verify the structure
  console.log(teacher3);
  