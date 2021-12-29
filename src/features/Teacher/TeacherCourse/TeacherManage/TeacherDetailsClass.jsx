import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function TeacherDetailsClass() {
  const { id } = useParams();

  const [students, setStudents] = useState(null);
  // const [gradeStruct, setGradeStruct] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    getClassDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getClassDetail = async () => {
    try {
      const response = await userApi.get_myClassDetail(id);
      const { result } = response;
      const { students } = result;
      // console.log(result);
      // console.log(gradeStruct);
      console.log(students);
      setStudents(students);
      // setGradeStruct(gradeStruct);
      setResult(result);
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
        <td></td>
      </tr>
    );
  });

  const renderInfoClass = () => {
    return (
      <ul>
        <li>
          Tên giảng viên: <strong>{result?.teacher}</strong>
        </li>
        <li>
          Mã lớp: <strong>{result?.code}</strong>
        </li>
        <li>
          Số điện thoại: <strong>{result?.phone}</strong>{" "}
        </li>
        <li>
          Lớp học: <strong>{result?.name}</strong>
        </li>
      </ul>
    );
  };

  return (
    <div className="details">
      <legend className="details_tilte">Thông tin lớp</legend>
      <div className="details_class">{renderInfoClass()}</div>
      <legend className="details_tilte">Thông tin học viên</legend>
      <Table className="details_table" bordered hover striped>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Tên SV</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>{renderStudents}</tbody>
      </Table>
    </div>
  );
}

export default TeacherDetailsClass;
