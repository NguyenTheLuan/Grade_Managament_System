import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function StudentPage() {
  return (
    <div>
      <div className="linkPage">
        <NavLink to="/student/my_info">Thông tin cá nhân</NavLink>
        <NavLink to="/student/courses">Lớp học của tôi</NavLink>
      </div>
      <div className="contentPage">
        <Outlet />
      </div>
    </div>
  );
}

export default StudentPage;
