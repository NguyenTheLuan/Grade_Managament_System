import userApi from "apis/userApi";
import { checkActive } from "components/common";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function TeacherCourses() {
  const [classes, setClasses] = useState([]);
  //Call api to get classes
  useEffect(() => {
    getMyClasses();
  }, []);

  //Set and render
  useEffect(() => {
    classes && renderClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes]);

  const getMyClasses = async () => {
    const params = { page: 1, limit: 5, active: true };
    try {
      const response = await userApi.get_myClass(params);
      const { numOfClass, result } = response;
      console.log(result);
      setClasses(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const renderClasses = () => {
    if (classes.length === 0) return;
    else {
      return classes.map((classInfo, index) => {
        return (
          <div key={index}>
            <div>Mã lớp {classInfo.code}</div>
            <div>Tên lớp {classInfo.name}</div>
            <div>Trạng thái {checkActive(classInfo.active)}</div>
          </div>
        );
      });
    }
  };

  return <div>{renderClasses()}</div>;
}

export default TeacherCourses;
