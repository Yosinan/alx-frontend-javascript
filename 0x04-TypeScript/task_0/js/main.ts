// define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "Joey",
    lastName: "Yos",
    age: 21,
    location: "Addis Ababa",
  };
  
  const student2: Student = {
    firstName: "Beth",
    lastName: "Mack",
    age: 22,
    location: "Madrid",
  };
  
  // create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // render the table
  const table = document.createElement("table");
  
  // crreate table headers
  const headerRow = document.createElement("tr");
  const header1 = document.createElement("th");
  header1.textContent = "First Name";
  const header2 = document.createElement("th");
  header2.textContent = "Location";
  
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  table.appendChild(headerRow);
  
  // Create table rows for each student
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
  
    table.appendChild(row);
  });
  
  // append the table to the document body
  document.body.appendChild(table);
  