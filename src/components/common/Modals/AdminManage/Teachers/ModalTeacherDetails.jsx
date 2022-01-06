import {
  checkInfo,
  checkRole,
  checkTypeAccount,
  renderDate,
} from "components/common";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

function ModalTeacherDetails({ show, onShow, teacherDetail }) {
  const [teacherInfo, setTeacherInfo] = useState();

  useEffect(() => {
    if (!teacherDetail) return;
    setTeacherInfo([teacherDetail]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacherDetail]);

  const handleClose = () => {
    onShow(!show);
  };

  const renderTeacherInfo = teacherInfo?.map((info, index) => {
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
      <Modal.Body>{renderTeacherInfo}</Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalTeacherDetails;
