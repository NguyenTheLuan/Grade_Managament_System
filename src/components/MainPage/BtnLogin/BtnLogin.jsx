import authApi from "apis/authApi";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isLogin, isSuccess, selectRole } from "reducers/authSlice";
import { selectUserInfo } from "reducers/userSlice";

function BtnLogin() {
  const checkLogin = useSelector(selectRole);
  const getName = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    const params = {
      access_token: JSON.parse(localStorage.getItem("access_token")),
    };
    try {
      await authApi.postLogout(params);
      localStorage.clear();
      dispatch(isLogin(null));
      navigate("/login");
      toast.success("Đăng xuất thành công", { position: "bottom-right" });
    } catch (error) {
      dispatch(isSuccess());
      console.log("đăng xuất lỗi rồi", { error });
      toast.warn(`${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
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
