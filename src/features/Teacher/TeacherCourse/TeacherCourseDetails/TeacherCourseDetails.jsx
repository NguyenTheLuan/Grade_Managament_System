import userApi from "apis/userApi";
import { checkActive } from "components/common";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function TeacherCourseDetails() {
  const { id } = useParams();

  const [classInfo, setClassInfo] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getClassInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getClassInfo = async () => {
    try {
      const response = await userApi.get_myClassDetail(id);
      const { result } = response;
      const { students } = result;
      setClassInfo(result);
      setStudents(students);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderStudent = () => {
    console.log(students);
    if (students.length === 0) return "Chưa có học viên nào";
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
  const renderInfoClass = () => {
    if (!classInfo) return;
    else {
      return (
        <div>
          <div>Trạng thái {checkActive(classInfo.active)}</div>
          <div>Mã lớp {classInfo.code}</div>
          <div>Tên lớp {classInfo.name}</div>
          <div>Số điện thoại {classInfo.phone}</div>
        </div>
      );
    }
  };

  return (
    <div>
      <div>thông tin lớp {renderInfoClass()}</div>
      <div>số lượng học viên {renderStudent()}</div>
    </div>
  );
}

export default TeacherCourseDetails;
