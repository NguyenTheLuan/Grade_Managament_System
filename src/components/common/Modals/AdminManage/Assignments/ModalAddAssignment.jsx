import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ModalAddAssignment({ show, onShow }) {
  const { id } = useParams();
  const [structGrade, setStructGrade] = useState(null);
  const [name, setName] = useState(null);
  const [pending, setPending] = useState(null);
  const [expired, setExpired] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const handleClose = () => {
    onShow(!show);
  };
  const handleImgPost = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = async () => {
    await addNewStruct();
    onShow(!show);
  };

  const addNewStruct = async () => {
    try {
      await userApi.post_TeacherAssignmentsAdd();
      toast.success("Thêm thành công", { position: "bottom-right" });
    } catch (error) {
      console.log("lỗi rồi", { error });
      toast.warning(`${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm bài tập mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Tên bài tập</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tên cột điểm</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) => setExpired(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ngày bắt đầu</Form.Label>
            <Form.Control
              type="date"
              required
              onChange={(e) => setPending(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ngày kết thúc</Form.Label>
            <Form.Control
              type="date"
              required
              onChange={(e) => setExpired(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Bài tập</Form.Label>
            <Form.Control type="file" required onChange={handleImgPost} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => handleAdd()}>
          Thêm mới
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAddAssignment;
