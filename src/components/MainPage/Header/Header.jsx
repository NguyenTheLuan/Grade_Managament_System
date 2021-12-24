import { MAIN_ROUTE } from "constant";
import React from "react";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import BtnLogin from "../BtnLogin/BtnLogin";
import "./Header.scss";

function Header() {
  //Like as useHistory
  const navigate = useNavigate();

  // const renderLinks = () => {
  //   return MAIN_ROUTE.map((link, index) => {
  //     return (
  //       link.name && (
  //         <NavLink key={index} to={link.path}>
  //           {link.name}
  //         </NavLink>
  //       )
  //     );
  //   });
  // };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="Header">
      <div className="Header_logo" onClick={goToHome}>
        Grade Management System
      </div>
      <div className="Header_links">{/* {renderLinks()} */}</div>
      <div className="Header_btn">
        <BtnLogin />
      </div>
    </div>
  );
}

export default Header;
