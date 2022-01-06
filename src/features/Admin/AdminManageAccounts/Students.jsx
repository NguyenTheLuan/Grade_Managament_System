import adminApi from "apis/adminApi";
import { checkGender } from "components/common";
import ModalStudentDetails from "components/common/Modals/AdminManage/Students/ModalStudentDetails";
import ModalUpdateStudent from "components/common/Modals/AdminManage/Students/ModalUpdateStudent";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
//icons
import { BsInfoLg } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
//style css
import "../AdminDetails.scss";

function Students() {
  //search
  const [name, setName] = useState("");
  const [sort, setSort] = useState("fullName_asc");

  const [students, setStudents] = useState();
  const [total, setTotal] = useState();

  //Modal view details
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState(false);

  const handleDetails = (info) => {
    setDetail(info);
    setShowDetail(true);
  };
  const onShowDetail = (isShow) => {
    setShowDetail(isShow);
  };

  //Modal update teacher
  const [showUpdate, setShowUpdate] = useState(false);

  const handleUpdate = (info) => {
    setDetail(info);
    setShowUpdate(true);
  };
  const onShowUpdate = (isShow) => {
    getStudents();
    setShowUpdate(isShow);
  };

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, sort]);

  const getStudents = async () => {
    const params = {
      sort: sort,
      page: 1,
      limit: 20,
      name: name,
    };
    try {
      const response = await adminApi.get_Students(params);
      console.log(response);
      const { numOfTeacher, result } = response;
      setStudents(result);
      setTotal(numOfTeacher);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderStudents = students?.map((student, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{student.studentId}</td>
        <td>{student.fullName}</td>
        <td>{student.accountId.email}</td>
        {/* <td>{renderDate(student.birthday)}</td> */}
        <td>{checkGender(student.gender)}</td>
        {/* <td>{checkInfo(student.phone)}</td> */}
        <td>
          <Button onClick={() => handleUpdate(student)}>
            <FiEdit className="icons" />
          </Button>
        </td>
        <td>
          <Button onClick={() => handleDetails(student)}>
            <BsInfoLg className="icons" />
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="adminDetails">
      <legend className="adminDetails_title">Quản lý học viên</legend>

      <Form className="adminDetails_search">
        <Form.Group className="adminDetails_search_item">
          <Form.Label className="adminDetails_search_item_label">
            Tên học viên
          </Form.Label>
          <Form.Control
            className="adminDetails_search_item_control"
            placeholder="Nhập tên học viên"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Select
            className="adminDetails_search_item_sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="fullName_asc">Tăng dần</option>
            <option value="fullName_desc">Giảm dần</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <Table className="adminDetails_content" hover striped bordered>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã học viên</th>
            <th>Tên</th>
            <th>Email</th>
            {/* <th>Sinh nhật</th> */}
            <th>Giới tính</th>
            {/* <th>Số điện thoại</th> */}
            <th>Cập nhật</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>{renderStudents}</tbody>
        <ModalStudentDetails
          show={showDetail}
          onShow={onShowDetail}
          studentDetail={detail}
        />
        <ModalUpdateStudent
          show={showUpdate}
          onShow={onShowUpdate}
          studentDetail={detail}
        />
      </Table>
    </div>
  );
}

export default Students;
