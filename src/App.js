import React from "react";
import MainPage from "./MainPage/MainPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QaReport from "./Header/QaReport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/qareport" element={<QaReport />} />
      </Routes>
    </Router>
  );
}

export default App;
