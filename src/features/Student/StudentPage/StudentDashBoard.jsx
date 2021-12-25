import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import "./DashBoard.scss";

function StudentDashBoard() {
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
            STUDENT HOME
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Quản lý trang cá nhân</Accordion.Header>
            <Accordion.Body>
              <NavLink to="my_info">Thông tin cá nhân</NavLink>
            </Accordion.Body>
            <Accordion.Body>
              <NavLink to="scored_records">Xem điểm</NavLink>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Lớp học đã tham gia</Accordion.Header>
            <Accordion.Body>
              <NavLink to="courses">Lớp học của tôi</NavLink>
            </Accordion.Body>
            <Accordion.Body>
              <NavLink to="course_join">Tham gia lớp học</NavLink>
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

export default StudentDashBoard;
