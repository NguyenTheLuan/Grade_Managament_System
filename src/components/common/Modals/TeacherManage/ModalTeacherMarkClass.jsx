import userApi from "apis/userApi";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ModalTeacherMarkClass({ show, onShow }) {
  const { id } = useParams();
  const handleClose = () => {
    onShow(!show);
  };

  const handleMark = async () => {
    const params = {
      classCode: id,
    };
    try {
      await userApi.post_TeacherMarkClass(params);
      toast.success("Kết thúc lớp học thành công", {
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

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Kết thúc khóa học</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Bạn có chắc chắn <strong>kết thúc khóa học</strong> và{" "}
        <strong>tổng kết điểm</strong> hay không?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => handleMark()}>
          Đồng ý
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Quay lại
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalTeacherMarkClass;
