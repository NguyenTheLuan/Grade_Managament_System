import authApi from "apis/authApi";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isPending, isSuccess } from "reducers/authSlice";

function ChangePassword() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  //Password
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const getCodeVerify = async () => {
    if (!email) {
      toast.warn("Hãy nhập email", { position: "bottom-right" });
      return;
    }
    const params = { email: email };
    dispatch(isPending());
    try {
      await authApi.postVerifyEmailForgotPassword(params);
      dispatch(isSuccess());
      toast.success("Gửi mã xác thực thành công!, hãy kiểm tra email");
    } catch (error) {
      dispatch(isSuccess());
      console.log("đăng ký lỗi rồi", { error });
      toast.warn(`${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.warn("Mật khẩu xác nhận không chính xác", {
        position: "bottom-right",
      });
      return;
    }
  };

  const updatePassword = async () => {
    const params = {
      email: email,
      password: password,
      verifyCode: verifyCode.trim(),
    };
    dispatch(isPending());
    try {
      await authApi.postChangePassword(params);
      dispatch(isSuccess());
      // console.log("thành công", response);
      toast.success("Cập nhật mật khẩu thành công", {
        position: "bottom-right",
      });
    } catch (error) {
      dispatch(isSuccess());
      toast.warn(`${error.response.data.message}`, {
        position: "bottom-right",
      });
      // console.log("lỗi rồi", { error });
    }
  };
  return (
    <Form className="form forgot_passwordFrom" onSubmit={handleSubmit}>
      <div className="infoAccount">
        <legend className="form_title">Thay đổi mật khẩu</legend>
        <Form.Group className="formGroup">
          <Form.Control
            className="formGroup_control"
            type="email"
            placeholder="Nhập địa chỉ email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Control
            name="verifyCode "
            className="formGroup_control"
            type="text"
            placeholder="Nhập mã xác nhận email"
            onChange={(e) => setVerifyCode(e.target.value)}
            required={true}
          />
          <Button variant="danger" onClick={getCodeVerify}>
            Lấy mã
          </Button>
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Control
            className="formGroup_control"
            type="password"
            placeholder="Nhập mật khẩu mới"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Control
            className="formGroup_control"
            type="password"
            placeholder="Xác nhận mật khẩu mới"
            required={true}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </Form.Group>
      </div>
      <div className="infoHandle">
        <Form.Group className="formGroup">
          <Button
            className="formGroup_button"
            variant="primary"
            type="submit"
            onClick={updatePassword}
          >
            Thay đổi mật khẩu
          </Button>
        </Form.Group>
      </div>
    </Form>
  );
}

export default ChangePassword;
