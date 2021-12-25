/* eslint-disable react-hooks/exhaustive-deps */
import userApi from "apis/userApi";
import iconUser from "assets/icons/user.png";
// import { iconUser } from "assets";
import { checkGender, checkInfo } from "components/common";
import ModalUpdateInfo from "components/common/Modals/ModalUpdateInfo";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, selectUserInfo } from "reducers/userSlice";
import "./UserProfile.scss";

function StudentProfile() {
  const dispatch = useDispatch();

  const selectUser = useSelector(selectUserInfo);

  const [userInfo, setUserInfo] = useState(null);

  //handle modal
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const onShow = (isShow) => {
    getMyInfo();
    setShow(isShow);
  };

  //Call to get user info
  useEffect(() => {
    getMyInfo();
  }, []);

  //Render
  useEffect(() => {
    renderInfo();
  }, [userInfo, selectUser]);

  //Get info from API
  const getMyInfo = async () => {
    try {
      const response = await userApi.getInfoUser();
      const { user } = response;
      setUserInfo(user);
      //Set to redux
      dispatch(getUserInfo(user));
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  //Render user info
  const renderInfo = () => {
    if (!userInfo) return;
    else {
      return (
        <>
          <ul className="infoUser_item">
            <li>Mã học viên:</li>
            <li className="valueInfo">{checkInfo(userInfo.studentId)}</li>
          </ul>
          <ul className="infoUser_item">
            <li>Họ và tên:</li>
            <li className="valueInfo">{checkInfo(userInfo.fullName)}</li>
          </ul>
          <ul className="infoUser_item">
            <li>Ngày sinh nhật:</li>
            <li className="valueInfo">{checkInfo(userInfo.birthday)}</li>
          </ul>
          <ul className="infoUser_item">
            <li>Giới tính:</li>
            <li className="valueInfo">{checkGender(userInfo.gender)}</li>
          </ul>
          <ul className="infoUser_item">
            <li>Số điện thoại:</li>
            <li className="valueInfo">{checkInfo(userInfo.phone)}</li>
          </ul>
        </>
      );
    }
  };

  return (
    <div className="contentInfo">
      <div className="imgUser">
        <img className="img" src={iconUser} alt="userIMG" />
      </div>
      <div className="infoUser">{renderInfo()}</div>
      <div className="infoHandle">
        <Button onClick={() => handleShow()}>Cập nhật thông tin</Button>
        <Button variant="danger">Gửi phản ánh</Button>
      </div>
      <ModalUpdateInfo show={show} onShow={onShow} />
    </div>
  );
}

export default StudentProfile;
