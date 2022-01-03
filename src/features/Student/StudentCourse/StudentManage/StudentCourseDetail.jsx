import userApi from "apis/userApi";
import { checkActive, checkInfo } from "components/common";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function StudentCourseDetail() {
  const { id } = useParams();

  const [courseInfo, setCourseInfo] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getCourseDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCourseDetail = async () => {
    try {
      const response = await userApi.get_myCoursesDetail(id);
      const { result } = response;
      const { students } = result;

      setStudents(students);
      setCourseInfo(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  const renderCourseInfo = () => {
    if (!courseInfo) return;
    else {
      return (
        <ul>
          {/* <li>Trạng thái {checkActive(courseInfo.active)}</li> */}
          <li>
            Mã lớp <strong>{courseInfo.code}</strong>
          </li>
          <li>
            Tên lớp <strong>{courseInfo.name}</strong>
          </li>
          <li>
            Tên giảng viên <strong>{courseInfo.teacher}</strong>
          </li>
          <li>
            Số điện thoại <strong>{checkInfo(courseInfo.phone)}</strong>
          </li>
        </ul>
      );
    }
  };
  const renderStudents = () => {
    if (students.length === 0) return "Không có học viên nào";
    else {
      return students.map((student, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{student.studentId}</td>
            <td>{student.fullName}</td>
          </tr>
        );
      });
    }
  };

  return (
    <div className="details">
      <div className="details_class">{renderCourseInfo()}</div>
      <Table className="details_table" bordered hover striped>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã học viên</th>
            <th>Tên học viên</th>
          </tr>
        </thead>
        <tbody>{renderStudents()}</tbody>
      </Table>
    </div>
  );
}

export default StudentCourseDetail;
