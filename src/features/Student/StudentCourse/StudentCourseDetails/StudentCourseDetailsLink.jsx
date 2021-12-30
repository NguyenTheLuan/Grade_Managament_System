import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "style/CourseDetail.scss";
function StudentCourseDetailsLink() {
  return (
    <div className="contentDetails">
      <div className="contentDetails_link">
        <Link to="/student/courses">Trở lại</Link>
        <NavLink to="details">Thông tin lớp</NavLink>
        <NavLink to="scored">Điểm của tôi</NavLink>
      </div>
      <div className="contentDetails_content">
        <Outlet />
      </div>
    </div>
  );
}

export default StudentCourseDetailsLink;
