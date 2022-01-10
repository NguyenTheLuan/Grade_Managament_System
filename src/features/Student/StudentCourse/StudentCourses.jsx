import userApi from "apis/userApi";
import { checkActive, checkComplete } from "components/common";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "style/Courses.scss";
import StudentCourseJoin from "./StudentCourseJoin";

function StudentCourses() {
  const navigate = useNavigate();

  const [classes, setClasses] = useState([]);
  const [active, setActive] = useState(true);
  const [complete, setComplete] = useState(false);
  const [name, setName] = useState("");

  //Call api to get classes
  useEffect(() => {
    getMyCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, complete, active]);

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
            <div>{checkActive(classInfo.active)}</div>
            <div>{checkComplete(classInfo.complete)}</div>
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
      <Form className="menuSearch">
        <Form.Group className="menuSearch_items">
          <Form.Label className="menuSearch_items_label">Tên lớp</Form.Label>
          <Form.Control
            className="menuSearch_items_control"
            placeholder="Nhập tên lớp"
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleShow}>Tham gia lớp mới?</Button>
        </Form.Group>
        <Form.Group className="menuSearch_items">
          <Form.Label className="menuSearch_items_label">Trạng thái</Form.Label>
          <Form.Select
            className="menuSearch_items_select"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          >
            <option value="">Tất cả</option>
            <option value="true">Đang mở</option>
            <option value="false">Đang khóa</option>
          </Form.Select>
          <Form.Select
            className="menuSearch_items_select"
            value={complete}
            onChange={(e) => setComplete(e.target.value)}
          >
            <option value="">Tất cả</option>
            <option value="false">Chưa hoàn thành</option>
            <option value="true">Hoàn thành</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <div className="menuCourses">{renderCourses()}</div>
      <StudentCourseJoin show={show} onShow={onShow} />
    </div>
  );
}

export default StudentCourses;
