import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

//icons
import { AiOutlineUser } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";

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
            {/* <AiOutlineUser className="iconDashBoard" /> */}
            ADMIN HOME
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <MdManageAccounts className="icons" />
              Quản lý tài khoản
            </Accordion.Header>
            <Accordion.Body>
              <NavLink to="teachers">Tài khoản giáo viên</NavLink>
            </Accordion.Body>
            <Accordion.Body>
              <NavLink to="students">Tài khoản học viên</NavLink>
            </Accordion.Body>
            <Accordion.Body>
              <NavLink to="accounts">Mở - khóa tài khoản</NavLink>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <GiTeacher className="icons" /> Quản lý lớp học
            </Accordion.Header>
            <Accordion.Body>
              <NavLink to="classes">Danh sách các lớp học</NavLink>
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
