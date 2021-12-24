import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectRole } from "reducers/authSlice";

function Auth() {
  const isRole = useSelector(selectRole);
  return <>{isRole ? <Navigate to={`/${isRole}`} /> : <Outlet />}</>;
}

export default Auth;
