import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentInfo() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("my_info");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}

export default StudentInfo;
