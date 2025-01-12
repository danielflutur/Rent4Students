// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1PersonalData from "./Page1PersonalData";
import Page2HousingPreferences from "./Page2HousingPreferences";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1PersonalData />} />
        <Route path="/page-2-housing-preferences" element={<Page2HousingPreferences />} />
      </Routes>
    </Router>
  );
}

export default App;
