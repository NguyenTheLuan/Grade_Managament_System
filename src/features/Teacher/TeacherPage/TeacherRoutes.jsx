import { renderRoute } from "components/common";
import { TEACHER_ROUTE } from "constant";
import React from "react";
import { Route, Routes } from "react-router-dom";
import TeacherDashBoard from "./TeacherDashBoard";

function TeacherRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TeacherDashBoard />}>
          {renderRoute(TEACHER_ROUTE)}
        </Route>
      </Routes>
    </>
  );
}

export default TeacherRoutes;
