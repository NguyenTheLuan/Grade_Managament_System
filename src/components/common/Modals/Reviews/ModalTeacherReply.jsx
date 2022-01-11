import userApi from "apis/userApi";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalTeacherReply({ show, onShow, info }) {
  const [content, setContent] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    if (!info) return;
    const { _id } = info;
    setId(_id);
  }, [info]);

  const handleClose = () => {
    onShow(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postReplyReview();
    onShow(!show);
  };

  const postReplyReview = async () => {
    const params = {
      content: content,
      id: id,
    };
    try {
      await userApi.post_ReplyReview(params);
      toast.success("Trả lời phản hồi thành công", {
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
        <Modal.Title>Trả lời yêu cầu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nội dung(*)</Form.Label>
            <Form.Control
              required
              as="textarea"
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Trả lời phản hồi
          </Button>
          <Button variant="secondary" onClick={() => handleClose()}>
            Hủy
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalTeacherReply;
