import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
//css
import "style/FormInput.scss";

function ModalStudentPostReview({ show, onShow }) {
  const { id } = useParams();

  const [assignments, setAssignments] = useState([]);

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [assignmentCode, setAssignmentCode] = useState();

  useEffect(() => {
    getAssignments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAssignments = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_MyAssignments(params);
      const { result } = response;
      setAssignments(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderAssignmentCode = assignments?.map((assignment, index) => {
    return (
      <option value={assignment.code} key={index}>
        {assignment.name}
      </option>
    );
  });

  const handleClose = () => {
    onShow(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postReview();
    onShow(!show);
  };

  const postReview = async () => {
    const params = {
      assignmentCode: assignmentCode,
      title: title,
      content: content,
    };
    try {
      const response = await userApi.post_CreateReview(params);
      console.log(response);
      toast.success("Gửi thông tin yêu cầu hỗ trợ thành công", {
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
      <Modal.Header closeButton>
        <Modal.Title>Gửi yêu cầu mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="formInput">
          <Form.Group className="formInput_group">
            <Form.Label className="formInput_group_label">
              Tên bài tập(*)
            </Form.Label>
            <Form.Select
              className="formInput_group_control"
              required
              onChange={(e) => setAssignmentCode(e.target.value)}
            >
              <option>Chọn bài tập</option>
              {renderAssignmentCode}
            </Form.Select>
          </Form.Group>
          <Form.Group className="formInput_group">
            <Form.Label className="formInput_group_label">
              Tiêu đề(*)
            </Form.Label>
            <Form.Control
              className="formInput_group_control"
              required
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="formInput_group">
            <Form.Label className="formInput_group_label">
              Nội dung(*)
            </Form.Label>
            <Form.Control
              className="formInput_group_control"
              required
              as="textarea"
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="formInput_group">
            <Button variant="success" type="submit">
              Gửi yêu cầu
            </Button>
            <Button variant="secondary" onClick={() => handleClose()}>
              Đóng
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalStudentPostReview;
