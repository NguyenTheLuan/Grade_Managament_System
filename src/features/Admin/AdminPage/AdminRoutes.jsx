import { renderRoute } from "components/common";
import { ADMIN_ROUTE } from "constant";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashBoard from "./AdminDashBoard";

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashBoard />}>
          {renderRoute(ADMIN_ROUTE)}
        </Route>
      </Routes>
    </>
  );
}

export default AdminRoutes;
