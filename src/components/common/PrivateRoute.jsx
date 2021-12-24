import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectRole } from "reducers/authSlice";

function PrivateRoute() {
  const isRole = useSelector(selectRole);

  return isRole ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
