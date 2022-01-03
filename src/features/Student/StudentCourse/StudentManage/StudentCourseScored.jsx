import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function StudentCourseScored() {
  const { id } = useLocation();

  useEffect(() => {
    getMyScored();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMyScored = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_MyScoredRecord(params);
      console.log(response);
    } catch (error) {
      console.log("lỗi ròi", { error });
    }
  };
  return <div>xem diem student</div>;
}

export default StudentCourseScored;
