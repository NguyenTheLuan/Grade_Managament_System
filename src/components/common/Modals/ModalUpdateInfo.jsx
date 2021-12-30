import userApi from "apis/userApi";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectUserInfo } from "reducers/userSlice";

function ModalUpdateInfo({ show, onShow }) {
  const userInfo = useSelector(selectUserInfo);
  //set info to update
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    if (!userInfo) return;
    else {
      setGender(userInfo.gender);
      setBirthday(userInfo.birthday);
      setFullName(userInfo.fullName);
      setPhone(userInfo.phone);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const handleClose = () => {
    onShow(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUpdate = async () => {
    await updateInfo();
    onShow(!show);
  };

  const updateInfo = async () => {
    const params = {
      fullName: fullName,
      birthday: birthday,
      phone: phone,
      gender: gender,
    };
    try {
      const response = await userApi.updateInfo(params);
      console.log(response);
      toast.success("Cập nhật thông tin thành công", {
        position: "bottom-right",
      });
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật thông tin cá nhân</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control
              value={fullName}
              type="text"
              name="fullName"
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ngày sinh</Form.Label>
            <Form.Control
              value={birthday}
              type="date"
              name="birthday"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Giới tính</Form.Label>
            <Form.Select
              value={gender}
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value={true}>Nam</option>
              <option value={false}>Nữ</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              value={phone}
              type="text"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => handleUpdate()}>
          Cập nhật thông tin
        </Button>
        <Button variant="secondary" onClick={() => handleClose()}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateInfo;
