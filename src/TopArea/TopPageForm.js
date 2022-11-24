import React from "react";
import "./toppage.css";
// import { Form } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

function TopPageForm() {
  return (
    <div className="toppage-container">
      <form>
        <div className="top-form">
          <div className="appname boxTop">
            <label htmlFor="">App Name</label>
            <select name="" id="">
              <option value="">Select Project</option>
              <option value="">GLUV Native</option>
              <option value="">FX Native</option>
              <option value="">FM Native</option>
              <option value="">Retail</option>
              <option value="">Headless</option>
            </select>
          </div>

          <div className="tester-name boxTop">
            <label>Tester Name :</label>
            <input type="text" placeholder="Tester Name" />
          </div>

          <div className="app-version boxTop">
            <label>App Version : </label>
            <input type="text" placeholder="App Version" />
          </div>
          <div className="date boxTop">
            <label>Date :</label>
            <input type="date" placeholder="App Version" />
          </div>
          <div className="envoirnment boxTop">
            <label>Envoirnment : </label>
            <select>
              <option>Select Envoirnment</option>
              <option value="1">QA</option>
              <option value="2">Prod</option>
              <option value="3">Stage</option>
              <option value="3">Dev</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TopPageForm;
