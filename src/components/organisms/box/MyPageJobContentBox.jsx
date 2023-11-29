import MyPageContentBox from "../../molecules/box/MyPageContentBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import styled from "styled-components";

const MyPageJobContentBox = ({ title, date, jobPostId, author }) => {
    return (
        <>
            <MyPageContentBox>
                <ContentWrapper>
                    <TitleboxModalSecondText content={title} size="8" weight="bold" />
                    <TitleboxModalSecondText content={date} size="8" weight="bold" />
                </ContentWrapper>
            </MyPageContentBox>
        </>
    )
}

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

export default MyPageJobContentBox;