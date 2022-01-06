import adminApi from "apis/adminApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalAccountUpdate({ show, onShow, info }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (!info) return;
    const { email } = info;
    setEmail(email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  const handleClose = () => {
    onShow(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await changePassword();
    onShow(!show);
  };

  const changePassword = async () => {
    const params = { email: email, password: password };
    try {
      await adminApi.post_AccountUpdate(params);
      toast.success("Đổi mật khẩu thành công", {
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
        <Modal.Title>Đổi mật khẩu {info?.email} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Địa chỉ email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Button variant="success" type="submit">
              Đổi mật khẩu
            </Button>
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

export default ModalAccountUpdate;
