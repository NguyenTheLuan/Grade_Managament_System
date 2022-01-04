import userApi from "apis/userApi";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalUploadClass({ show, onShow, infoClass }) {
  const [file, setFile] = useState(null);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [active, setActive] = useState();
  const [code, setCode] = useState(null);

  useEffect(() => {
    if (!infoClass) return;
    const { name, phone, active, code } = infoClass;
    setName(name);
    setPhone(phone);
    setActive(active);
    setCode(code);
  }, [infoClass]);

  const handleClose = () => {
    onShow(!show);
  };

  const handleImgPost = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("code", code);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("active", active);

    try {
      const response = await userApi.post_updateClass(formData);
      toast.success(`${response.message}`, { position: "bottom-right" });
      onShow(!show);
    } catch (error) {
      console.log("lỗi rồi", { error });
      toast.warning(`${error.response.data.message}`, {
        position: "bottom-right",
      });
      onShow(!show);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật danh sách học viên</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Tên lớp học</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Thông tin lớp</Form.Label>
            <Form.Control type="file" onChange={handleImgPost} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Trạng thái</Form.Label>
            <Form.Select
              value={active}
              onChange={(e) => setActive(e.target.value)}
            >
              <option value="true">Mở lớp</option>
              <option value="false">Khóa lớp</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => handleUpload()}>
          Cập nhật
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUploadClass;
