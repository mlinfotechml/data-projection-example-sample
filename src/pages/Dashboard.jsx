import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import students from "../data/students";
import "../styles/dashboard.css";

function Dashboard() {
  let max,
    min,
    avgPercentage = 0,
    totalMarks = 0;
  let maxStudent = "";
  let minStudent = "";
  let minYear;
  let oldestStudent = "";
  let totalFail = 0;
  let totalPass = 0;
  for (let objStudent of students) {
    let total = Object.values(objStudent.marks).reduce(
      (a, item) => a + item,
      0
    );
    const hasFailed = Object.values(objStudent.marks).find((item) => item < 35);
    if (hasFailed) totalFail++;
    totalMarks += total;
    if (!max || total > max) {
      max = total;
      maxStudent = objStudent.firstName + " " + objStudent.lastName;
    }
    if (!min || total < min) {
      min = total;
      minStudent = objStudent.firstName + " " + objStudent.lastName;
    }
    if (!oldestStudent || objStudent.birthYear < minYear) {
      minYear = objStudent.birthYear;
      oldestStudent = `${objStudent.firstName}  ${objStudent.lastName}`;
    }
  }

  avgPercentage = (totalMarks * 100) / 500 / students.length;
  totalPass = students.length - totalFail;
  return (
    <Container>
      <Row className="justify-content-md-center g-4">
        <Col xs="12" md="4">
          <div className="cardContainer">
            <div>Total Students</div>
            <div>
              <p>{students.length}</p>
            </div>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className="cardContainer">
            <div>Highest Marks</div>
            <div>
              <p>{maxStudent}</p>
              <p>{max}</p>
            </div>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className="cardContainer">
            <div>Lowest Marks</div>
            <div>
              <p>{minStudent}</p>
              <p>{min}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        className="justify-content-md-center g-4"
        style={{ marginTop: 16, marginBottom: 16 }}
      >
        <Col xs="12" md="4">
          <div className="cardContainer">
            <div>Average Percentage</div>
            <div>
              <p>{Math.round(avgPercentage * 100) / 100}%</p>
            </div>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className="cardContainer">
            <div>Pass vs Fail</div>
            <div>
              <p>Total Students: {students.length}</p>
              <p>
                <span style={{ color: "green" }}>{totalPass}</span> /{" "}
                <span style={{ color: "red" }}>{totalFail}</span>
              </p>
            </div>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className="cardContainer">
            <div>Oldest Student</div>
            <div>
              <p>{oldestStudent}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
