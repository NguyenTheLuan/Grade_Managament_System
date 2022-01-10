import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "style/CourseDetail.scss";
function TeacherCourseDetailsLink() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/teacher/courses");
  };
  return (
    <div className="contentDetails">
      <div className="contentDetails_link">
        {/* <Link to="/teacher/courses">Trở lại</Link> */}
        <MdOutlineArrowBack className="icon" onClick={() => handleBack()} />
        <NavLink to="details">Thông tin lớp</NavLink>
        <NavLink to="grade_structures">Cấu trúc điểm</NavLink>
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
