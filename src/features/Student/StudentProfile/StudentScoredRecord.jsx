import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import "./UserProfile.scss";

function StudentScoredRecord() {
  const [scored, setScored] = useState();

  useEffect(() => {
    getMyScoredRecord();
  }, []);

  const getMyScoredRecord = async () => {
    try {
      const response = await userApi.get_MyScoreds();
      // console.log(response);
      const { result } = response;
      setScored(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderScored = scored?.map((score, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{score.classId.name}</td>
        <td>{score.gpa}</td>
      </tr>
    );
  });

  return (
    <div className="contentInfo">
      <div className="tableInfo">
        <legend>Điểm các môn đã học</legend>
        <Table hover striped bordered className="tableScored">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên môn học</th>
              <th>Điểm tổng</th>
            </tr>
          </thead>
          <tbody>{renderScored}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default StudentScoredRecord;
