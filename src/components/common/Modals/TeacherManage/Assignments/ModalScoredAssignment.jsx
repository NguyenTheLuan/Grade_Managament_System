import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ModalScoredAssignment({ show, onShow, assignment_info }) {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    if (!assignment_info) return;
    setCode(assignment_info.code);
  }, [assignment_info]);

  const handleClose = () => {
    onShow(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleImgPost = (e) => {
    setFile(e.target.files[0]);
  };
  const handleAdd = async () => {
    await submitScored();
    onShow(!show);
  };
  const submitScored = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("classCode", id);
    formData.append("code", code);

    try {
      await userApi.post_TeacherAssignmentsGradeScored(formData);
      toast.success("Chấm điểm thành công", { position: "bottom-right" });
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
        <Modal.Title>Nhập điểm {assignment_info?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Điểm bài tập</Form.Label>
            <Form.Control type="file" onChange={handleImgPost} required />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" onClick={() => handleAdd()}>
          Tiến thành nhập điểm
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalScoredAssignment;
