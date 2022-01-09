import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "style/CourseDetail.scss";
function TeacherCourseDetailsLink() {
  return (
    <div className="contentDetails">
      <div className="contentDetails_link">
        <Link to="/teacher/courses">Trở lại</Link>
        <NavLink to="details">Thông tin lớp</NavLink>
        <NavLink to="grade_structures">Quản lý cấu trúc điểm</NavLink>
        <NavLink to="assignments">Quản lý bài tập</NavLink>
        <NavLink to="scored_records">Quản lý điểm</NavLink>
        <NavLink to="review">Hỗ trợ</NavLink>
      </div>
      <div className="contentDetails_content">
        <Outlet />
      </div>
    </div>
  );
}

export default TeacherCourseDetailsLink;
