import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import "./testcasedisplay.css";
import Modal from "react-bootstrap/Modal"; // step1
import TestCaseForm from "./TestCaseForm";

function TestCasedisplay() {
  const [show, setShow] = useState(null);

  const handleModalClose = () => setShow(false);
  const handleModalShow = () => setShow(true);

  return (
    <div className="display">
      <div className="testcase-heading">
        <h4>Test-Case List</h4>
      </div>
      <Table className="testcase-table" hover size="sm">
        <thead>
          <tr>
            <th className="fisrtCol">Test case ID</th>
            <th>Test case Description</th>
            <th>Status</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fisrtCol">1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td className="fisrtCol">2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
 
      {/* Modal */}
      <Modal
        // className="myModal-content"
        dialogClassName="my-modal"
        show={show}
        onHide={handleModalClose}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
           
            <h2 style={{paddingLeft: "376px"}}>Test Case Form</h2>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <TestCaseForm />
        </Modal.Body>

        <Modal.Footer className="modal-footer">
          <Button variant="danger" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleModalClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Button
        variant="outline-secondary"
        className="formOpenButton"
        onClick={handleModalShow}
      >
        <span className="material-symbols-outlined">add</span>
      </Button>
    </div>
  );
}

export default TestCasedisplay;
