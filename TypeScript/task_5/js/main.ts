// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: "MajorCredits";  // Brand property for unique identification
  }
  
  // Define the MinorCredits interface
  interface MinorCredits {
    credits: number;
    brand: "MinorCredits";  // Brand property for unique identification
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MajorCredits",  // Ensure the return type is still MajorCredits
    };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MinorCredits",  // Ensure the return type is still MinorCredits
    };
  }
  
  // Example usage:
  const majorSubject1: MajorCredits = { credits: 3, brand: "MajorCredits" };
  const majorSubject2: MajorCredits = { credits: 4, brand: "MajorCredits" };
  const minorSubject1: MinorCredits = { credits: 2, brand: "MinorCredits" };
  const minorSubject2: MinorCredits = { credits: 1, brand: "MinorCredits" };
  
  const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
  const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
  
  console.log(`Total Major Credits: ${totalMajorCredits.credits}`);  // Output: 7
  console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);  // Output: 3
  