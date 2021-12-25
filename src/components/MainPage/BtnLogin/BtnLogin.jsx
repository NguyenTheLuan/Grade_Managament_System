import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isLogin, selectRole } from "reducers/authSlice";
import { selectUserInfo } from "reducers/userSlice";

function BtnLogin() {
  const checkLogin = useSelector(selectRole);
  const getName = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    // console.log("tiến thành logout");
    localStorage.clear();
    dispatch(isLogin(null));
    navigate("/login");
    toast.success("Đăng xuất thành công", { position: "bottom-right" });
  };

  return (
    <>
      {!checkLogin ? (
        <Button variant="primary" onClick={goToLogin}>
          Đăng nhập
        </Button>
      ) : (
        <>
          <span style={{ paddingRight: "10px" }}>{getName?.fullName}</span>
          <Button variant="danger" onClick={handleLogout}>
            Đăng xuất
          </Button>
        </>
      )}
    </>
  );
}

export default BtnLogin;
