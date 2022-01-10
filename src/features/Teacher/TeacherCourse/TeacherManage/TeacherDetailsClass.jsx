import userApi from "apis/userApi";
import {
  checkActive,
  checkComplete,
  checkInfo,
  checkJoin,
} from "components/common";
import ExportToExcel from "components/common/ExportExcel";
import ModalUploadClass from "components/common/Modals/TeacherManage/GradeStruct/ModalUploadClass/ModalUploadClass";
import ModalTeacherMarkClass from "components/common/Modals/TeacherManage/ModalTeacherMarkClass";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function TeacherDetailsClass() {
  const { id } = useParams();

  //for upload
  const [showUpload, setShowUpload] = useState(false);

  const handleShow = () => {
    setShowUpload(true);
  };
  const onShowUpload = (isShow) => {
    getClassDetail();
    setShowUpload(isShow);
  };
  //for mark final
  const [showMark, setShowMark] = useState(false);

  const handleMark = () => {
    setShowMark(true);
  };
  const onShowMark = (isShow) => {
    getClassDetail();
    setShowMark(isShow);
  };

  const [students, setStudents] = useState(null);
  // const [gradeStruct, setGradeStruct] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    getClassDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getClassDetail = async () => {
    try {
      const response = await userApi.get_myClassDetail(id);
      const { result } = response;
      const { students } = result;
      // console.log(response);
      setStudents(students);
      // setGradeStruct(gradeStruct);
      setResult(result);
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
        <td>{checkJoin(student.joined)}</td>
      </tr>
    );
  });

  const renderInfoClass = () => {
    return (
      <ul>
        <li>
          Mã lớp: <strong>{result?.code}</strong>
        </li>
        <li>
          Lớp học: <strong>{result?.name}</strong>
        </li>
        <li>
          Tên giảng viên: <strong>{result?.teacher}</strong>
        </li>
        <li>
          Số điện thoại: <strong>{checkInfo(result?.phone)}</strong>
        </li>
        <li>
          Trạng thái: <strong>{checkActive(result?.active)}</strong>
        </li>
        <li>
          Hoàn thành: <strong>{checkComplete(result?.complete)}</strong>
        </li>
      </ul>
    );
  };

  return (
    <div className="details">
      {/* <legend className="details_tilte">Thông tin lớp</legend> */}
      <div className="details_class">
        {renderInfoClass()}
        <div className="handleBtn">
          <Button onClick={() => handleShow()}>Cập nhật danh sách</Button>
          {/* <Button variant="success">Xuất file excel</Button> */}
          <ExportToExcel
            dataSheet={students}
            nameButton="học viên"
            nameSheet="Danh sách học viên"
            nameFile="Danh sách học viên"
          />
          <Button variant="secondary" onClick={() => handleMark()}>
            Kết thúc khóa học
          </Button>
        </div>
      </div>

      {/* <legend className="details_tilte">Thông tin học viên</legend> */}
      <Table className="details_table" bordered hover striped>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Tên SV</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>{renderStudents}</tbody>
      </Table>
      <ModalUploadClass
        show={showUpload}
        onShow={onShowUpload}
        infoClass={result}
      />
      <ModalTeacherMarkClass show={showMark} onShow={onShowMark} />
    </div>
  );
}

export default TeacherDetailsClass;
