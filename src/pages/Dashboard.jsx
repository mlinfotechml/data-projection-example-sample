import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Utils from "../Utils/Utils.js"
import "../App.css"

export default function Dashboard() {
  const objPassFail = Utils.getFailedStudent()
  return (
    <React.Fragment>
      <Container>
        <Row style={{ marginBottom: "15px" }}>
          <Col xs={6} md={4}>
            <Card style={{ width: '24rem', height: "220px", border: "black solid 1px" }}>
              <Card.Header>Total Student</Card.Header>
              <div className="containerBox" style={{ fontSize: "54px" }}>{Utils.getTotalStudetList()}</div>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '24rem', height: "220px", border: "black solid 1px" }}>
              <Card.Header>Highest Marks</Card.Header>
              <div style={{ fontSize: "24px", textAlign: "center", marginTop: "30px" }}>Alexander The Great</div>
              <div className="containerBox" style={{ fontSize: "54px" }}>{Utils.getMaxMarks()}</div>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '24rem', height: "220px", border: "black solid 1px" }}>
              <Card.Header>Lowest Marks</Card.Header>
              <div style={{ fontSize: "24px", textAlign: "center", marginTop: "30px" }}>Vandana Sahu</div>
              <div className="containerBox" style={{ fontSize: "54px" }}>{Utils.getMinMarks()}</div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: '24rem', height: "220px", border: "black solid 1px" }}>
              <Card.Header>Average Percentage</Card.Header>
              <div className="containerBox" style={{ fontSize: "54px" }}>{Utils.getAvgPercentage()}%</div>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '24rem', height: "220px", border: "black solid 1px" }}>
              <Card.Header>Pass Vs Fail</Card.Header>
              <div style={{ fontSize: "24px", textAlign: "center", marginTop: "30px" }}>Total Student: {Utils.getTotalStudetList()}</div>
              <div className="containerBox" style={{ fontSize: "54px" }}>{
                <>
                  <div>
                    <span style={{ color: "green" }}>{Utils.getPassedStudent()}</span>/<span style={{ color: "red" }}>{objPassFail.isFailed}</span>
                  </div>
                </>
              }</div>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '24rem', height: "220px", border: "black solid 1px" }}>
              <Card.Header>Lowest Marks</Card.Header>
              <div style={{ fontSize: "24px", textAlign: "center", marginTop: "30px" }}>Nehal Patel</div>
              <div className="containerBox" style={{ fontSize: "54px" }}>{Utils.getMinMarks()}</div>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
