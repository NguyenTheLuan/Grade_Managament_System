import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalAccountDetail({ show, onShow, info }) {
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
        <Modal.Title>Thông tin chi tiết tài khoản </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalAccountDetail;
