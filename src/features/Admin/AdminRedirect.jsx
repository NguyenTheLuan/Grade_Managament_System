import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("accounts");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}

export default AdminRedirect;
