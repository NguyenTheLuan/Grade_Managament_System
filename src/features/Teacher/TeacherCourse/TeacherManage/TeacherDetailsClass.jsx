import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function TeacherDetailsClass() {
  const { id } = useParams();

  const [students, setStudents] = useState(null);
  const [gradeStruct, setGradeStruct] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    getClassDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getClassDetail = async () => {
    try {
      const response = await userApi.get_myClassDetail(id);
      const { result, gradeStruct } = response;
      const { students } = result;
      // console.log(result);
      // console.log(gradeStruct);
      // console.log(students);
      setStudents(students);
      setGradeStruct(gradeStruct);
      setResult(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderStudents = students?.map((student, index) => {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{student.studentId}</td>
        <td>{student.fullName}</td>
        <td></td>
      </tr>
    );
  });

  const renderInfoClass = () => {
    return (
      <div>
        <div>Tên giảng viên {result?.teacher}</div>
        <div>Mã lớp {result?.code}</div>
        <div>Số điện thoại {result?.phone} </div>
        <div>Lớp học {result?.name}</div>
      </div>
    );
  };

  return (
    <div>
      <div>{renderInfoClass()}</div>
      <div>
        <Table>
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
    </div>
  );
}

export default TeacherDetailsClass;
