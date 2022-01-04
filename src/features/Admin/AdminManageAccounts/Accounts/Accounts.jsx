import adminApi from "apis/adminApi";
import { checkInfo, checkRole } from "components/common";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
//icons
import { BsInfoLg } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

function Accounts() {
  const [accounts, setAccounts] = useState();
  const [total, setTotal] = useState();
  useEffect(() => {
    getAccounts();
  }, []);
  const getAccounts = async () => {
    try {
      const response = await adminApi.get_Accounts();
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
        <td>{checkInfo(account.googleId)}</td>
        <td>{checkRole(account.role)}</td>
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
    <div>
      <Table hover striped bordered>
        <thead>
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>GoogleId</th>
            <th>Chức vụ</th>
            <th>Trạng thái</th>
            <th>Chi tiết</th>
            <th>Mở-khóa tài khoản</th>
          </tr>
        </thead>
        <tbody>{renderAccounts}</tbody>
      </Table>
    </div>
  );
}

export default Accounts;
