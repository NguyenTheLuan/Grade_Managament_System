import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";

function AdminDashBoard() {
  useEffect(() => {
    handleShow();
  }, []);
  //Get item'st show
  const handleShow = () => {
    return localStorage.getItem("showItem")
      ? localStorage.getItem("showItem")
      : 0;
  };
  return (
    <div className="dashBoard">
      {/* Link for routes */}
      <div className="linkPage">
        <Accordion
          defaultActiveKey={handleShow}
          onSelect={(e) => localStorage.setItem("showItem", e)}
        >
          <Accordion.Item className="userDashBoardTitle">
            <AiOutlineUser className="iconDashBoard" />
            ADMIN HOME
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Quản lý trang cá nhân</Accordion.Header>
            <Accordion.Body>
              <NavLink to="my_info">Thông tin cá nhân</NavLink>
            </Accordion.Body>
            <Accordion.Body>
              <NavLink to="change_password">Đổi mật khẩu</NavLink>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Lớp học đã tham gia</Accordion.Header>
            <Accordion.Body>
              <NavLink to="courses">Lớp học của tôi</NavLink>
            </Accordion.Body>
            <Accordion.Body>
              <NavLink to="course_create">Tạo lớp học mới</NavLink>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="contentPage">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashBoard;