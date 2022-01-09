import userApi from "apis/userApi";
import { checkActive, checkComplete } from "components/common";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "style/Courses.scss";
import StudentCourseJoin from "./StudentCourseJoin";

function StudentCourses() {
  const navigate = useNavigate();

  const [classes, setClasses] = useState([]);
  const [active, setActive] = useState(true);
  const [complete, setComplete] = useState();
  const [name, setName] = useState("");

  //Call api to get classes
  useEffect(() => {
    getMyCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const params = {
      page: 1,
      limit: 12,
      active: active,
      name: name,
      complete: complete,
    };
    try {
      const response = await userApi.get_myCourses(params);
      const { myCourses } = response;
      console.log(response);
      setClasses(myCourses);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  const renderCourses = () => {
    if (classes.length === 0) return "Chưa tham gia lớp nào";
    else {
      return classes.map((classInfo, index) => {
        return (
          <div
            key={index}
            className="course"
            onClick={() => goToCourseDetail(classInfo.classCode)}
          >
            <div>Lớp {classInfo.className}</div>
            <div>Mã lớp {classInfo.classCode}</div>
            <div>Trạng thái: {checkActive(classInfo.active)}</div>
            <div>Thông tin: {checkComplete(classInfo.complete)}</div>
          </div>
        );
      });
    }
  };

  const goToCourseDetail = (code_course) => {
    navigate(`/student/courses/${code_course}`);
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
