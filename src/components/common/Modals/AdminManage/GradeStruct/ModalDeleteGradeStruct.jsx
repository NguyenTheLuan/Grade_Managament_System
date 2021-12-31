import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalDeleteGradeStruct({ show, onShow, gradeStruct }) {
  const [code, setCode] = useState("");
  const [structName, setStructName] = useState("");

  useEffect(() => {
    if (!gradeStruct) return;
    const { code, structName } = gradeStruct;
    setCode(code);
    setStructName(structName);
  }, [gradeStruct]);

  const handleClose = () => {
    onShow(!show);
  };

  const handleDelete = async () => {
    await deleteStruct();
    onShow(!show);
  };

  const deleteStruct = async () => {
    const params = { code: code };
    try {
      const response = await userApi.post_TeacherGradeStructDelete(params);
      console.log(response);
      toast.success("Xóa thành công", { position: "bottom-right" });
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
        <Modal.Title>Tiến thành xóa cột điểm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Bạn có chắc chắn xóa <strong>điểm {structName}</strong> không?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => handleDelete()}>
          Xoá cột điểm
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Quay lại
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeleteGradeStruct;
