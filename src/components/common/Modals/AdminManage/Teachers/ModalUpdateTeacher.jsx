import React from "react";
import adminApi from "apis/adminApi";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
//css
import "style/FormInput.scss";

function ModalUpdateTeacher({ show, onShow, teacherDetail }) {
  //info to updae
  const [id, setId] = useState();
  const [fullName, setFullName] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    if (!teacherDetail) return;
    const { fullName, birthday, gender, phone, accountId } = teacherDetail;

    setId(accountId._id);
    setFullName(fullName);
    setBirthday(birthday);
    setGender(gender);
    setPhone(phone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacherDetail]);

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
      birthday: birthday,
      gender: gender,
      phone: phone,
    };
    try {
      await adminApi.post_UpdateTeacherId(id, params);
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
        <Form onSubmit={handleSubmit} className="formInput">
          <Form.Group className="formInput_group">
            <Form.Label className="formInput_group_label">
              Tên giảng viên
            </Form.Label>
            <Form.Control
              className="formInput_group_control"
              value={fullName}
              type="text"
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="formInput_group">
            <Form.Label className="formInput_group_label">Sinh nhật</Form.Label>
            <Form.Control
              className="formInput_group_control"
              value={birthday}
              type="datetime-local"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="formInput_group">
            <Form.Label className="formInput_group_label">
              Số điện thoại
            </Form.Label>
            <Form.Control
              className="formInput_group_control"
              value={phone}
              type="text"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="formInput_group">
            <Form.Label className="formInput_group_label">Giới tính</Form.Label>
            <Form.Select
              className="formInput_group_control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="true">Nam</option>
              <option value="false">Nữ</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="formInput_group">
            <Button variant="success" type="submit">
              Cập nhật
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

export default ModalUpdateTeacher;
