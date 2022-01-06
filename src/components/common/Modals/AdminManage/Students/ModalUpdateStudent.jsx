import adminApi from "apis/adminApi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalUpdateStudent({ show, onShow, studentDetail }) {
  //info to updae
  const [id, setId] = useState();
  const [fullName, setFullName] = useState();
  const [studentId, setStudentId] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    if (!studentDetail) return;
    const { fullName, birthday, gender, phone, accountId, studentId } =
      studentDetail;
    setId(accountId._id);

    setStudentId(studentId);
    setFullName(fullName);
    setBirthday(birthday);
    setGender(gender);
    setPhone(phone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentDetail]);

  const handleClose = () => {
    onShow(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateInfo();
    onShow(!show);
  };

  const updateInfo = async () => {
    const params = {
      fullName: fullName,
      studentId: studentId,
      birthday: birthday,
      gender: gender,
      phone: phone,
    };
    try {
      await adminApi.post_UpdateStudentId(id, params);
      toast.success("Cập nhật thông tin thành công", {
        position: "bottom-right",
      });
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
        <Modal.Title>Cập nhật thông tin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Mã học viên</Form.Label>
            <Form.Control
              value={studentId}
              type="text"
              onChange={(e) => setStudentId(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tên học viên</Form.Label>
            <Form.Control
              value={fullName}
              type="text"
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
          <Button variant="success" type="submit">
            Cập nhật
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateStudent;
