import adminApi from "apis/adminApi";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isLogin, isPending, isSuccess } from "reducers/authSlice";
import "./Form.scss";

function AdminLogin() {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    //Get attribute
    e.preventDefault();

    const { userName, password } = e.target;

    //Check !input
    if (!userName.value || !password.value) {
      toast.warning("Xin vui lòng nhập đầy đủ thông tin", {
        position: "bottom-right",
      });
      return;
    }

    await handleLogin(userName.value, password.value);
  };

  const handleLogin = async (userName, password) => {
    //Loading pending
    dispatch(isPending());
    const params = { userName: userName, password: password };
    try {
      const response = await adminApi.postLogin(params);

      console.log(response);
      const { access_token, role } = response;

      //Save in local storage
      localStorage.setItem("access_token", JSON.stringify(access_token));

      //save in redux, loading success
      dispatch(isLogin(role));
      localStorage.setItem("role", JSON.stringify(role));

      // //Redirect to role page
      // redirectRoute(role);
      toast.success("Đăng nhập thành công", {
        position: "bottom-right",
      });
    } catch (error) {
      dispatch(isSuccess());
      toast.warn(`${error.response.data.message}`, {
        position: "bottom-right",
      });
      console.log("Đăng nhập bị lỗi", { error });
    }
  };
  return (
    <Form className="form loginForm" onSubmit={handleSubmit}>
      <div className="infoAccount">
        <legend className="form_title">Trang đăng nhập dành cho admin</legend>
        <Form.Group className="formGroup">
          <Form.Control
            name="userName"
            className="formGroup_control"
            type="text"
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
        </Form.Group>
      </div>
    </Form>
  );
}

export default AdminLogin;
