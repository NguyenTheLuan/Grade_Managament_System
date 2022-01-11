import userApi from "apis/userApi";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalTeacherCompleteReview({ show, onShow, info }) {
  const [id, setId] = useState();

  useEffect(() => {
    if (!info) return;
    const { _id } = info;
    setId(_id);
  }, [info]);

  const handleCompleteReview = async () => {
    const params = { id: id };
    try {
      await userApi.post_CompleteReview(params);
      toast.success("Kết thúc hỗ trợ hoàn tất", {
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
        <Modal.Title>Hoàn tất hỗ trợ {info?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Bạn có chắc đã hỗ trợ hoàn tất??, hãy bấm vào nút xác nhận
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
            handleCompleteReview();
          }}
        >
          Xác nhận
        </Button>
        <Button variant="secondary" onClick={() => handleClose()}>
          Hủy
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalTeacherCompleteReview;
