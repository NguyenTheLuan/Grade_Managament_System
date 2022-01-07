import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function StudentCourseAssignments() {
  const { id } = useLocation();

  useEffect(() => {
    getAssignment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAssignment = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_MyAssignments(params);
      console.log(response);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  return <div>trang bai tap ne</div>;
}
export default StudentCourseAssignments;
