import userApi from "apis/userApi";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function TeacherCourseCreate() {
  const [code, setCode] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameClass = e.target.name.value;
    createNewClass(nameClass);
  };

  const createNewClass = async (name) => {
    const params = { name: name };
    try {
      const response = await userApi.create_newClass(params);
      setCode(response.code);
    } catch (error) {
      console.log("lỗi rồi", error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      {code && <span>Tạo lớp thành công, mã tham gia là {code}</span>}
      <Form.Group>
        <Form.Label>Nhập tên lớp muốn tạo </Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Nhập tên lớp"
          required={true}
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit">Tạo lớp mới</Button>
      </Form.Group>
    </Form>
  );
}

export default TeacherCourseCreate;
