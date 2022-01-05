import adminApi from "apis/adminApi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function ModalTeacherDetails({ show, onShow, teacherDetail }) {
  const [teacherInfo, setTeacherInfo] = useState();

  useEffect(() => {
    if (!teacherDetail) return;
    setTeacherInfo(teacherDetail);
    // console.log(teacherDetail);
    // getInfoTeacher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacherDetail]);

  const getInfoTeacher = async () => {
    const id = teacherInfo?.accountId?._id;
    try {
      const response = await adminApi.get_TeacherId(id);
      console.log("lấyy được thông tin rồi", response);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const handleClose = () => {
    onShow(!show);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Thông tin chi tiết</Modal.Title>
      </Modal.Header>
      <Modal.Body>fsadsads</Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
      Đóng
    </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalTeacherDetails;
