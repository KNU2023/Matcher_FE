import SkeletonBox from "../../molecules/skeleton/SkeletonBox";
import ContentBox from "../../molecules/box/ContentBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import styled from "styled-components";
import ModalJobpostDialogBox from "./ModalJobpostDialogBox";
import Img from "../../atoms/img/Img";
import { useState } from "react";
import axios from "axios";

const DialogSkeleton = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [jobPostId, setJobPostId] = useState(null);
  const [jobPostTitle, setJobPostTitle] = useState(null);
  const [jobPostName, setJobPostName] = useState(null);
  const [jobPostdate, setJobPostdate] = useState(null);
  const [jobPostContent, setJobPostContent] = useState(null);
  const [jobPostCommentList, setJobPostCommentList] = useState([]);
  const jobPostImage = data.image;
  console.log("jobPostImage", data);


  const openModal = async () => {
    setModalOpen(true);
    try {
      const accessToken = localStorage.getItem("accessToken");
      //console.log(accessToken);
      const response = await axios.get(`/api/jobpost/${data.id}`, {
        headers: {
          'Authorization': accessToken,
        },
      });

      // 가져온 데이터를 state에 저장
      // console.log("jobModal", response.data);
      setJobPostId(response.data.id);
      setJobPostTitle(response.data.title);
      setJobPostName(response.data.author.name);
      setJobPostdate(response.data.date);
      setJobPostContent(response.data.content);
      setJobPostCommentList(response.data.commentList);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <ContentBox onClick={openModal}>
        <ImgWrapper>
          {data.image.length > 0 ? (
            <Img
              height="70px"
              width="70px"
              margin="0px 0px 10px 0px"
              fontsize="11px"
              src={`http://localhost:8080${jobPostImage[0]}`}
              alt={jobPostImage}
            />
          ) : (
            <SkeletonBox
              height="70px"
              width="70px"
              margin="0px 0px 10px 0px"
              padding="0px"
            />
          )}

        </ImgWrapper>
        <TitleboxModalSecondText content={data.title} size="14px" weight="bold" />
        <TitleboxModalSecondText content={data.author.name} size="10px" color="#757575" />
        <TitleboxModalSecondText content={data.date} size="8px" color="#757575" />
      </ContentBox>
      {/* {console.log("커멘트", jobPostCommentList)} */}
      {isModalOpen && (
        <ModalWrapper>
          <ModalJobpostDialogBox
            closeModal={closeModal}
            id={jobPostId}
            title={jobPostTitle}
            name={jobPostName}
            date={jobPostdate}
            content={jobPostContent}
            commentList={jobPostCommentList}
          />
        </ModalWrapper>
      )}
    </>
  );
};

export default DialogSkeleton;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

const ImgWrapper = styled.div`
  height: 70px;
  width: 70px;
`;