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

function Teachers() {
  const [teachers, setTeachers] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    getTeachers();
  }, []);

  const getTeachers = async () => {
    try {
      const response = await adminApi.get_Teachers();
      console.log(response);
      const { numOfTeacher, result } = response;
      setTeachers(result);
      setTotal(numOfTeacher);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderTeachers = teachers?.map((teacher, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{teacher.fullName}</td>
        <td>{renderDate(teacher.birthday)}</td>
        <td>{checkGender(teacher.gender)}</td>
        <td>{checkInfo(teacher.phone)}</td>
        <td>
          <Button onClick={() => handleDetails(teacher)}>
            <BsInfoLg className="icons" />
          </Button>
        </td>
        <td>
          <Button onClick={() => handleUpdate(teacher)}>
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
      <legend className="adminDetails_title">Quản lý giảng viên</legend>

      <Table className="adminDetails_content" hover striped bordered>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Sinh nhật</th>
            <th>Giới tính</th>
            <th>Số điện thoại</th>
            <th>Chi tiết</th>
            <th>Cập nhật</th>
          </tr>
        </thead>
        <tbody>{renderTeachers}</tbody>
      </Table>
      <Button>Tạo giảng viên mới</Button>
    </div>
  );
}

export default Teachers;
