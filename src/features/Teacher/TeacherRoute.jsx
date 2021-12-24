import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectRole } from "reducers/authSlice";

function TeacherRoute() {
  const isTeacher = useSelector(selectRole);

  return <>{isTeacher === "teacher" ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default TeacherRoute;
