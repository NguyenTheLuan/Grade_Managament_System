/* eslint-disable react-hooks/exhaustive-deps */
import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ModalAddAssignment({ show, onShow }) {
  const { id } = useParams();

  //List Grade Struct
  const [grades, setGrades] = useState();

  //Info to add new assignment
  const [structGrade, setStructGrade] = useState(null);
  const [name, setName] = useState(null);
  const [note, setNote] = useState(null);
  const [pending, setPending] = useState(null);
  const [expired, setExpired] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    getGradeStruct();
  }, []);

  // useEffect(() => {
  //   console.log(structGrade);
  // }, [structGrade]);

  const getGradeStruct = async () => {
    try {
      const response = await userApi.get_myClassDetail(id);
      const { gradeStruct } = response;
      // console.log(gradeStruct);
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
  const handleClose = () => {
    onShow(!show);
  };
  const handleImgPost = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = async () => {
    await addNewStruct();
    onShow(!show);
  };

  const addNewStruct = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("classCode", id);
    formData.append("name", name);
    formData.append("structCode", structGrade);
    formData.append("note", note);
    formData.append("pending", pending);
    formData.append("expired", expired);
    try {
      await userApi.post_TeacherAssignmentsAdd(formData);
      toast.success("Thêm thành công", { position: "bottom-right" });
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
        <Modal.Title>Thêm bài tập mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Tên bài tập(*)</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tên cột điểm(*)</Form.Label>
            <Form.Select onChange={(e) => setStructGrade(e.target.value)}>
              <option>Chọn cột điểm</option>
              {renderSelectGrade}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>File bài tập</Form.Label>
            <Form.Control type="file" required onChange={handleImgPost} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ghi chú(*)</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setNote(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ngày bắt đầu(*)</Form.Label>
            <Form.Control
              type="datetime-local"
              required
              onChange={(e) => setPending(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ngày kết thúc(*)</Form.Label>
            <Form.Control
              type="datetime-local"
              required
              onChange={(e) => setExpired(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => handleAdd()}>
          Thêm bài tập
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAddAssignment;
