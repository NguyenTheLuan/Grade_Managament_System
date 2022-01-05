import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ModalTeacherCreate({ show, onShow }) {
  //info to create
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();

  const handleClose = () => {
    onShow(!show);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Cập nhật thông tin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
            <Form.Label>Giới tính</Form.Label>
            <Form.Select>
              <option>Chọn giới tính</option>
              <option value="true">Nam</option>
              <option value="false">Nữ</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Tạo tài khoản mới
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalTeacherCreate;
