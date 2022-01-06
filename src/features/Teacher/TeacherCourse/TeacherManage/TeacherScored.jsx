import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Tab, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function TeacherScored() {
  const { id } = useParams();

  const [studentRecords, setStudentRecords] = useState();
  const [structs, setStrutcs] = useState();

  useEffect(() => {
    getGrades();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGrades = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_TeacherGrades(params);
      console.log(response);
      const { result, structs } = response;
      setStudentRecords(result);
      setStrutcs(structs);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderStudents = studentRecords?.map((student, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        {/* <td>{student.classCode}</td> */}
        <td></td>
        <td></td>
        {/* <td>{student.scoreRecord}</td> */}
        <td>{student.gpa}</td>
        <td>{student.mark}</td>
      </tr>
    );
  });

  return (
    <div className="details">
      <Table className="details_table" bordered hover striped>
        <thead>
          <tr>
            <th>STT</th>
            {/* <th>Mã số</th> */}
            <th>Tên</th>
            <th>Điểm</th>
            <th>Tổng kết</th>
            <th>Đánh dấu</th>
          </tr>
        </thead>
        <tbody>{renderStudents}</tbody>
      </Table>
    </div>
  );
}
export default TeacherScored;
