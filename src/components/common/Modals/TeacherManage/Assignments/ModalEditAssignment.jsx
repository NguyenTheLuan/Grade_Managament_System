/* eslint-disable react-hooks/exhaustive-deps */
import userApi from "apis/userApi";
import { toDatetimeLocal } from "components/common";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ModalEditAssignment({ show, onShow, assignment_info }) {
  //List Grade Struct
  const { id } = useParams();
  const [grades, setGrades] = useState();

  //Info to edit assignment
  const [code, setCode] = useState();
  const [structGrade, setStructGrade] = useState();
  const [status, setStatus] = useState();
  const [name, setName] = useState();
  const [pending, setPending] = useState();
  const [expired, setExpired] = useState();
  const [file, setFile] = useState(null);

  //to render info view
  useEffect(() => {
    if (!assignment_info) return;
    const { code, name, pending, expired, structCode, status } =
      assignment_info;
    setStatus(status);
    setCode(code);
    setName(name);
    setStructGrade(structCode);
    setPending(toDatetimeLocal(pending));
    setExpired(toDatetimeLocal(expired));
  }, [assignment_info]);

  //to render select
  useEffect(() => {
    getGradeStruct();
  }, []);

  const getGradeStruct = async () => {
    try {
      const response = await userApi.get_myClassDetail(id);
      const { gradeStruct } = response;
      setGrades(gradeStruct);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  //Render select grate struct
  const renderSelectGrade = grades?.map((grade, index) => {
    return (
      <option key={index} value={grade.code}>
        {grade.structName}
      </option>
    );
  });

  const handleImgPost = (e) => {
    setFile(e.target.files[0]);
  };
  const handleClose = () => {
    onShow(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUpdate = async () => {
    await editAssignment();
    onShow(!show);
  };

  const editAssignment = async () => {
    const params = {
      code: code,
      name: name,
      structGrade: structGrade,
      pending: pending,
      expired: expired,
      file: file,
      status: status,
    };
    try {
      await userApi.post_TeacherAssignmentsEdit(params);
      toast.success("Thay đổi thành công", { position: "bottom-right" });
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
        <Modal.Title>Sửa thông tin bài tập</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Tên bài tập</Form.Label>
            <Form.Control
              value={name}
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Bài tập</Form.Label>
            <Form.Control type="file" required onChange={handleImgPost} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tên cột điểm</Form.Label>
            <Form.Select
              value={structGrade}
              onChange={(e) => setStructGrade(e.target.value)}
            >
              {renderSelectGrade}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Trạng thái</Form.Label>
            <Form.Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="canceled">Hủy</option>
              <option value="available">Hợp lệ</option>
              <option value="finalized">Đã chốt</option>
              <option value="hide">Ẩn đi</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Ngày bắt đầu</Form.Label>
            <Form.Control
              value={pending}
              type="datetime-local"
              required
              onChange={(e) => setPending(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ngày kết thúc</Form.Label>
            <Form.Control
              value={expired}
              type="datetime-local"
              required
              onChange={(e) => setExpired(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" onClick={() => handleUpdate()}>
          Sửa bài tập
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditAssignment;
