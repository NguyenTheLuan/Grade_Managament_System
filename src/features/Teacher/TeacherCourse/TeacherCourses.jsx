import userApi from "apis/userApi";
import { checkActive } from "components/common";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import "style/Courses.scss";
import TeacherCourseCreate from "./TeacherCourseCreate";

function TeacherCourses() {
  const [classes, setClasses] = useState([]);
  //Call api to get classes
  useEffect(() => {
    getMyClasses();
  }, []);

  //Set and render
  useEffect(() => {
    classes && renderClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes]);

  //handle modal
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const onShow = (isShow) => {
    getMyClasses();
    setShow(isShow);
  };

  const getMyClasses = async () => {
    const params = { page: 1, limit: 12, active: true };
    try {
      const response = await userApi.get_myClass(params);
      const { numOfClass, result } = response;
      console.log(result);
      setClasses(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderClasses = () => {
    if (classes.length === 0) return;
    else {
      return classes.map((classInfo, index) => {
        return (
          <div key={index} className="course">
            <div>Lớp {classInfo.name}</div>
            <div>Mã lớp {classInfo.code}</div>
            <div>Trạng thái {checkActive(classInfo.active)}</div>
          </div>
        );
      });
    }
  };

  return (
    <div className="mainForm">
      <div className="menuCourses">{renderClasses()}</div>
      <div className="menuHandle">
        <Button onClick={handleShow}>Tham gia lớp mới?</Button>
      </div>
      <TeacherCourseCreate show={show} onShow={onShow} />
    </div>
  );
}

export default TeacherCourses;
