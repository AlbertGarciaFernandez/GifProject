import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Upload from "./pages/Uploadd.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/navbar/navbar";
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <nav className="nav">
          <div className="nav-brand">Gifone</div>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route element={<Upload />} path="/upload" />
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
