import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function TeacherGradeStruct() {
  const { id } = useParams();
  const [gradeStruct, setGradeStruct] = useState(null);
  useEffect(() => {
    getClassDetail();
  }, []);
  const getClassDetail = async () => {
    try {
      const response = await userApi.get_myClassDetail(id);
      const { result, gradeStruct } = response;
      // const { students } = result;
      // // console.log(result);
      // // console.log(gradeStruct);
      // // console.log(students);

      setGradeStruct(gradeStruct);
      console.log(gradeStruct);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderGradeStruct = gradeStruct?.map((grade, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{grade.code}</td>
        <td>{grade.structName}</td>
        <td>{grade.percent}</td>
        <td>{grade.total}</td>
      </tr>
    );
  });

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã</th>
            <th>Tên</th>
            <th>Hệ số (%)</th>
            <th>Điểm tối đa</th>
          </tr>
        </thead>
        <tbody>{renderGradeStruct}</tbody>
      </Table>
    </div>
  );
}

export default TeacherGradeStruct;
