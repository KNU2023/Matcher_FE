import SkeletonBox from "../../molecules/skeleton/SkeletonBox";
import ContentBox from "../../molecules/box/ContentBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import styled from "styled-components";
import ModalJobpostDialogBox from "./ModalJobpostDialogBox";

const DialogSkeleton = ({ data, openModal, closeModal, isModalOpen }) => {
  //console.log("jobPostId", jobPostId);\
  const jobPostId = data.id;
  // console.log("data", data);

  return (
    <>
      {/* {data.id} */}
      <ContentBox onClick={openModal}>
        <SkeletonBox
          height="70px"
          width="70px"
          margin="0px 0px 10px 0px"
          padding="0px"
        />
        <TitleboxModalSecondText content={data.title} size="14px" weight="bold" />
        <TitleboxModalSecondText content={data.author.name} size="10px" color="#757575" />
        <TitleboxModalSecondText content={data.date} size="8px" color="#757575" />
      </ContentBox>
      {isModalOpen && (
        <ModalWrapper>
          <ModalJobpostDialogBox
            openModal={openModal}
            closeModaled={closeModal}
            id={jobPostId}
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