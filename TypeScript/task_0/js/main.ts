interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
    firstName: "Math",
    lastName: "Pavot",
    age: 25,
    location: "Toulouse",
  },
  student2: Student = {
    firstName: "Albert",
    lastName: "Vichy",
    age: 31,
    location: "Paris",
  };

const studentsList: Student[] = [student1, student2];

function table(students: Student[]): void {
  const table: HTMLElement = document.createElement("table");
  const header: HTMLElement = document.createElement("tr");

  const nameHeader: HTMLElement = document.createElement("th");
  nameHeader.textContent = "First name";
  const locationHeader: HTMLElement = document.createElement("th");
  locationHeader.textContent = "Location";

  header.appendChild(nameHeader);
  header.appendChild(locationHeader);
  table.appendChild(header);

  students.forEach((student) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.append(locationCell);
    table.appendChild(row);
  });
  document.body.appendChild(table);
}

table(studentsList);
