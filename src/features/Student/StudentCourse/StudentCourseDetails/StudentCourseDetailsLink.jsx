import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "style/CourseDetail.scss";

function StudentCourseDetailsLink() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/student/courses");
  };
  return (
    <div className="contentDetails">
      <div className="contentDetails_link">
        {/* <Link to="/student/courses">Trở lại</Link> */}
        <MdOutlineArrowBack className="icon" onClick={() => handleBack()} />
        <NavLink to="details">Thông tin lớp</NavLink>
        <NavLink to="assigments">Danh sách bài tập</NavLink>
        <NavLink to="scored">Điểm của tôi</NavLink>
        <NavLink to="review">Hỗ trợ</NavLink>
      </div>
      <div className="contentDetails_content">
        <Outlet />
      </div>
    </div>
  );
}

export default StudentCourseDetailsLink;
