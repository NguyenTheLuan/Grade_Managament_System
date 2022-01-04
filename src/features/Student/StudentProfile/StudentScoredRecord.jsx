import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";

function StudentScoredRecord() {
  useEffect(() => {
    getMyScoredRecord();
  }, []);

  const getMyScoredRecord = async () => {
    try {
      const response = await userApi.get_MyScoredRecord();
      console.log(response);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  return <div>trang xem điểm</div>;
}

export default StudentScoredRecord;
