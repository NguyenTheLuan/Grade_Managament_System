import adminApi from "apis/adminApi";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

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
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  return <div>quản lý account</div>;
}

export default Accounts;
