import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TeacherCourseId() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("details");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}

export default TeacherCourseId;
