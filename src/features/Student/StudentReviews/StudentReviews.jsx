import userApi from "apis/userApi";
import ModalStudentPostReview from "components/common/Modals/Reviews/ModalStudentPostReview";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";

function StudentReviews() {
  const [complete, setComplete] = useState(false);

  //Modal Add New Assignment
  const [showAdd, setShowAdd] = useState(false);

  const onShowAdd = (isShow) => {
    getAllReviews();
    setShowAdd(isShow);
  };
  const handleAddNew = () => {
    setShowAdd(true);
  };

  useEffect(() => {
    getAllReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllReviews = async () => {
    const params = {
      page: 1,
      limit: 10,
      complete: complete,
    };
    try {
      const response = await userApi.get_AllReviews(params);
      console.log(response);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  return (
    <div className="details">
      <Table className="details_table" bordered striped hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Gi gi do</th>
          </tr>
        </thead>
      </Table>
      <Button onClick={() => handleAddNew()}>Tạo yêu cầu mới</Button>
      <ModalStudentPostReview show={showAdd} onShow={onShowAdd} />
    </div>
  );
}

export default StudentReviews;
