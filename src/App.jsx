import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./config";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </Router>
  )
}

export default App
