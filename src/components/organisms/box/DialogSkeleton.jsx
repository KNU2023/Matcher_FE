import SkeletonBox from "../../molecules/skeleton/SkeletonBox";
import ContentBox from "../../molecules/box/ContentBox";

const DialogSkeleton = ({ openModal }) => {
  return (
    <>
      <ContentBox onClick={openModal}>
        <SkeletonBox
          height="70px"
          width="70px"
          margin="0px 0px 10px 0px"
          padding="0px"
        />
        <SkeletonBox
          height="15px"
          width="134px"
          borderRadius="4px"
          margin="0px 0px 4px 0px"
          padding="0px"
        />
        <SkeletonBox
          height="10px"
          width="50px"
          borderRadius="3px"
          margin="0px 0px 4px 0px"
          padding="0px"
        />
        <SkeletonBox
          height="10px"
          width="134px"
          borderRadius="3px"
          margin="0px 0px 0px 0px"
          padding="0px"
        />
      </ContentBox>
    </>
  );
};

export default DialogSkeleton;
