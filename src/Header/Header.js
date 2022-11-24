import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import { GoGear } from "react-icons/go";
import "./header.css";
import Modal from "react-bootstrap/Modal"; // step1\
import PanelTable from "./PanelTable";

function Header() {
  const [show, setShow] = useState(null); // step 2

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      {/* <Navbar className="navbar-header" expand="lg" variant="dark" bg="dark"> */}
      <div className="header">
        <h4>QA Managment Panel</h4>
        <Button className="setting" onClick={handleOpen}>
          <GoGear />
        </Button>

        <Modal
          dialogClassName="setting-panel-modal"
          show={show} //step 2
          onHide={handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h4 style={{ paddingLeft: "460px" }}>
                QA Management Setting Panel
              </h4>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <PanelTable />
          </Modal.Body>

          <Modal.Footer className="modal-footer">
            <Button variant="danger">
              <Link to="/qareport">Go to Reports</Link>
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* </Navbar> */}
    </>
  );
}
export default Header;
