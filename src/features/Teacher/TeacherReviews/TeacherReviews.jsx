import userApi from "apis/userApi";
import { checkComplete } from "components/common";
import ModalTeacherCompleteReview from "components/common/Modals/Reviews/ModalTeacherCompleteReview";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { MdTaskAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
//css
import "style/ReviewsDetail.scss";

function TeacherReviews() {
  const navigate = useNavigate();
  //Để search
  const [complete, setComplete] = useState(false);
  const [sort, setSort] = useState("title_asc");

  //reviews
  const [review, setReview] = useState();

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

  //modal finish
  const [showComplete, setShowComplete] = useState();
  const [infoReview, setInfoReview] = useState();

  const handleCompleteReview = (review) => {
    setInfoReview(review);
    setShowComplete(true);
  };
  const onShowComplete = (isShow) => {
    setShowComplete(isShow);
    getAllReviews();
  };

  const renderReviews = review?.map((review, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{checkComplete(review.complete)}</td>
        {/* is new message?? */}
        {review.teacherReply ? (
          <td className="detailReview" onClick={() => goToDetail(review)}>
            {review.title}
          </td>
        ) : (
          <td
            className="detailReview"
            style={{ color: "red" }}
            onClick={() => goToDetail(review)}
          >
            {review.title}
          </td>
        )}
        <td>
          <Button onClick={() => handleCompleteReview(review)}>
            <MdTaskAlt className="icons" />
          </Button>
        </td>
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
            <th>Trạng thái</th>
            <th>Tiêu đề</th>
            <th>Xác nhận hỗ trợ</th>
          </tr>
        </thead>
        <tbody>{renderReviews}</tbody>
      </Table>
      <ModalTeacherCompleteReview
        show={showComplete}
        onShow={onShowComplete}
        info={infoReview}
      />
    </div>
  );
}

export default TeacherReviews;
