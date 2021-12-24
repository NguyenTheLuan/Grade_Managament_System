import authApi from "apis/authApi";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { isPending, isSuccess } from "reducers/authSlice";
import "./Form.scss";

function Register() {
  const dispatch = useDispatch();

  //account
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConFirm, setPasswordConFirm] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  //info user
  const [fullName, setFullName] = useState("");
  const [birthday, setBirthday] = useState("");
  //true is boy, false is girl
  const [gender, setGender] = useState(true);
  const [phone, setPhone] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(
    //   "thông tin sẽ đăng ký",
    //   email,
    //   password,
    //   passwordConFirm,
    //   verifyCode,
    //   birthday,
    //   gender,
    //   phone
    // );
    await handleRegister();
  };

  const handleRegister = async () => {
    if (password !== passwordConFirm) {
      toast.warn("Mật khẩu xác nhận không chính xác", {
        position: "bottom-right",
      });
      return;
    }

    const params = {
      email: email,
      password: password,
      verifyCode: verifyCode,
      fullName: fullName,
    };
    dispatch(isPending());
    try {
      await authApi.postRegister(params);
      // const response = await authApi.postRegister(params);
      // console.log(response);
      dispatch(isSuccess());
      toast.success("Đăng ký tài khoản thành công", {
        position: "bottom-right",
      });
    } catch (error) {
      console.log("lỗi rồi", { error });
      dispatch(isSuccess());
      toast.warn(`${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
  };

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
      // console.log("đăng ký lỗi rồi", { error });
      error.response.data.message
        ? toast.warn(`${error.response.data.message}`, {
            position: "bottom-right",
          })
        : toast.warn("Email không hợp lệ", {
            position: "bottom-right",
          });
    }
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="infoAccount">
        <legend className="form_title">Đăng ký tài khoản</legend>
        <Form.Group className="formGroup">
          <Form.Control
            name="email"
            className="formGroup_control"
            type="email"
            placeholder="Email"
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
            name="password"
            className="formGroup_control"
            type="password"
            placeholder="Mật khẩu"
            onChange={(e) => setPasswordConFirm(e.target.value)}
            required={true}
          />
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Control
            name="password"
            className="formGroup_control"
            type="password"
            placeholder="Xác nhận mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </Form.Group>
      </div>
      <div className="infoUser">
        <legend className="form_title">Thông tin người dùng</legend>
        <Form.Group className="formGroup">
          <Form.Control
            name="fullName"
            className="formGroup_control"
            type="text"
            placeholder="Họ và tên"
            onChange={(e) => setFullName(e.target.value)}
            required={true}
          />
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Control
            name="phone"
            className="formGroup_control"
            type="text"
            placeholder="Số điện thoại"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Label className="formGroup_label">Ngày sinh nhật</Form.Label>
          <Form.Control
            name="birthday"
            className="formGroup_control"
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="formGroup">
          <Form.Label className="formGroup_label">Giới tính</Form.Label>
          <Form.Select
            name="gender"
            className="formGroup_control"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value={true}>Nam</option>
            <option value={false}>Nữ</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="infoHandle">
        <Button variant="success" className="btnRegister" type="submit">
          Đăng ký tài khoản
        </Button>
        <Link to="/login" className="new_account">
          Quay trở lại đăng nhập?
        </Link>
      </div>
    </Form>
  );
}

export default Register;
