import authApi from "apis/authApi";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { isPending, isSuccess } from "reducers/authSlice";
import "./Form.scss";

function ForgotPassword() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const getCodeVerify = async () => {
    if (!email) {
      toast.warn("Hãy nhập email", { position: "bottom-right" });
      return;
    }
    const params = { email: email };
    dispatch(isPending());
    try {
      await authApi.postVerifyEmail(params);
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
  return (
    <Form className="form forgot_passwordFrom">
      <div className="infoAccount">
        <legend className="form_title">Lấy lại mật khẩu</legend>
        <Form.Group className="formGroup">
          <Form.Control
            className="formGroup_control"
            type="email"
            placeholder="Nhập địa chỉ email"
            required={true}
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
      </div>
      <div className="infoHandle">
        <Form.Group className="formGroup">
          <Button className="formGroup_button" variant="primary" type="submit">
            Lấy lại mật khẩu
          </Button>
        </Form.Group>
        <Form.Group className="formGroup">
          <Link to="/login" className="new_account">
            Quay trở lại đăng nhập?
          </Link>
        </Form.Group>
      </div>
    </Form>
  );
}

export default ForgotPassword;
