import userApi from "apis/userApi";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "style/FormInput.scss";

function StudentCourseJoin({ show, onShow }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const code = e.target.name.value;
    joinNewClass(code);
  };

  const joinNewClass = async (code) => {
    const params = {
      code: code,
    };
    try {
      const response = await userApi.join_newClass(params);
      toast.success(`${response.message}`, {
        position: "bottom-right",
      });
      onShow(!show);
    } catch (error) {
      console.log("lỗi rồi", { error });
      toast.warn(`${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
  };

  const handleClose = () => {
    onShow(!show);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tham gia lớp mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="formInput">
          <Form.Group className="formInput_group">
            <Form.Control
              className="formInput_group_control"
              name="name"
              type="text"
              placeholder="Nhập mã lớp"
              required={true}
            />
          </Form.Group>
          <Form.Group className="formInput_group">
            <Button className="formInput_group_button" type="submit">
              Tham gia lớp mới
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

export default StudentCourseJoin;
