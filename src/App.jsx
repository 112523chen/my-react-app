import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/recent_project" element={<Project />} />
        </Routes>
    </Router>
  )
}

export default App
