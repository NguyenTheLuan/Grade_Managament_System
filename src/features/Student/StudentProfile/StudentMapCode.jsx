import userApi from "apis/userApi";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function StudentMapCode() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentId = e.target.name.value;

    updateStudentId(studentId);
  };

  const updateStudentId = async (studentId) => {
    const params = {
      studentId: studentId,
    };
    try {
      await userApi.mapStudentId(params);

      toast.success("Cập nhật student ID thành công", {
        position: "bottom-right",
      });
      //Redirect to home student
      navigate("/student/my_info");
    } catch (error) {
      console.log("lỗi rồi", { error });
      toast.warn(`${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit} className="mapId">
      <Form.Group>
        <Form.Control
          name="name"
          type="text"
          placeholder="Nhập mã học viên"
          required={true}
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit">Cập nhật mã học viên</Button>
      </Form.Group>
    </Form>
  );
}

export default StudentMapCode;
