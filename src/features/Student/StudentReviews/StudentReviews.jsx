import userApi from "apis/userApi";
import { checkComplete, renderDate } from "components/common";
import ModalStudentPostReview from "components/common/Modals/Reviews/ModalStudentPostReview";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
//css
import "style/ReviewsDetail.scss";
function StudentReviews() {
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

  const renderQuestion = (questions) => {
    return questions.map((question, index) => {
      return (
        <span key={index}>
          <strong>{index + 1}.</strong> {question.content} vào lúc
          {renderDate(question.createAt)}
        </span>
      );
    });
  };

  const renderReviews = review?.map((review, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{review.title}</td>
        <td className="reviews">{renderQuestion(review.comments)}</td>
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
            <th>Nội dung</th>
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
