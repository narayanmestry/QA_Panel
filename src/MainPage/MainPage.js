import "./mainpage.css";
import { Container } from "react-bootstrap";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import TopPageForm from "../TopArea/TopPageForm";
import TestCaseDisplay from "../BottomArea/TestCaseDisplay";
import Header from "../Header/Header";

function MainPage() {
  return (
    <Container fluid>
      <Header />
      <TopPageForm />
      <br />
      <TestCaseDisplay />
    </Container>
  );
}

export default MainPage;
