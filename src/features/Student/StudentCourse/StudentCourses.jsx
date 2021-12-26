import userApi from "apis/userApi";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "style/Courses.scss";
import StudentCourseJoin from "./StudentCourseJoin";

function StudentCourses() {
  const [classes, setClasses] = useState([]);
  const [student_id, setStudent_id] = useState(null);
  //Call api to get classes
  useEffect(() => {
    getMyCourses();
  }, []);

  //Set and render
  useEffect(() => {
    classes && renderCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes]);

  //handle modal
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const onShow = (isShow) => {
    getMyCourses();
    setShow(isShow);
  };

  const getMyCourses = async () => {
    const params = { page: 1, limit: 5, active: true };
    try {
      const response = await userApi.get_myCourses(params);
      const { classRecord, studentId } = response.myCourses;
      setStudent_id(studentId);
      setClasses(classRecord);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  const renderCourses = () => {
    if (classes.length === 0) return "Chưa tham gia lớp nào";
    else {
      return classes.map((classInfo, index) => {
        return (
          <div key={index} className="course">
            <div>Lớp {classInfo.className}</div>
            <div>Mã lớp {classInfo.classCode}</div>
          </div>
        );
      });
    }
  };
  return (
    <div className="mainForm">
      <div className="menuCourses">
        {/* <div>Mã học viên {student_id}</div> */}
        {renderCourses()}
      </div>
      <div className="menuHandle">
        <Button onClick={handleShow}>Tham gia lớp mới?</Button>
      </div>
      <StudentCourseJoin show={show} onShow={onShow} />
    </div>
  );
}

export default StudentCourses;
