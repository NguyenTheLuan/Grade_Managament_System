import { renderDate } from "components/common";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

function ModalDetailAssignment({ show, onShow, assignment_info }) {
  const [detail, setDetail] = useState();

  const handleClose = () => {
    onShow(!show);
  };

  useEffect(() => {
    if (!assignment_info) return;
    setDetail(assignment_info);
  }, [assignment_info]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{detail?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            Mã bài tập <strong> {detail?.code}</strong>
          </div>
          <div>
            Mã hệ điểm <strong>{detail?.structCode}</strong>
          </div>
          <div>
            Trạng thái <strong>{detail?.status}</strong>
          </div>
          <div>
            Ngày bắt đầu <strong>{renderDate(detail?.pending)}</strong>
          </div>
          <div>
            Ngày kết thúc <strong>{renderDate(detail?.expired)}</strong>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetailAssignment;
