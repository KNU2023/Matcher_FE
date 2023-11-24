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

const ModalJobpostDialogBox = ({ id, closeModaled, openModal }) => {
    const [userData, setUserData] = useState([]);
    const [userTitle, setuserTitle] = useState(null);
    const [userName, setuserName] = useState(null);
    const [userDate, setuserDate] = useState(null);
    const [userContent, setuserContent] = useState(null);

    // console.log("hello",data)
    // console.log("id값", data.id);
    //console.log("id값", id);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                // const jobpostId = data.id;

                //console.log(accessToken);
                // 데이터를 가져오는 API 호출
                const response = await axios.get(`/api/jobpost/${id}`, {
                    headers: {
                        'Authorization': accessToken,
                    },
                });

                // 가져온 데이터를 state에 저장
                //console.log("jobPost결과값: ", response.data);
                setuserTitle(response.data.title);
                setuserName(response.data.author.name);
                setuserDate(response.data.date);
                setuserContent(response.data.content);
                setUserData(response.data.commentList);
                //console.log("commentList", response.data.commentList);
                //console.log(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [openModal]);


    return (
        <>
            <DialogBox>
                <Xbox>
                    <IoMdCloseCircle size="25" color="#03C75A" cursor="pointer" onClick={closeModaled} />
                </Xbox>
                <TitleboxModalText margin="0px 0px 13px 0px" justifyContent="left" content={userTitle} />
                <TitleboxModalSecondText margin="0px 0px 13px 0px" size="16px" color="#757575" content={userName} />
                <TitleboxModalSecondText margin="0px 0px 10px 0px" size="12px" color="#757575" content={userDate} />
                <StyleLine />
                <BoxWrapper>
                    <ContentWrapper>
                        {userContent}
                    </ContentWrapper>
                    {userData.map((comment) => (
                        <CommentContentBox
                            key={comment.id}
                            item={comment}
                        />
                    ))}
                </BoxWrapper>
                <ButtonWrapper>
                    <CommentInput type="text" placeholder="댓글을 입력해주세요." />
                    <ButtonComment />
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