import userApi from "apis/userApi";
import React, { useEffect, useState } from "react";

function StudentProfile() {
  const [userInfo, setUserInfo] = useState(null);
  //Get user info
  useEffect(() => {
    getMyInfo();
  });

  useEffect(() => {
    userInfo && renderInfo();
  }, [userInfo]);

  //Get info from API
  const getMyInfo = async () => {
    try {
      const response = await userApi.getInfo();
      const { user } = response;
      setUserInfo(user);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  //Render user info
  const renderInfo = () => {
    if (!userInfo) return;
    else {
      return (
        <div>
          <div>Mã học viên {userInfo.studentId}</div>
          <div>Họ và tên {userInfo.fullName}</div>
          <div>Giới tính {userInfo.gender}</div>
          <div>Số điện thoại {userInfo.phone}</div>
          <div>Ngày sinh nhật {userInfo.birthday}</div>
          <div></div>
        </div>
      );
    }
  };

  return <div>{renderInfo()}</div>;
}

export default StudentProfile;
