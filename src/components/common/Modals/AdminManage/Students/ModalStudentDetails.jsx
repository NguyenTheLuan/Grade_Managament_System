import {
  checkInfo,
  checkRole,
  checkTypeAccount,
  renderDate,
} from "components/common";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalStudentDetails({ show, onShow, studentDetail }) {
  const [studentInfo, setStudentInfo] = useState();

  useEffect(() => {
    if (!studentDetail) return;
    setStudentInfo([studentDetail]);
    console.log(studentInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentDetail]);

  const handleClose = () => {
    onShow(!show);
  };

  const renderStudentInfo = studentInfo?.map((info, index) => {
    return (
      <ul key={index}>
        <li>
          Địa chỉ email: <strong>{info.accountId.email}</strong>
        </li>
        <li>
          Loại tài khoản:
          <strong> {checkTypeAccount(info.accountId.authType)}</strong>
        </li>
        <li>
          Chức vụ:
          <strong> {checkRole(info.accountId.role)}</strong>
        </li>
        <li>
          Mã học viên: <strong>{info.studentId}</strong>
        </li>
        <li>
          Họ và tên: <strong>{info.fullName}</strong>
        </li>
        <li>
          Ngày sinh: <strong>{renderDate(info.birthday)}</strong>
        </li>
        <li>
          Họ và tên: <strong>{info.fullName}</strong>
        </li>
        <li>
          Số điện thoại: <strong>{checkInfo(info.phone)}</strong>
        </li>
      </ul>
    );
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Thông tin chi tiết</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderStudentInfo}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalStudentDetails;
