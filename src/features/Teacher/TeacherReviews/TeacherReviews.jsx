import userApi from "apis/userApi";
import { checkComplete, renderDate } from "components/common";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
//icons
import { RiQuestionAnswerFill } from "react-icons/ri";
import { MdOutgoingMail, MdTaskAlt } from "react-icons/md";
//css
import "style/ReviewsDetail.scss";
import ModalTeacherReply from "components/common/Modals/Reviews/ModalTeacherReply";

function TeacherReviews() {
  //Để search
  const [complete, setComplete] = useState(false);
  const [sort, setSort] = useState("title_asc");

  //reviews
  const [review, setReview] = useState();

  useEffect(() => {
    getAllReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div key={index} className="review">
          <span className="name">{question.name}:</span>
          <span className="contentReview">{question.content}</span>
          <span className="time">
            <i>{renderDate(question.createAt)}</i>
          </span>
        </div>
      );
    });
  };

  const renderReviews = review?.map((review, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{review.title}</td>
        <td>{checkComplete(review.complete)}</td>
        <td className="reviews">{renderQuestion(review.comments)}</td>
        <td>
          <Button onClick={() => handleReply(review)}>
            <MdOutgoingMail className="icons" />
          </Button>
        </td>
        <td>
          <Button>
            <MdTaskAlt className="icons" />
          </Button>
        </td>
      </tr>
    );
  });

  //modal reply

  const [showReply, setShowReply] = useState(false);
  const [infoReview, setInfoReview] = useState();

  const onShowReply = (isShow) => {
    getAllReviews();
    setShowReply(isShow);
  };
  const handleReply = (review) => {
    setInfoReview(review);
    setShowReply(true);
  };
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
            <th>Nội dung</th>
            <th>Phản hồi</th>
            <th>Kết thúc</th>
          </tr>
        </thead>
        <tbody>{renderReviews}</tbody>
      </Table>
      <ModalTeacherReply
        show={showReply}
        onShow={onShowReply}
        info={infoReview}
      />
    </div>
  );
}

export default TeacherReviews;
