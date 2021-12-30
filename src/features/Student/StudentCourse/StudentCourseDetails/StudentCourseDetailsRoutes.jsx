import { renderRoute } from "components/common";
import { DETAIL_COURSE } from "constant";
import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentCourseDetailsLink from "./StudentCourseDetailsLink";

function StudentCourseDetailsRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentCourseDetailsLink />}>
          {renderRoute(DETAIL_COURSE.STUDENT)}
        </Route>
      </Routes>
    </>
  );
}

export default StudentCourseDetailsRoutes;
