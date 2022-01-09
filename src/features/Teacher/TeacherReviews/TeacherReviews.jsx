import userApi from "apis/userApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function TeacherReviews() {
  const [complete, setComplete] = useState();

  useEffect(() => {
    getAllReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllReviews = async () => {
    const params = {
      page: 1,
      limit: 10,
      complete: complete,
    };
    try {
      const response = await userApi.get_AllReviews(params);
      console.log(response);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  return <div>day la trang reivew phan hoi hoc vien</div>;
}

export default TeacherReviews;
