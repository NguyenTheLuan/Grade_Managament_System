import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function StudentGradeStruct() {
  const { id } = useParams();
  const [gradeStruct, setGradeStruct] = useState(null);
  useEffect(() => {
    getClassDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getClassDetail = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_MyScoredRecord(params);
      const { structs } = response;
      // console.log(response);

      setGradeStruct(structs);
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
      </tr>
    );
  });
  return (
    <div className="details">
      {/* <legend className="details_tilte">Quản lý cấu trúc điểm</legend> */}
      <Table className="details_table" bordered hover striped>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã</th>
            <th>Tên cột điểm</th>
            <th>Hệ số (%)</th>
            <th>Điểm tối đa</th>
          </tr>
        </thead>
        <tbody>{renderGradeStruct}</tbody>
      </Table>
    </div>
  );
}

export default StudentGradeStruct;
