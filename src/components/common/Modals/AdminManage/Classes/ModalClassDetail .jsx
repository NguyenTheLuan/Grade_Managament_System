import { checkActive, checkComplete, checkInfo } from "components/common";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

function ModalClassDetail({ show, onShow, info }) {
  const [classInfo, setClassInfo] = useState();

  useEffect(() => {
    if (!info) return;
    setClassInfo([info]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  const handleClose = () => {
    onShow(!show);
  };

  const renderClassInfo = classInfo?.map((classInfo, index) => {
    return (
      <ul key={index}>
        <li>
          Mã lớp: <strong>{classInfo.code}</strong>
        </li>
        <li>
          Trạng thái: <strong>{checkActive(classInfo.active)}</strong>
        </li>
        <li>
          Tên lớp: <strong>{classInfo.name}</strong>
        </li>
        <li>
          Tên giảng viên: <strong>{classInfo.teacher}</strong>
        </li>
        <li>
          Số điện thoại: <strong>{checkInfo(classInfo.phone)}</strong>
        </li>
        <li>
          Hoàn thành: <strong>{checkComplete(classInfo.complete)}</strong>
        </li>
      </ul>
    );
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Thông tin chi tiết lớp học </Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderClassInfo}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalClassDetail;
