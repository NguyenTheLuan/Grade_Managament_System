import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function TeacherScored() {
  const { id } = useParams();

  useEffect(() => {
    getGrades();
  }, []);

  const getGrades = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_TeacherGrades(params);
      console.log(response);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  return <div>qunar lý diem</div>;
}
export default TeacherScored;
