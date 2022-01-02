import userApi from "apis/userApi";
import { renderDate } from "components/common";
import ModalAddAssignment from "components/common/Modals/AdminManage/Assignments/ModalAddAssignment";
import ModalDetailAssignment from "components/common/Modals/AdminManage/Assignments/ModalDetailAssignment";
import ModalEditAssignment from "components/common/Modals/AdminManage/Assignments/ModalEditAssignment";
import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

//icons
import { BsInfoLg } from "react-icons/bs";
import { TiUploadOutline } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { GrDownload } from "react-icons/gr";
import { useParams } from "react-router-dom";

function TeacherAssignment() {
  const { id } = useParams();

  const [assignments, setAssignments] = useState([]);
  const [infoDetails, setInfoDetails] = useState();

  useEffect(() => {
    getAssignments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAssignments = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_TeacherAssignments(params);
      const { result } = response;
      // console.log(result);
      setAssignments(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  //Modal Add New Assignment
  const [showAdd, setShowAdd] = useState(false);

  const onShowAdd = (isShow) => {
    getAssignments();
    setShowAdd(isShow);
  };
  const handleAddNew = () => {
    setShowAdd(true);
  };

  //Modal Edit  Assignment
  const [showEdit, setShowEdit] = useState(false);
  const onShowEdit = (isShow) => {
    getAssignments();
    setShowEdit(isShow);
  };
  const handleUpdate = (assignment_info) => {
    setInfoDetails(assignment_info);
    setShowEdit(true);
  };

  //Modal View Details Assignment
  const [showDetail, setShowDetail] = useState(false);
  const onShowDetail = (isShow) => {
    getAssignments();
    setShowDetail(isShow);
  };
  const handleViewDetail = (assignment_info) => {
    setInfoDetails(assignment_info);
    setShowDetail(true);
  };
  // Download file
  const downloadImage = (linkHref, assignment_name) => {
    let fileName = linkHref.split(".");
    fileName = fileName[fileName.length - 1];

    if (fileName === "jpg" || fileName === "png") {
      saveAs(`${linkHref}`, `${assignment_name}.${fileName}`);
    }
    if (fileName === "pdf" || fileName === "xls" || fileName === "xlsx") {
      console.log("đây là", linkHref);
      window.location = linkHref;
    }
  };

  const renderAssignments = assignments.map((assignment, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{assignment.status}</td>
        <td>{assignment.code}</td>
        <td>{assignment.name}</td>
        <td>{renderDate(assignment.pending)}</td>
        <td>{renderDate(assignment.expired)}</td>
        <td>
          <Button onClick={() => handleUpdate(assignment)}>
            <FiEdit className="icons" />
          </Button>
        </td>
        <td>
          <Button
            onClick={() =>
              downloadImage(assignment.attachFile, assignment.name)
            }
          >
            <GrDownload className="icons" />
          </Button>
        </td>
        <td>
          <Button onClick={() => handleViewDetail(assignment)}>
            <BsInfoLg className="icons" />
          </Button>
        </td>
        <td>
          <Button onClick={() => handleSubmitScored(assignment)}>
            <TiUploadOutline className="icons" />
          </Button>
        </td>
      </tr>
    );
  });

  const handleSubmitScored = (assignment_info) => {
    console.log("nhập điểm cho bài tập", assignment_info);
  };
  return (
    <div className="details">
      <Table className="details_table" bordered hover striped>
        <thead>
          <tr>
            <th>STT</th>
            <th>Trạng thái</th>
            <th>Mã bài tập</th>
            <th>Tên bài tập</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
            {/* <th>Hệ số</th> */}
            <th>Sửa </th>
            <th>Tải bài tập</th>
            <th>Chi tiết</th>
            <th>Nhập điểm</th>
          </tr>
        </thead>
        <tbody>{renderAssignments}</tbody>
      </Table>
      <Button onClick={() => handleAddNew()}>Thêm bài tập mới</Button>
      <ModalAddAssignment show={showAdd} onShow={onShowAdd} />
      <ModalEditAssignment
        show={showEdit}
        onShow={onShowEdit}
        assignment_info={infoDetails}
      />
      <ModalDetailAssignment
        show={showDetail}
        onShow={onShowDetail}
        assignment_info={infoDetails}
      />
    </div>
  );
}

export default TeacherAssignment;
