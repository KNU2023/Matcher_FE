import DialogBox from "../../molecules/box/DialogBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import TitleboxModalText from "../../molecules/text/TitleboxModalText";
import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import ButtonMail from "../button/ButtonMail";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonComment from "../button/ButtonComment";
import CommentInput from "../../molecules/input/CommentInput";
import CommentContentBox from "./CommentContentBox";

const ModalJobpostDialogBox = ({ closeModal, id, title, name, date, content, commentList }) => {
    //console.log(commentList.map(item => console.log("item", item.id)));
    // const comments = commentList;

    // console.log("hello",data)
    // console.log("id값", data.id);
    //console.log("id값", id);

    // 댓글
    // const [comment, setComment] = useState('');
    // const CommentChange = (e) => {
    //     setComment(e.target.value);
    // }
    // //console.log(comment);

    // const onClickComment = async () => {

    //     try {
    //         const accessToken = localStorage.getItem("accessToken");
    //         // const jobpostId = data.id;

    //         //console.log(accessToken);
    //         const response = await axios.post(`/api/jobpost/${id}/comment`, { id: id, content: comment }, {
    //             headers: {
    //                 'Authorization': accessToken,
    //             },
    //         });

    //         console.log(response);
    //     } catch (error) {
    //         console.error('Error fetching user data:', error);
    //     }
    // };

    return (
        <>
            <DialogBox>
                <Xbox>
                    <IoMdCloseCircle size="25" color="#03C75A" cursor="pointer" onClick={closeModal} />
                </Xbox>
                <TitleboxModalText margin="0px 0px 13px 0px" justifyContent="left" content={title} />
                <TitleboxModalSecondText margin="0px 0px 13px 0px" size="16px" color="#757575" content={name} />
                <TitleboxModalSecondText margin="0px 0px 10px 0px" size="12px" color="#757575" content={date} />
                <StyleLine />
                <BoxWrapper>
                    <ContentWrapper>
                        {content}
                    </ContentWrapper>
                    {commentList.map((comment) => (
                        <CommentContentBox
                            key={comment.id}
                            id={comment.id}
                            // 다른 필요한 데이터도 전달할 수 있음
                            content={comment.content}
                            date={comment.date}
                            author={comment.author}
                        />
                    ))}
                </BoxWrapper>
                <ButtonWrapper>
                    <CommentInput type="text" placeholder="댓글을 입력해주세요." onChange={CommentChange} />
                    <ButtonComment onClick={onClickComment} />
                    <ButtonMail />
                </ButtonWrapper>
            </DialogBox>
        </>
    )
};

const Xbox = styled.div`
    height: 38px;
    display: flex;
    justify-content: flex-end;
`;

const StyleLine = styled.div`
    width: 539px;
    height: 1px;
    background-color: #e3e5e8;
`;

const BoxWrapper = styled.div`
    width: 539px;
    height: 344px;
    padding: 18px 0px 18px 0px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px; /* Width of scrollbar */
        height: 0px; /* Set to 0 for horizontal scrollbar */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #C0C0C0; /* Scrollbar color */
        border-radius: 4px; /* Round the corners of the scrollbar */
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* Color of scrollbar track */
    }
`;

const ContentWrapper = styled.div`
    width: 539px;
    height: 260px;
`;

const CommentWrapper = styled.div`
    width: 539px;
    height: 64px;
    border-top: 1px solid #E7E8EB;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;


export default ModalJobpostDialogBox;