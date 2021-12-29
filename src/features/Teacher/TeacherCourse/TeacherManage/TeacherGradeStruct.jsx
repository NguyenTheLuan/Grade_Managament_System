import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

function TeacherGradeStruct() {
  const { id } = useParams();
  const [gradeStruct, setGradeStruct] = useState(null);

  useEffect(() => {
    getClassDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getClassDetail = async () => {
    try {
      // const response = await userApi.get_TeacherGradeStruct(params);
      const response = await userApi.get_myClassDetail(id);
      const { gradeStruct } = response;
      // console.log(response);

      setGradeStruct(gradeStruct);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderGradeStruct = gradeStruct?.map((grade, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{grade.code}</td>
        <td>{grade.structName}</td>
        <td>{grade.percent}</td>
        <td>{grade.total}</td>
        <td>
          <Button onClick={() => handleUpdate(grade.code)}>
            <FiEdit className="icons" />
          </Button>
        </td>
        <td>
          <Button onClick={() => handleDelete(grade.code)}>
            <MdDeleteForever className="icons" />
          </Button>
        </td>
      </tr>
    );
  });

  const handleUpdate = (code) => {
    console.log("Tiến thành cập nhật", code);
  };
  const handleDelete = (code) => {
    console.log("Tiến thành xóa", code);
  };

  return (
    <div className="details">
      <legend className="details_tilte">Quản lý cấu trúc điểm</legend>
      <Table className="details_table" bordered hover striped>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã</th>
            <th>Tên</th>
            <th>Hệ số (%)</th>
            <th>Điểm tối đa</th>
            <th>Chỉnh sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>{renderGradeStruct}</tbody>
      </Table>
      <Button>Thêm cột mới</Button>
    </div>
  );
}

export default TeacherGradeStruct;
