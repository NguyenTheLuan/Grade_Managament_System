import userApi from "apis/userApi";
import { checkActive, checkComplete } from "components/common";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TeacherCourseCreate from "./TeacherCourseCreate";
import "style/Courses.scss";

function TeacherCourses() {
  const navigate = useNavigate();

  //info to search
  const [complete, setComplete] = useState(false);
  const [active, setActive] = useState(true);
  const [name, setName] = useState("");
  const [sort, setSort] = useState("");

  const [classes, setClasses] = useState([]);

  //Call api to get classes
  useEffect(() => {
    getMyClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, complete, active, sort]);

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
    const params = {
      page: 1,
      limit: 8,
      active: active,
      complete: complete,
      name: name,
      sort: sort,
    };
    try {
      const response = await userApi.get_myClass(params);
      console.log(response);
      const { numOfClass, result } = response;
      // console.log(result);
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
          <div
            key={index}
            className="course"
            onClick={() => goToCourseDetail(classInfo.code)}
          >
            <div>Lớp {classInfo.name}</div>
            <div>Mã lớp {classInfo.code}</div>
            <div>{checkActive(classInfo.active)}</div>
            <div>{checkComplete(classInfo.complete)}</div>
          </div>
        );
      });
    }
  };

  const goToCourseDetail = (code) => {
    navigate(`/teacher/courses/${code}`);
  };

  return (
    <div className="mainForm">
      <Form className="menuSearch">
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
        <Form.Group className="menuSearch_items">
          <Form.Label className="menuSearch_items_label">Tên lớp</Form.Label>
          <Form.Control
            className="menuSearch_items_control"
            placeholder="Nhập tên lớp"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Select
            className="menuSearch_items_select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="name_asc">Tăng dần</option>
            <option value="name_desc">Giảm dần</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="menuSearch_items">
          <Button onClick={handleShow}>Tạo lớp mới?</Button>
        </Form.Group>
      </Form>
      <div className="menuCourses">{renderClasses()}</div>
      <TeacherCourseCreate show={show} onShow={onShow} />
    </div>
  );
}

export default TeacherCourses;
