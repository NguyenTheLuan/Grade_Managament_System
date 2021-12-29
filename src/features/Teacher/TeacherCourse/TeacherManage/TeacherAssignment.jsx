import userApi from "apis/userApi";
import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

//icons
import { BsInfoLg } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { GrDownload } from "react-icons/gr";
import { useParams } from "react-router-dom";

function TeacherAssignment() {
  const { id } = useParams();

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    getAssignments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAssignments = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_TeacherAssignments(params);
      const { result } = response;
      console.log(result);
      setAssignments(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const downloadImage = (linkHref, assignment_name) => {
    let fileName = linkHref.split(".");
    fileName = fileName[fileName.length - 1];

    saveAs(`${linkHref}`, `${assignment_name}.${fileName}`);
  };

  const renderAssignments = assignments.map((assignment, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{assignment.status}</td>
        <td>{assignment.code}</td>
        <td>{assignment.name}</td>
        <td></td>
        <td>
          <Button onClick={() => handleUpdate(assignment.code)}>
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
          <Button onClick={() => handleViewDetail(assignment.code)}>
            <BsInfoLg className="icons" />
          </Button>
        </td>
      </tr>
    );
  });

  const handleUpdate = (id) => {
    console.log("tieens thanh update bt", id);
  };
  const handleViewDetail = (id) => {
    console.log("tieens thanh xem thong tin chi tiet", id);
  };
  const handleAddNew = () => {
    console.log("tieens thanh them bt");
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
            <th>Hệ số</th>
            <th>Sửa thông tin bài tập</th>
            <th>Tải bài tập</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>{renderAssignments}</tbody>
      </Table>
      <Button onClick={() => handleAddNew()}>Thêm bài tập mới</Button>
    </div>
  );
}

export default TeacherAssignment;
