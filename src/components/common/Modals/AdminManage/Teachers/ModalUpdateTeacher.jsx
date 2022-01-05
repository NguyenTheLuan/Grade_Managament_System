import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ModalUpdateTeacher({ show, onShow, teacherDetail }) {
  //info to updae
  const [fullName, setFullName] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    if (!teacherDetail) return;
    const { fullName, birthday, gender, phone } = teacherDetail;
    setFullName(fullName);
    setBirthday(birthday);
    setGender(gender);
    setPhone(phone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacherDetail]);

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
            <Form.Label>Tên giảng viên</Form.Label>
            <Form.Control
              value={fullName}
              type="text"
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sinh nhật</Form.Label>
            <Form.Control
              value={birthday}
              type="datetime-local"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              value={phone}
              type="text"
              onChange={(e) => setPhone(e.target.value)}
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Cập nhật
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateTeacher;
