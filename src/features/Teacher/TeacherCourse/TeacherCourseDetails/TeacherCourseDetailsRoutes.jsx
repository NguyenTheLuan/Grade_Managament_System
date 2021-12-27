import { renderRoute } from "components/common";
import { DETAIL_COURSE } from "constant";
import React from "react";
import { Route, Routes } from "react-router-dom";
import TeacherCourseDetailsLink from "./TeacherCourseDetailsLink";

function TeacherCourseDetailsRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TeacherCourseDetailsLink />}>
          {renderRoute(DETAIL_COURSE.ADMIN)}
        </Route>
      </Routes>
    </>
  );
}

export default TeacherCourseDetailsRoutes;
