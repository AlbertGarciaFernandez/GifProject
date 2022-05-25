import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/navbar/navbar";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import SignUp from "./components/SignUp/SignUp";
import Search from "./pages/Search/Search";
import Upload from "./pages/Upload/Upload";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />

        <Routes>
          <Route element={<ProtectedRoutes />} path="/user/*" />
          <Route element={<Home />} path="/" />
          <Route element={<SignUp />} path="/signUp" />
          <Route element={<Login />} path="/login" />
          <Route element={<Search />} path="/search" />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
