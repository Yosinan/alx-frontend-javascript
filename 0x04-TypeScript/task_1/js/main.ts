interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const teacher1: Teacher = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "California",
    contract: false,
  };
  
  console.log(teacher1);
  
  const director1: Directors = {
    firstName: "Bob",
    lastName: "Williams",
    location: "New York",
    fullTimeEmployee: true,
    numberOfReports: 10,
  };
  
  console.log(director1);
  
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  export const printTeacher: printTeacherFunction = (
    firstName: string,
    lastName: string
  ): string => `${firstName[0]}. ${lastName}`;
  
  console.log(printTeacher("John", "Doe"));
  
  interface StudentClassInterface {
    firstName: string;
    lastName: string;
  }
  
  interface StudentClassConstructorInterface {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  function createStudent(
    cStudent: StudentClassConstructorInterface,
    firstName: string,
    lastName: string
  ): StudentClassInterface {
    return new cStudent(firstName, lastName);
  }
  
  const student1 = createStudent(StudentClass, "Millie", "Bobby Brown");
  console.log(student1);
  