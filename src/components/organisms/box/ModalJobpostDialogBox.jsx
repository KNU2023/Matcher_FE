import DialogBox from "../../molecules/box/DialogBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import TitleboxModalText from "../../molecules/text/TitleboxModalText";
import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import ButtonMail from "../button/ButtonMail";
import { useState, useEffect } from "react";
import axios from "axios";
import ButtonComment from "../button/ButtonComment";
import CommentInput from "../../molecules/input/CommentInput";
import CommentContentBox from "./CommentContentBox";

const ModalJobpostDialogBox = ({ closeModal, id, title, name, date, content, commentList }) => {
    //console.log(id);

    const [commentContent, setCommentContent] = useState('');
    const [jobPostCommentList, setJobPostCommentList] = useState(commentList);

    const fetchJobPostComments = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.get(`/api/jobpost/${id}`, {
                headers: {
                    'Authorization': accessToken,
                },
            });

            setJobPostCommentList(response.data.commentList.map(comment => ({ ...comment, jobPostId: response.data.id })));

        } catch (error) {
            console.error('Error fetching job post comments:', error);
        }
    };

    const onClickComment = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const commentData = {
                content: commentContent,
            };

            const response = await axios.post(`/api/jobpost/${id}/comment`, commentData, {
                headers: {
                    'Authorization': accessToken,
                },
            });

            alert("댓글 작성완료!");

            // 댓글 추가 후 최신 데이터를 서버에서 다시 받아옴
            await fetchJobPostComments();
            
            return response.data;
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    useEffect(() => {
        // 컴포넌트가 마운트된 후에 초기 데이터를 가져오도록 useEffect 사용
        fetchJobPostComments();
    }, [id]);
    
    

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
                    {jobPostCommentList.map((comment) => (
                        <CommentContentBox
                            key={comment.id}
                            id={comment.id}
                            content={comment.content}
                            date={comment.date}
                            author={comment.author}
                            jopPostId={comment.jobPostId}
                        />
                    ))}
                </BoxWrapper>
                <ButtonWrapper>
                    <CommentInput type="text" placeholder="댓글을 입력해주세요." onChange={(e) => setCommentContent(e.target.value)} />
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