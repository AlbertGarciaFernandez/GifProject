import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { useAuth } from "../../firebase/auth";

import Upload from "../../pages/Upload/Upload";

function ProtectedRoutes() {
  // const currentUser = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (currentUser === undefined) navigate("/login");
  // }, [currentUser]);
  return (
    <>
      <Routes>
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default ProtectedRoutes;
