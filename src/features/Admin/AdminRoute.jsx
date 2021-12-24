import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectRole } from "reducers/authSlice";

function AdminRoute() {
  const isAdmin = useSelector(selectRole);

  return <>{isAdmin === "admin" ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default AdminRoute;
