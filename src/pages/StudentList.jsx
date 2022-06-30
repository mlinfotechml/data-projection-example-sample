import React from 'react'
import { Table } from 'react-bootstrap'
import lstStudent from "../data/students.js"
import Utils from "../Utils/Utils.js"

export default function StudentList() {
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
          <th>GraphQl</th>
          <th>Node</th>
          <th>Total Marks</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {
          lstStudent.map((item, index) => (
            <tr key={index} >
              <td>{Utils.getIsPassedOrNot(item.marks) ? (
                <span style={{ color: "green" }}>Yes</span>
              ) : (
                <span style={{ color: "red" }}>No</span>
              )}</td>
              <td >{`${item.firstName} ${item.lastName}`}</td>
              <td >{new Date().getFullYear() - item.birthYear}</td>
              <td>{`${item.admissionYear}`}</td>
              <td>{item.studyYear}</td>
              {Object.values(item.marks).map((marks, index) => (
                <td key={index}>{marks}</td>
              ))}
              <td>{Utils.getTotalSubjectMarks(item.marks)}</td>
              <td>{Utils.getPercentage(Utils.getTotalSubjectMarks(item.marks))}%</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}
