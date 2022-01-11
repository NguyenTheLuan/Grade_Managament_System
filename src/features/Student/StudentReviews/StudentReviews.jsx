import userApi from "apis/userApi";
import { checkComplete } from "components/common";
import ModalStudentPostReview from "components/common/Modals/Reviews/ModalStudentPostReview";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//css
import "style/ReviewsDetail.scss";
function StudentReviews() {
  const navigate = useNavigate();
  //Để search
  const [complete, setComplete] = useState(false);
  const [sort, setSort] = useState("title_asc");

  //reviews
  const [review, setReview] = useState();

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
  }, [complete, sort]);

  const getAllReviews = async () => {
    const params = {
      page: 1,
      limit: 10,
      complete: complete,
      sort: sort,
    };
    try {
      const response = await userApi.get_AllReviews(params);
      console.log(response);
      const { result } = response;
      setReview(result);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  const goToDetail = (review) => {
    navigate(`${review._id}`);
  };

  const renderReviews = review?.map((review, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        {review.teacherReply ? (
          <td className="detailReview" onClick={() => goToDetail(review)}>
            {review.title}
          </td>
        ) : (
          <td style={{ color: "red" }}>{review.title}</td>
        )}

        <td>{checkComplete(review.complete)}</td>
      </tr>
    );
  });

  return (
    <div className="details">
      <Form className="details_form">
        <Form.Group className="details_form_items">
          <Form.Label className="details_form_items_label">
            Trạng thái
          </Form.Label>
          <Form.Select
            className="details_form_items_select"
            value={complete}
            onChange={(e) => setComplete(e.target.value)}
          >
            <option value="false">Đang xét</option>
            <option value="true">Đã hoàn thành</option>
          </Form.Select>
          <Form.Select
            className="details_form_items_select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="title_asc">Tăng dần</option>
            <option value="title_desc">Giảm dần</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Table className="details_table" bordered striped hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>{renderReviews}</tbody>
      </Table>
      <Button onClick={() => handleAddNew()}>Tạo yêu cầu mới</Button>
      <ModalStudentPostReview show={showAdd} onShow={onShowAdd} />
    </div>
  );
}

export default StudentReviews;
