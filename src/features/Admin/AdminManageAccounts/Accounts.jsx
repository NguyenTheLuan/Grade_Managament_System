import adminApi from "apis/adminApi";
import { checkActive, checkRole } from "components/common";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
//icons
import { BsInfoLg } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
//style css
import "../AdminDetails.scss";

function Accounts() {
  //to search
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(true);

  const [accounts, setAccounts] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    getAccounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, email, active]);

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
          <Button onClick={() => handleDetails(account)}>
            <BsInfoLg className="icons" />
          </Button>
        </td>
        <td>
          <Button onClick={() => handleUpdate(account)}>
            <FiEdit className="icons" />
          </Button>
        </td>
      </tr>
    );
  });

  const handleDetails = (id) => {
    console.log("xem chi tiết", id);
  };
  const handleUpdate = (id) => {
    console.log("cập nhật thông tin", id);
  };

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
            <option value="student">Học viên</option>
            <option value="teacher">Giảng viên</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="adminDetails_search_item">
          <Form.Label className="adminDetails_search_item_label">
            Chức vụ
          </Form.Label>
          <Form.Select
            className="adminDetails_search_item_control"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          >
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
            <th>Chi tiết</th>
            <th>Mở-khóa</th>
          </tr>
        </thead>
        <tbody>{renderAccounts}</tbody>
      </Table>
    </div>
  );
}

export default Accounts;
