import userApi from "apis/userApi";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function StudentCourseJoin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = e.target.name.value;

    joinNewClass(code);
  };

  const joinNewClass = async (code) => {
    const params = {
      code: code,
    };
    try {
      const response = await userApi.join_newClass(params);
      console.log(response);
      toast.success("Tham gia lớp học thành công", {
        position: "bottom-right",
      });
      navigate("/student/courses");
    } catch (error) {
      console.log("lỗi rồi", { error });
      toast.warn("Cập nhật student ID bị lỗi", {
        position: "bottom-right",
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          name="name"
          type="text"
          placeholder="Nhập mã lớp"
          required={true}
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit">Tham gia lớp mới</Button>
      </Form.Group>
    </Form>
  );
}

export default StudentCourseJoin;
