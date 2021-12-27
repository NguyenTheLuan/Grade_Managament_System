import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function TeacherAssignment() {
  const { id } = useParams();

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
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  return <div>trang quanr lý assignment</div>;
}

export default TeacherAssignment;
