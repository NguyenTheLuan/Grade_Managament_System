import adminApi from "apis/adminApi";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
//css
import "style/FormInput.scss";

function ModalClassUpdate({ show, onShow, info }) {
  const [code, setCode] = useState();
  const [active, setActive] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    if (!info) return;
    const { active, name, code } = info;
    setCode(code);
    setActive(active);
    setName(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  const handleClose = () => {
    onShow(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateInfoClass();
    onShow(!show);
  };

  const updateInfoClass = async () => {
    const params = { active: active, name: name };
    try {
      await adminApi.post_ClassesUpdate(code, params);
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
        <Modal.Title>Thông tin chi tiết lớp học </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="formInput">
          <Form.Group className="formInput_group">
            <Form.Label className="formInput_group_label">Tên lớp</Form.Label>
            <Form.Control
              className="formInput_group_control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="formInput_group">
            <Form.Label className="formInput_group_label">
              Trạng thái
            </Form.Label>
            <Form.Select
              className="formInput_group_control"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            >
              <option value="true">Mở khóa lớp</option>
              <option value="false">Khóa lớp</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="formInput_group">
            <Button type="submit">Cập nhật thông tin</Button>
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

export default ModalClassUpdate;
