import SkeletonBox from "../../molecules/skeleton/SkeletonBox";
import ContentBox from "../../molecules/box/ContentBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";

const DialogSkeleton = ({ data, openModal }) => {
  return (
    <>
      <ContentBox onClick={openModal}>
        <SkeletonBox
          height="70px"
          width="70px"
          margin="0px 0px 10px 0px"
          padding="0px"
        />
        <TitleboxModalSecondText content={data.title} size="14px" weight="bold"/>
        <TitleboxModalSecondText content={data.author.name} size="10px" color="#757575"/>
        <TitleboxModalSecondText content={data.date} size="8px" color="#757575"/>
        {/* <SkeletonBox
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
        /> */}
      </ContentBox>
    </>
  );
};

export default DialogSkeleton;
