import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectRole } from "reducers/authSlice";

function StudentAuth() {
  const StudentRoute = useSelector(selectRole);

  return (
    <>{StudentRoute === "student" ? <Outlet /> : <Navigate to="/login" />}</>
  );
}

export default StudentAuth;
