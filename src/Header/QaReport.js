import React from "react";
import "./qareport.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function QaReport() {
  return (
    <div className="report-container">
      <div className="report-header">
        <h4>QA Management Report Panel</h4>
      </div>
      <div className="backicon">
          <Link to="/">
            <BiArrowBack />
          </Link>
        </div>
      <div className="filterby">
        <label htmlFor="">Filter By : </label>
        <select className="filter-label" name="" id="">
          <option value="">Select App</option>
          <option value="">GLUV Native</option>
          <option value="">FX Native</option>
          <option value="">FM Native</option>
          <option value="">Retail</option>
          <option value="">Headless</option>
        </select>
        <select className="filter-label" name="" id="">
          <option value="">Select Environment</option>
          <option value="">Dev</option>
          <option value="">QA</option>
          <option value="">Stage</option>
          <option value="">Production</option>
          <option value="">Demo</option>
        </select>
        <select className="filter-label" name="" id="">
          <option value="">Select Priority</option>
          <option value="">Low</option>
          <option value="">Medium</option>
          <option value="">High</option>
          <option value="">Urgent</option>
        </select>
        <select className="filter-label" name="" id="">
          <option value="">Select Status</option>
          <option value="">To-do</option>
          <option value="">In-Progress</option>
          <option value="">Pass</option>
          <option value="">Failed</option>
        </select>
        <select className="filter-label" name="" id="">
          <option value="">Select Tester Name</option>
          <option value="">Amit k</option>
          <option value="">Sidhdhant P</option>
          <option value="">Vinod B</option>
          <option value="">Pooja H</option>
        </select>
        <input className="filter-label" type="date" name="" id="" />{" "}
        <Button className="filter-button" variant="success" size="sm">
          Submit
        </Button>
        <Button className="filter-button" variant="light" size="sm">
          Reset
        </Button>
      </div>

      <div className="report-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Test Case ID</th>
              <th>Test Case</th>
              <th>App Name</th>
              <th>App Vesrion</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default QaReport;
