import userApi from "apis/userApi";
import { checkActive } from "components/common";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function StudentCourses() {
  const [classes, setClasses] = useState([]);
  //Call api to get classes
  useEffect(() => {
    getMyCourses();
  }, []);

  //Set and render
  useEffect(() => {
    classes && renderCourses();
    console.log(classes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes]);

  const getMyCourses = async () => {
    const params = { page: 1, limit: 5, active: true };
    try {
      const response = await userApi.get_myCourses(params);
      const { classRecord, studentId } = response.myCourses;
      setClasses(classRecord);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  const renderCourses = () => {
    if (classes.length === 0) return "Chưa tham gia lớp nào";
    else {
      return classes.map((classInfo, index) => {
        return (
          <div key={index}>
            <div>Tên lớp {classInfo.className}</div>
            <div>Mã lớp {classInfo.classCode}</div>
          </div>
        );
      });
    }
  };
  return <div>{renderCourses()}</div>;
}

export default StudentCourses;
