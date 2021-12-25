import { renderRoute } from "components/common/CustomComponents";
import { STUDENT_ROUTE } from "constant";
import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentDashBoard from "./StudentDashBoard";

function StudentRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentDashBoard />}>
          {renderRoute(STUDENT_ROUTE)}
        </Route>
      </Routes>
    </>
  );
}

export default StudentRoutes;
