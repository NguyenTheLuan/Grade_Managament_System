import userApi from "apis/userApi";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "style/FormInput.scss";

function TeacherCourseCreate({ show, onShow }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameClass = e.target.name.value;
    createNewClass(nameClass);
  };

  const createNewClass = async (name) => {
    const params = { name: name };
    try {
      const response = await userApi.create_newClass(params);

      toast.success(`Tạo lớp mới thành công, mã tham gia là ${response.code}`, {
        position: "bottom-right",
      });
      onShow(!show);
    } catch (error) {
      console.log("lỗi rồi", error);
    }
  };
  const handleClose = () => {
    onShow(!show);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tạo lớp mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="formInput">
          <Form.Group className="formInput_group">
            <Form.Control
              className="formInput_group_control"
              name="name"
              type="text"
              placeholder="Nhập tên lớp"
              required={true}
            />
          </Form.Group>
          <Form.Group className="formInput_group">
            <Button className="formInput_group_button" type="submit">
              Tạo lớp mới
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Đóng lại
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default TeacherCourseCreate;
