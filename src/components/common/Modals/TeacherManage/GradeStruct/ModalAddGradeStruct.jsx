import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ModalAddGradeStruct({ show, onShow }) {
  const { id } = useParams();
  const [structName, setStructName] = useState(null);
  const [percent, setPercent] = useState(null);
  const [total, setTotal] = useState(null);

  const handleClose = () => {
    onShow(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = async () => {
    await addNewStruct();
    onShow(!show);
  };

  const addNewStruct = async () => {
    const params = {
      classCode: id,
      structName: structName,
      percent: percent,
      total: total,
    };
    try {
      await userApi.post_TeacherGradeStructAdd(params);
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
        <Modal.Title>Thêm cột điểm mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Tên cột điểm</Form.Label>
            <Form.Control
              type="text"
              name="structName"
              required
              onChange={(e) => setStructName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hệ số (%)</Form.Label>
            <Form.Control
              type="number"
              required
              name="percent"
              min="0"
              onChange={(e) => setPercent(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Điểm tối đa</Form.Label>
            <Form.Control
              type="number"
              required
              min="0"
              name="total"
              onChange={(e) => setTotal(e.target.value)}
            />
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

export default ModalAddGradeStruct;
