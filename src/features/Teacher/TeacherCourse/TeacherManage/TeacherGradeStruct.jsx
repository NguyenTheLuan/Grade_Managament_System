import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import ModalAddGradeStruct from "components/common/Modals/TeacherManage/GradeStruct/ModalAddGradeStruct";
import ModalEditGradeStruct from "components/common/Modals/TeacherManage/GradeStruct/ModalEditGradeStruct";
import ModalDeleteGradeStruct from "components/common/Modals/TeacherManage/GradeStruct/ModalDeleteGradeStruct";

function TeacherGradeStruct() {
  const { id } = useParams();
  const [gradeStruct, setGradeStruct] = useState(null);

  useEffect(() => {
    getClassDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //handle modal
  //Add
  const [showAdd, setShowAdd] = useState(false);

  const handleShow = () => {
    setShowAdd(true);
  };
  const onShowAdd = (isShow) => {
    getClassDetail();
    setShowAdd(isShow);
  };

  //Edit
  const [showEdit, setShowEdit] = useState(false);
  const [showInfoEdit, setShowInfoEdit] = useState(false);
  const handleUpdate = (grade) => {
    setShowInfoEdit(grade);
    setShowEdit(true);
  };
  const onShowUpdate = (isShow) => {
    getClassDetail();
    setShowEdit(isShow);
  };

  //Delete
  const [showDelete, setShowDelete] = useState(false);
  const [showInfoDelete, setShowInfoDelete] = useState(false);
  const handleDelete = (grade) => {
    setShowInfoDelete(grade);
    setShowDelete(true);
  };
  const onShowDelete = (isShow) => {
    getClassDetail();
    setShowDelete(isShow);
  };

  const getClassDetail = async () => {
    try {
      // const response = await userApi.get_TeacherGradeStruct(params);
      const response = await userApi.get_myClassDetail(id);
      const { gradeStruct } = response;
      // console.log(response);

      setGradeStruct(gradeStruct);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderGradeStruct = gradeStruct?.map((grade, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{grade.code}</td>
        <td>{grade.structName}</td>
        <td>{grade.percent}</td>
        <td>{grade.total}</td>
        <td>
          <Button onClick={() => handleUpdate(grade)}>
            <FiEdit className="icons" />
          </Button>
        </td>
        <td>
          <Button onClick={() => handleDelete(grade)}>
            <MdDeleteForever className="icons" />
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="details">
      {/* <legend className="details_tilte">Quản lý cấu trúc điểm</legend> */}
      <Table className="details_table" bordered hover striped>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã</th>
            <th>Tên cột điểm</th>
            <th>Hệ số (%)</th>
            <th>Điểm tối đa</th>
            <th>Chỉnh sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>{renderGradeStruct}</tbody>
      </Table>
      <Button onClick={() => handleShow()}>Thêm cột điểm mới</Button>
      <ModalAddGradeStruct show={showAdd} onShow={onShowAdd} />
      <ModalEditGradeStruct
        show={showEdit}
        onShow={onShowUpdate}
        gradeStruct={showInfoEdit}
      />
      <ModalDeleteGradeStruct
        show={showDelete}
        onShow={onShowDelete}
        gradeStruct={showInfoDelete}
      />
    </div>
  );
}

export default TeacherGradeStruct;
