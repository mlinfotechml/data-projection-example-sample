import React from "react";
import { Table } from "react-bootstrap";
import students from "../data/students";

function StudentsTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Is Passed</th>
          <th>Name</th>
          <th>Age</th>
          <th>Admission Year</th>
          <th>Study Year</th>
          <th>Hindi</th>
          <th>English</th>
          <th>Math</th>
          <th>GraphQL</th>
          <th>Node</th>
          <th>Total Marks</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item, index) => {
          const totalMarks = Object.values(item.marks).reduce(
            (total, item) => total + item,
            0
          );
          const percentage = (totalMarks * 100) / (100 * 5);
          const hasFailed = Object.values(item.marks).find((item) => item < 35);
          return (
            <tr key={index}>
              <td style={{ color: hasFailed ? "red" : "green" }}>
                {hasFailed ? "No" : "Yes"}
              </td>
              <td>{item.firstName + " " + item.lastName}</td>
              <td>{new Date().getFullYear() - item.birthYear}</td>
              <td>{item.admissionYear}</td>
              <td>{item.studyYear}</td>
              <td>{item.marks.hindi}</td>
              <td>{item.marks.english}</td>
              <td>{item.marks.math}</td>
              <td>{item.marks.graphql}</td>
              <td>{item.marks.node}</td>
              <td>{totalMarks}</td>
              <td>{percentage}%</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default StudentsTable;
