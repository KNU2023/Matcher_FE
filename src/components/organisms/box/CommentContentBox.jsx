import CommentBox from "../../molecules/box/CommentBox";
import Smalltitle from "../../molecules/text/Smalltitle";
import styled from "styled-components";

const CommentContentBox = ({ item }) => {

    return (
        <CommentBox>
            <CommentWrapper>
                <Smalltitle content={item.author.name} />
                <Smalltitle content={item.content} />
                <Smalltitle content={item.date} />
            </CommentWrapper>
        </CommentBox>
    )
};

const CommentWrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export default CommentContentBox;