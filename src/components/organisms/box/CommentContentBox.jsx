import CommentBox from "../../molecules/box/CommentBox";
import Smalltitle from "../../molecules/text/Smalltitle";
import styled from "styled-components";

const CommentContentBox = ({ content, date, author }) => {

    const originalDate = date;
    const regex = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})/;
    const match = originalDate.match(regex);

    if (match) {
        const extractedDate = match[1];
        console.log(extractedDate);
    } else {
        console.log("일치하는 패턴을 찾을 수 없습니다.");
    }

    return (
        <CommentBox>
            <CommentWrapper>
                <Smalltitle content={author.email} />
                <Smalltitle content={content} />
                <Smalltitle content={match[1]} />
            </CommentWrapper>
        </CommentBox>
    )
};

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export default CommentContentBox;