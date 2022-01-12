import userApi from "apis/userApi";
import { renderDateCreateAt } from "components/common";
import ModalTeacherReply from "components/common/Modals/Reviews/ModalTeacherReply";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

function StudentReviewDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  //reviews
  const [review, setReview] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    getReviewById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getReviewById = async () => {
    const params = { id: id };
    try {
      const response = await userApi.get_AllReviews(params);
      //   console.log(response);
      setResult(response.result[0]);
      setReview(response.result[0].comments);
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };

  //modal reply

  const [showReply, setShowReply] = useState(false);

  const onShowReply = (isShow) => {
    getReviewById();
    setShowReply(isShow);
  };
  const handleReply = () => {
    setShowReply(true);
  };

  const renderReviews = review?.map((review, index) => {
    return (
      <div className="review" key={index}>
        <div className="review_name">
          <strong>{review.name} </strong>
          <i style={{ fontSize: "14px" }}>
            lúc {renderDateCreateAt(review.createAt)}
          </i>
        </div>
        {/* <div className="review_time"></div> */}
        <div className="review_message">{review.content}</div>
      </div>
    );
  });

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="detailReviews">
      <div className="detailReviews_header" onClick={() => handleGoBack()}>
        <MdArrowBack className="icons" />
        Quay lại
      </div>
      <div className="detailReviews_content">
        <div className="titleReview">Nội dung hỗ trợ</div>
        <div className="titleContent">{renderReviews}</div>
      </div>
      {!result?.complete ? (
        <Button onClick={() => handleReply()}>Phản hồi tin nhắn</Button>
      ) : (
        <Button disabled>Đã hoàn thành</Button>
      )}
      <ModalTeacherReply show={showReply} onShow={onShowReply} info={result} />
    </div>
  );
}

export default StudentReviewDetail;
