import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectRole } from "reducers/authSlice";

function AdminAuth() {
  const isAdmin = useSelector(selectRole);

  return (
    <>{isAdmin === "admin" ? <Outlet /> : <Navigate to="/admin/login" />}</>
  );
}

export default AdminAuth;
