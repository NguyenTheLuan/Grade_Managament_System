import authApi from "apis/authApi";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isLogin, isPending } from "reducers/authSlice";
import SocialFacebookLogin from "../SocialFacebookLogin/SocialFacebookLogin ";
import SocialGoogleLogin from "../SocialGoogleLogin/SocialGoogleLogin";
import "./Form.scss";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Handle Btn Login
  const handleSubmit = async (e) => {
    //Get attribute
    e.preventDefault();

    const { gmail, password } = e.target;

    //Check !input
    if (!gmail.value || !password.value) {
      toast.warning("Xin vui lòng nhập đầy đủ thông tin", {
        position: "bottom-right",
      });
      return;
    }

    await handleLogin(gmail.value, password.value);
    toast.success("Đăng nhập thành công", {
      position: "bottom-right",
    });
  };

  const handleLogin = async (email, password) => {
    //Loading pending
    dispatch(isPending());
    const params = { email: email, password: password };
    try {
      const response = await authApi.postLogin(params);
      const { token, refreshToken, role } = response;
      //Save in local storage
      localStorage.setItem("access_token", JSON.stringify(token));
      localStorage.setItem("refresh_token", JSON.stringify(refreshToken));
      //save in redux, loading success
      dispatch(isLogin(role));
      localStorage.setItem("role", JSON.stringify(role));

      // //Redirect to role page
      // redirectRoute(role);

      // toast.success("Đăng nhập thành công", { position: "bottom-right" });
    } catch (error) {
      console.log("Đăng nhập bị lỗi", { error });
    }
  };
  // const redirectRoute = (role) => {
  //   <Navigate to={`/${role}`} />;
  //   // navigate(`/${role}`);
  // };

  return (
    <Form className="form loginForm" onSubmit={handleSubmit}>
      <div className="infoAccount">
        <legend className="form_title">Đăng nhập tài khoản</legend>
        <Form.Group className="formGroup">
          <Form.Control
            name="gmail"
            className="formGroup_control"
            type="email"
            placeholder="Tài khoản"
            required={true}
          />
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Control
            name="password"
            className="formGroup_control"
            type="password"
            placeholder="Nhập mật khẩu"
            required={true}
          />
        </Form.Group>
      </div>
      <div className="infoHandle">
        <Form.Group className="formGroup">
          <Button className="formGroup_button" type="submit">
            Đăng nhập
          </Button>
          <Link to="/forgot_password" className="forgot_password">
            Lấy lại mật khẩu
          </Link>
        </Form.Group>
        <Form.Group className="formGroup social-link">
          <SocialGoogleLogin />
          <SocialFacebookLogin />
        </Form.Group>
        <Form.Group className="formGroup">
          <Link to="/register" className="new_account">
            Bạn chưa có tài khoản?
          </Link>
        </Form.Group>
      </div>
    </Form>
  );
}

export default Login;
