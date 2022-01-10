import React from "react";
import { Accordion } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
//icons
import { AiOutlineUser } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { BsPersonSquare } from "react-icons/bs";
function TeacherDashBoard() {
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
            {/* <AiOutlineUser className="iconDashBoard" /> */}
            TEACHER HOME
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <BsPersonSquare className="icons" />
              Quản lý trang cá nhân
            </Accordion.Header>
            <Accordion.Body>
              <NavLink to="my_info">Thông tin cá nhân</NavLink>
            </Accordion.Body>
            <Accordion.Body>
              <NavLink to="change_password">Đổi mật khẩu</NavLink>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <GiTeacher className="icons" />
              Lớp học đã tham gia
            </Accordion.Header>
            <Accordion.Body>
              <NavLink to="courses">Lớp học của tôi</NavLink>
            </Accordion.Body>
            {/* <Accordion.Body>
              <NavLink to="course_create">Tạo lớp học mới</NavLink>
            </Accordion.Body> */}
          </Accordion.Item>
          {/* <Accordion.Item eventKey="2">
            <Accordion.Header>Hòm thư hỗ trợ</Accordion.Header>
            <Accordion.Body>
              <NavLink to="review">Danh sách yêu cầu</NavLink>
            </Accordion.Body>
          </Accordion.Item> */}
        </Accordion>
      </div>
      <div className="contentPage">
        <Outlet />
      </div>
    </div>
  );
}

export default TeacherDashBoard;
