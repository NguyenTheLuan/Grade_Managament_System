import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function StudentCourseScored() {
  const { id } = useLocation();

  const [studentRecords, setStudentRecords] = useState([]);
  const [structs, setStructs] = useState([]);

  useEffect(() => {
    getMyScored();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMyScored = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_MyScoredRecord(params);
      // console.log(response);
      const { result, structs } = response;
      setStudentRecords(result);
      setStructs(structs);
    } catch (error) {
      console.log("lỗi ròi", { error });
    }
  };

  //to show scored
  const checkGrade = (student, structs) => {
    if (!student && !structs) return;
    // students.forEach((student) => {
    var result = [];
    structs.forEach((struct) => {
      var mang_struct = { structName: struct.structName, scores: [] };
      student.scoreRecord.forEach((score) => {
        if (struct.code === score.structCode) {
          let t = score.score;
          mang_struct.scores.push(t);
        }
      });
      result.push(mang_struct);
    });

    return result.map((score, index) => {
      return (
        <ul key={index}>
          <li>{score.structName}</li>
          <li>{renderScored(score.scores)}</li>
        </ul>
      );
    });
  };

  //to render scores
  const renderScored = (scores) => {
    return scores.map((score, index) => {
      return <span key={index}>{score}</span>;
    });
  };

  const renderStudents = studentRecords?.map((student, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{student.fullName}</td>
        <td>{checkGrade(student, structs)}</td>
        <td></td>

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

export default StudentCourseScored;
