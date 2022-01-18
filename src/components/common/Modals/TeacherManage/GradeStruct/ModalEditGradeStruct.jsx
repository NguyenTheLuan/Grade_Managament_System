import userApi from "apis/userApi";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalEditGradeStruct({ show, onShow, gradeStruct }) {
  const [code, setCode] = useState("");
  const [structName, setStructName] = useState("");
  const [percent, setPercent] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    if (!gradeStruct) return;
    const { code, structName, percent, total } = gradeStruct;
    setCode(code);
    setStructName(structName);
    setPercent(percent);
    setTotal(total);
  }, [gradeStruct]);

  const handleClose = () => {
    onShow(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEdit = async () => {
    await updateStruct();
    onShow(!show);
  };

  const updateStruct = async () => {
    const params = {
      code: code,
      structName: structName,
      percent: percent,
      total: total,
    };
    try {
      await userApi.post_TeacherGradeStructEdit(params);
      toast.success("Sửa thành công", { position: "bottom-right" });
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
        <Modal.Title>Chỉnh sửa cấu trúc điểm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Tên cột điểm</Form.Label>
            <Form.Control
              value={structName}
              type="text"
              onChange={(e) => setStructName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hệ số (%)</Form.Label>
            <Form.Control
              value={percent}
              type="number"
              name="percent"
              min="0"
              onChange={(e) => setPercent(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Điểm tối đa</Form.Label>
            <Form.Control
              value={total}
              min="0"
              type="number"
              name="total"
              onChange={(e) => setTotal(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" onClick={() => handleEdit()}>
          Chỉnh sửa
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditGradeStruct;
