import CommentBox from "../../molecules/box/CommentBox";
import Smalltitle from "../../molecules/text/Smalltitle";
import styled from "styled-components";

const CommentContentBox = ({ commentItem }) => {
    //{ console.log("itemid", commentItem) }
    {console.log("itemid", commentItem)}
    // {console.log("itemcontent", commentItem.content)}
    // {console.log("itemdate", commentItem.date)}

    return (
        <CommentBox>
            {commentItem.map ((item) => (
                <CommentWrapper>
                    <Smalltitle content={item.id} />
                    <Smalltitle content={item.content} />
                    <Smalltitle content={item.date} />
                </CommentWrapper>
            ))}
            {/* <CommentWrapper>
                <Smalltitle content={commentItem.id} />
                <Smalltitle content={commentItem.content} />
                <Smalltitle content={commentItem.date} />
            </CommentWrapper> */}
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