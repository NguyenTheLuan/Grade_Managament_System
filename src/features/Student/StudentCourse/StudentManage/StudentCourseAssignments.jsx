import userApi from "apis/userApi";
import React from "react";
import { saveAs } from "file-saver";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//icons
import { BsInfoLg } from "react-icons/bs";
import { TiUploadOutline } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { GrDownload } from "react-icons/gr";
import { checkAssigment, renderDate } from "components/common";
import { Button, Table } from "react-bootstrap";
import ModalDetailAssignment from "components/common/Modals/TeacherManage/Assignments/ModalDetailAssignment";
function StudentCourseAssignments() {
  const { id } = useLocation();

  const [assignments, setAssignments] = useState([]);
  const [infoDetails, setInfoDetails] = useState();

  useEffect(() => {
    getAssignments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAssignments = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_MyAssignments(params);
      // console.log(response);
      const { result } = response;
      // console.log(result);
      setAssignments(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  //Modal View Details Assignment
  const [showDetail, setShowDetail] = useState(false);
  const onShowDetail = (isShow) => {
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
    if (fileName === "jpg" || fileName === "png" || fileName === "txt") {
      saveAs(`${linkHref}`, `${assignment_name}.${fileName}`);
    } else if (
      fileName === "pdf" ||
      fileName === "xls" ||
      fileName === "xlsx"
    ) {
      window.location = linkHref;
    } else {
      console.log("chưa có file đuôi", fileName, linkHref);
      return;
    }
  };

  const renderAssignments = assignments.map((assignment, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{checkAssigment(assignment.status)}</td>
        {/* <td>{assignment.code}</td> */}
        <td>{assignment.name}</td>
        <td>{renderDate(assignment.pending)}</td>
        <td>{renderDate(assignment.expired)}</td>
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
      </tr>
    );
  });
  return (
    <div className="details">
      <Table className="details_table" bordered hover striped>
        <thead>
          <tr>
            <th>STT</th>
            <th>Trạng thái</th>
            {/* <th>Mã bài tập</th> */}
            <th>Tên bài tập</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
            <th>Tải bài tập</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>{renderAssignments}</tbody>
      </Table>
      <ModalDetailAssignment
        show={showDetail}
        onShow={onShowDetail}
        assignment_info={infoDetails}
      />
    </div>
  );
}
export default StudentCourseAssignments;
