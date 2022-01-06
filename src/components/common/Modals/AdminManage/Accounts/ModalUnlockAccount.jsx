import adminApi from "apis/adminApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalUnlockAccount({ show, onShow, info }) {
  const [id, setId] = useState();

  useEffect(() => {
    if (!info) return;
    const { _id } = info;
    setId(_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  const handleUnlock = async () => {
    try {
      await adminApi.post_AccountsUnlock(id);
      toast.success("Mở khóa tài khoản thành công", {
        position: "bottom-right",
      });
      onShow(!show);
    } catch (error) {
      console.log("lỗi rồi", { error });
      toast.warning(`${error.response.data.message}`, {
        position: "bottom-right",
      });
      onShow(!show);
    }
  };

  const handleClose = () => {
    onShow(!show);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Mở tài khoản {info?.email}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Bạn có chắc không??</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleUnlock}>
          Mở khóa tài khoản
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUnlockAccount;
