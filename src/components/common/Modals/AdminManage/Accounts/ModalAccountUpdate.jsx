import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalAccountUpdate({ show, onShow, info }) {
  const [accountInfo, setAccountInfo] = useState();

  useEffect(() => {
    if (!info) return;
    setAccountInfo([info]);
    console.log(info);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  const handleClose = () => {
    onShow(!show);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Đổi mật khẩu {info?.email} </Modal.Title>
      </Modal.Header>
      <Modal.Body>Tiến thành đổi mật khẩu, bạn có chắc không?</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Đổi mật khẩu
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAccountUpdate;
