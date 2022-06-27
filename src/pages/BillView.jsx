import React from "react";
import { Table } from "react-bootstrap";
import "../styles/billview.css";

export default function BillView() {
  return (
    <div className="billView">
      <div>Global Mobile</div>
      <div className="nameAndMail">
        <div>
          <p>Name</p>
        </div>
        <div>
          <p>GST: 02AABCU9603R1ZZ</p>
          <p>Email: test@gmail.com</p>
        </div>
      </div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td colSpan={3}>
              <tr>
                <td>Mr/Mrs: Saitama</td>
              </tr>
              <tr>
                <td>12345-12345</td>
              </tr>
            </td>
            <td>
              <tr>
                <td>Bill No.:</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
              </tr>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
