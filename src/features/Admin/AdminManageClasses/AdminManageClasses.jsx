import adminApi from "apis/adminApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

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
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  return <div>quản lý lớp học</div>;
}

export default AdminManageClasses;
