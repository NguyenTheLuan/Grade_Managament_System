import userApi from "apis/userApi";
import { checkActive } from "components/common";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
        <div>
          <div>Trạng thái {checkActive(courseInfo.active)}</div>
          <div>Mã lớp {courseInfo.code}</div>
          <div>Tên lớp {courseInfo.name}</div>
          <div>Số điện thoại {courseInfo.phone}</div>
          <div>Tên giảng viên {courseInfo.teacher}</div>
        </div>
      );
    }
  };
  const renderStudents = () => {
    if (students.length === 0) return "Không có học viên nào";
    else {
      return students.map((student, index) => {
        return (
          <div key={index}>
            <div>Mã học viên {student.studentId}</div>
            <div>Tên học viên {student.fullName}</div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="courseInfo">{renderCourseInfo()}</div>
      <div className="student">{renderStudents()}</div>
    </div>
  );
}

export default StudentCourseDetail;
