import adminApi from "apis/adminApi";
import { checkActive, checkComplete } from "components/common";
import ModalClassDetail from "components/common/Modals/AdminManage/Classes/ModalClassDetail ";
import ModalClassUpdate from "components/common/Modals/AdminManage/Classes/ModalClassUpdate";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
//icons
import { BsInfoLg } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
//style css
import "../AdminDetails.scss";

function AdminManageClasses() {
  //search
  const [name, setName] = useState("");
  const [sort, setSort] = useState("name_asc");

  const [classes, setClasses] = useState();
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

  //Modal update
  const [showUpdate, setShowUpdate] = useState(false);

  const handleUpdate = (info) => {
    setDetail(info);
    setShowUpdate(true);
  };
  const onShowUpdate = (isShow) => {
    getClasses();
    setShowUpdate(isShow);
  };

  useEffect(() => {
    getClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, sort]);

  const getClasses = async () => {
    const params = {
      sort: sort,
      page: 1,
      limit: 20,
      name: name,
    };
    try {
      const response = await adminApi.get_Classes(params);
      // console.log(response);
      const { numOfClass, result } = response;
      setTotal(numOfClass);
      setClasses(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderClass = classes?.map((classItem, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{classItem.code}</td>
        <td>{classItem.name}</td>
        <td>{checkActive(classItem.active)}</td>
        <td>{checkComplete(classItem.complete)}</td>
        {/* <td>{classItem.teacher}</td>
        <td>{checkInfo(classItem.phone)}</td> */}
        <td>
          <Button onClick={() => handleUpdate(classItem)}>
            <FiEdit className="icons" />
          </Button>
        </td>
        <td>
          <Button onClick={() => handleDetails(classItem)}>
            <BsInfoLg className="icons" />
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="adminDetails">
      <legend className="adminDetails_title">Quản lý lớp học</legend>

      <Form className="adminDetails_search">
        <Form.Group className="adminDetails_search_item">
          <Form.Label className="adminDetails_search_item_label">
            Tên lớp
          </Form.Label>
          <Form.Control
            className="adminDetails_search_item_control"
            placeholder="Nhập tên lớp"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Select
            className="adminDetails_search_item_sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="name_asc">Tăng dần</option>
            <option value="name_desc">Giảm dần</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <Table className="adminDetails_content" hover striped bordered>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã lớp</th>
            <th>Tên lớp</th>
            <th>Trạng thái</th>
            <th>Hoàn thành</th>
            {/* <th>Giảng viên</th>
            <th>Số điện thoại</th> */}
            <th>Cập nhật</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>{renderClass}</tbody>
      </Table>
      <ModalClassDetail show={showDetail} onShow={onShowDetail} info={detail} />
      <ModalClassUpdate show={showUpdate} onShow={onShowUpdate} info={detail} />
    </div>
  );
}

export default AdminManageClasses;
