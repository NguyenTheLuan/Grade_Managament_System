import adminApi from "apis/adminApi";
import { checkGender } from "components/common";
import ModalTeacherCreate from "components/common/Modals/AdminManage/Teachers/ModalTeacherCreate";
import ModalTeacherDetails from "components/common/Modals/AdminManage/Teachers/ModalTeacherDetails";
import ModalUpdateTeacher from "components/common/Modals/AdminManage/Teachers/ModalUpdateTeacher";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
//icons
import { BsInfoLg } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
//style css
import "../AdminDetails.scss";

function Teachers() {
  //search
  const [name, setName] = useState("");
  const [sort, setSort] = useState("fullName_asc");

  const [teachers, setTeachers] = useState();
  const [total, setTotal] = useState();

  //Modal view details
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState();

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
    getTeachers();
    setShowUpdate(isShow);
  };

  //Modal create teacher
  const [showCreate, setShowCreate] = useState(false);

  const handleCreateTeacher = () => {
    setShowCreate(true);
  };
  const onShowCreate = (isShow) => {
    getTeachers();
    setShowCreate(isShow);
  };

  useEffect(() => {
    getTeachers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, sort]);

  const getTeachers = async () => {
    const params = {
      sort: sort,
      page: 1,
      limit: 20,
      name: name,
    };
    try {
      const response = await adminApi.get_Teachers(params);
      console.log(response);
      const { numOfTeacher, result } = response;
      setTeachers(result);
      setTotal(numOfTeacher);
    } catch (error) {
      console.log("l???i r???i", { error });
    }
  };

  const renderTeachers = teachers?.map((teacher, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{teacher.fullName}</td>
        <td>{teacher.accountId.email}</td>
        {/* <td>{renderDate(teacher.birthday)}</td> */}
        <td>{checkGender(teacher.gender)}</td>
        {/* <td>{checkInfo(teacher.phone)}</td> */}
        <td>
          <Button onClick={() => handleUpdate(teacher)}>
            <FiEdit className="icons" />
          </Button>
        </td>
        <td>
          <Button onClick={() => handleDetails(teacher)}>
            <BsInfoLg className="icons" />
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="adminDetails">
      <legend className="adminDetails_title">Qu???n l?? gi???ng vi??n</legend>

      <Form className="adminDetails_search">
        <Form.Group className="adminDetails_search_item">
          <Form.Label className="adminDetails_search_item_label">
            T??n gi???ng vi??n
          </Form.Label>
          <Form.Control
            className="adminDetails_search_item_control"
            placeholder="Nh???p t??n gi???ng vi??n"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Select
            className="adminDetails_search_item_sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="fullName_asc">T??ng d???n</option>
            <option value="fullName_desc">Gi???m d???n</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <Table className="adminDetails_content" hover striped bordered>
        <thead>
          <tr>
            <th>STT</th>
            <th>T??n</th>
            <th>Email</th>
            {/* <th>Sinh nh???t</th> */}
            <th>Gi???i t??nh</th>
            {/* <th>S??? ??i???n tho???i</th> */}
            <th>C???p nh???t</th>
            <th>Chi ti???t</th>
          </tr>
        </thead>
        <tbody>{renderTeachers}</tbody>
      </Table>
      <Button onClick={() => handleCreateTeacher()}>T???o gi???ng vi??n m???i</Button>
      <ModalTeacherDetails
        show={showDetail}
        onShow={onShowDetail}
        teacherDetail={detail}
      />
      <ModalUpdateTeacher
        show={showUpdate}
        onShow={onShowUpdate}
        teacherDetail={detail}
      />
      <ModalTeacherCreate show={showCreate} onShow={onShowCreate} />
    </div>
  );
}

export default Teachers;
