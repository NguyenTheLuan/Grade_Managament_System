import adminApi from "apis/adminApi";
import { checkActive, checkComplete, checkInfo } from "components/common";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";

function AdminManageClasses() {
  const [classes, setClasses] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    getClasses();
  }, []);
  const getClasses = async () => {
    try {
      const response = await adminApi.get_Classes();
      console.log(response);
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
        <td>{classItem.teacher}</td>
        <td>{checkInfo(classItem.phone)}</td>
        <td>
          <Button>Chi tiết</Button>
        </td>
        <td>
          <Button>Cập nhật</Button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã lớp</th>
            <th>Tên lớp</th>
            <th>Trạng thái</th>
            <th>Hoàn thành</th>
            <th>Giảng viên</th>
            <th>Số điện thoại</th>
            <th>Chi tiết</th>
            <th>Cập nhật</th>
          </tr>
        </thead>
        <tbody>{renderClass}</tbody>
      </Table>
    </div>
  );
}

export default AdminManageClasses;
