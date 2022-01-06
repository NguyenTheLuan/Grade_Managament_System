import adminApi from "apis/adminApi";
import { checkActive, checkRole } from "components/common";
import ModalAccountDetail from "components/common/Modals/AdminManage/Accounts/ModalAccountDetail ";
import ModalAccountUpdate from "components/common/Modals/AdminManage/Accounts/ModalAccountUpdate";
import ModalLockAccount from "components/common/Modals/AdminManage/Accounts/ModalLockAccount";
import ModalUnlockAccount from "components/common/Modals/AdminManage/Accounts/ModalUnlockAccount";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
//icons
import { BsFillLockFill, BsInfoLg, BsFillUnlockFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
//style css
import "../AdminDetails.scss";

function Accounts() {
  //to search
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState("true");

  const [accounts, setAccounts] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    getAccounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, email, active]);

  //Modal lock account
  const [showLock, setLock] = useState(false);
  const [info, setInfo] = useState();

  const handleLock = (info) => {
    setInfo(info);
    setLock(true);
  };
  const onShowLock = (isShow) => {
    getAccounts();
    setLock(isShow);
  };

  //Modal unlock account
  const [showUnlock, setUnlock] = useState(false);
  const handleUnLock = (info) => {
    setInfo(info);
    setUnlock(true);
  };
  const onShowUnlock = (isShow) => {
    getAccounts();
    setUnlock(isShow);
  };
  //Modal update account
  const [showUpdate, setUpdate] = useState(false);
  const handleUpdate = (info) => {
    setInfo(info);
    setUpdate(true);
  };
  const onShowUpdate = (isShow) => {
    getAccounts();
    setUpdate(isShow);
  };

  // Modal detail account
  // const [showDetail, setDetail] = useState(false);
  // const handleDetail = (info) => {
  //   setInfo(info);
  //   setDetail(true);
  // };
  // const onShowDetail = (isShow) => {
  //   setDetail(isShow);
  // };

  const getAccounts = async () => {
    const params = {
      page: 1,
      limit: 5,
      role: role,
      email: email,
      active: active,
    };
    try {
      const response = await adminApi.get_Accounts(params);
      console.log(response);
      const { numOfAccount, result } = response;
      setTotal(numOfAccount);
      setAccounts(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  const renderAccounts = accounts?.map((account, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{account.email}</td>
        {/* <td>{checkInfo(account.googleId)}</td> */}
        <td>{checkRole(account.role)}</td>
        <td>{checkActive(account.active)}</td>
        <td>
          {account.active ? (
            <Button onClick={() => handleLock(account)}>
              <BsFillLockFill className="icons" />
            </Button>
          ) : (
            <Button onClick={() => handleUnLock(account)}>
              <BsFillUnlockFill className="icons" />
            </Button>
          )}
        </td>
        <td>
          <Button onClick={() => handleUpdate(account)}>
            <FiEdit className="icons" />
          </Button>
        </td>
        {/* <td>
          <Button onClick={() => handleDetail(account)}>
            <BsInfoLg className="icons" />
          </Button>
        </td> */}
      </tr>
    );
  });

  return (
    <div className="adminDetails">
      <legend className="adminDetails_title">Quản lý tài khoản</legend>

      <Form className="adminDetails_search">
        <Form.Group className="adminDetails_search_item">
          <Form.Label className="adminDetails_search_item_label">
            Địa chỉ email
          </Form.Label>
          <Form.Control
            className="adminDetails_search_item_control"
            placeholder="Nhập địa chỉ email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="adminDetails_search_item">
          <Form.Label className="adminDetails_search_item_label">
            Chức vụ
          </Form.Label>
          <Form.Select
            className="adminDetails_search_item_control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {/* <option value="">Toàn bộ</option> */}
            <option value="student">Học viên</option>
            <option value="teacher">Giảng viên</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="adminDetails_search_item">
          <Form.Label className="adminDetails_search_item_label">
            Trạng thái
          </Form.Label>
          <Form.Select
            className="adminDetails_search_item_control"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          >
            <option value="">Toàn bộ</option>
            <option value="true">Đang mở</option>
            <option value="false">Đã khóa</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <Table className="adminDetails_content" hover striped bordered>
        <thead>
          <tr>
            <th>STT</th>
            <th>Email</th>
            {/* <th>GoogleId</th> */}
            <th>Chức vụ</th>
            <th>Trạng thái</th>
            {active === "false" ? <th>Mở khóa</th> : <th>Khóa</th>}
            <th>Đổi mật khẩu</th>
            {/* <th>Chi tiết</th> */}
          </tr>
        </thead>
        <tbody>{renderAccounts}</tbody>
      </Table>

      <ModalLockAccount show={showLock} onShow={onShowLock} info={info} />
      <ModalUnlockAccount show={showUnlock} onShow={onShowUnlock} info={info} />
      <ModalAccountUpdate show={showUpdate} onShow={onShowUpdate} info={info} />
      {/* <ModalAccountDetail show={showDetail} onShow={onShowDetail} info={info} /> */}
    </div>
  );
}

export default Accounts;
