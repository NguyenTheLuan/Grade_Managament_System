import adminApi from "apis/adminApi";
import { checkGender, checkInfo, renderDate } from "components/common";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";

//icons
import { BsInfoLg } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

//style css
import "../AdminDetails.scss";

function Students() {
  const [students, setStudents] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      const response = await adminApi.get_Students();
      console.log(response);
      const { numOfTeacher, result } = response;
      setStudents(result);
      setTotal(numOfTeacher);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderStudents = students?.map((student, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{student.studentId}</td>
        <td>{student.fullName}</td>
        <td>{renderDate(student.birthday)}</td>
        <td>{checkGender(student.gender)}</td>
        <td>{checkInfo(student.phone)}</td>
        <td>
          <Button onClick={() => handleDetails(student)}>
            <BsInfoLg className="icons" />
          </Button>
        </td>
        <td>
          <Button onClick={() => handleUpdate(student)}>
            <FiEdit className="icons" />
          </Button>
        </td>
      </tr>
    );
  });

  const handleDetails = (id) => {
    console.log("xem chi tiết", id);
  };
  const handleUpdate = (id) => {
    console.log("cập nhật thông tin", id);
  };
  return (
    <div className="adminDetails">
      <legend className="adminDetails_title">Quản lý học viên</legend>
      <Table className="adminDetails_content" hover striped bordered>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã học viên</th>
            <th>Tên</th>
            <th>Sinh nhật</th>
            <th>Giới tính</th>
            <th>Số điện thoại</th>
            <th>Chi tiết</th>
            <th>Cập nhật</th>
          </tr>
        </thead>
        <tbody>{renderStudents}</tbody>
      </Table>
    </div>
  );
}

export default Students;
