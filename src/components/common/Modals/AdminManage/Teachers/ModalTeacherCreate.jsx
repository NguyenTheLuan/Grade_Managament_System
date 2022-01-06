import adminApi from "apis/adminApi";
import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalTeacherCreate({ show, onShow }) {
  //info to create
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState(true);
  const [phone, setPhone] = useState();

  const handleClose = () => {
    onShow(!show);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCreate();
    onShow(!show);
  };

  const handleCreate = async () => {
    const params = {
      email: email,
      password: password,
      fullName: fullName,
      birthday: birthday,
      gender: gender,
      phone: phone,
    };
    try {
      await adminApi.post_CreateTeacher(params);
      toast.success("Tạo thành công", { position: "bottom-right" });
    } catch (error) {
      console.log("lỗi rồi", { error });
      toast.warning(`${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Tạo giảng viên mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập địa chỉ email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tên giảng viên</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Nhập tên giảng viên"
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Giới tính</Form.Label>
            <Form.Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="true">Nam</option>
              <option value="false">Nữ</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Sinh nhật</Form.Label>
            <Form.Control
              type="datetime-local"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập số điện thoại"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Button variant="primary" type="submit">
              Tạo tài khoản mới
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalTeacherCreate;
