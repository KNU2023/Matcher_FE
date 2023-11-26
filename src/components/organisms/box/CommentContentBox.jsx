import CommentBox from "../../molecules/box/CommentBox";
import Smalltitle from "../../molecules/text/Smalltitle";
import styled from "styled-components";

const CommentContentBox = ({ content, date, author }) => {

    return (
        <CommentBox>
            <CommentWrapper>
                <Smalltitle content={author.email} />
                <Smalltitle content={content} />
                <Smalltitle content={date} />
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