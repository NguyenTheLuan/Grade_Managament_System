import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isLogin, selectRole } from "reducers/authSlice";

function BtnLogin() {
  const checkLogin = useSelector(selectRole);
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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Tên người dùng
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/student/my_info">
                Thông tin cá nhân
              </Dropdown.Item>
              <Dropdown.Item href="/student/courses">
                Khóa học của tôi
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">
                <Button
                  className="btnLogout"
                  variant="danger"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}
    </>
  );
}

export default BtnLogin;
