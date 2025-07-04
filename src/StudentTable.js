import React from 'react';

const students = [
  { id: 1, name: 'Alice', age: 20, grade: 'A', email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 21, grade: 'B', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 22, grade: 'A', email: 'charlie@example.com' },
  { id: 4, name: 'David', age: 23, grade: 'C', email: 'david@example.com' },
  { id: 5, name: 'Eve', age: 24, grade: 'B', email: 'eve@example.com' },
  { id: 6, name: 'Frank', age: 22, grade: 'B', email: 'frank@example.com' },
  { id: 7, name: 'Grace', age: 21, grade: 'A', email: 'grace@example.com' },
  { id: 8, name: 'Heidi', age: 20, grade: 'C', email: 'heidi@example.com' },
  { id: 9, name: 'Ivan', age: 23, grade: 'A', email: 'ivan@example.com' },
  { id: 10, name: 'Judy', age: 22, grade: 'B', email: 'judy@example.com' },
];

function StudentTable() {
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.grade}</td>
            <td>{student.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
