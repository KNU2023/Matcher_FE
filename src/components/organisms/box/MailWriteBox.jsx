import DialogFormBox from "../../molecules/box/DialogFormBox";
import FormInput from "../../molecules/input/FormInput";
import TextAreaInput from "../../molecules/input/TextAreaInput";
import DialogboxText from "../../molecules/text/DialogboxText";
import styled from "styled-components";
import ButtonMailWrite from "../button/ButtonMailWrite";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const MailWriteBox = () => {
    const [receiverEmail, setReceiverEmail] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    

    const handleButtonClick = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            // 요청에 필요한 데이터를 객체로 생성
            const messageData = {
                receiverEmail: receiverEmail,
                content: content,
            };

            // 서버로 POST 요청 보내기
            const response = await axios.post('/api/message', messageData, {
                headers: {
                    'Authorization': accessToken,
                    'Content-Type': 'application/json',
                },
            });

            // 응답 확인
            console.log(response.data);

            // 성공적으로 전송되었을 때 알림 등 추가 동작 수행
            alert('메시지 전송이 완료되었습니다.');
            navigate("/mail");
        } catch (error) {
            // 오류가 발생했을 때 처리
            console.error('Error sending message:', error);
            alert('메시지 전송 중 오류가 발생했습니다.');
        }
    };

    return (
        <>
            <DialogFormBox>
                <BoxWrapper>
                    <DialogboxText content="보낼 이" />
                    <FormInput
                        id="title"
                        type="text"
                        onChange={(e) => setReceiverEmail(e.target.value)}
                    />
                    <DialogboxText content="본문" />
                    <TextAreaInput
                        id="textarea"
                        width="425px"
                        height="311px"
                        marginTop="22px"
                        marginBottom="22px"
                        padding="27px 27px 27px 27px"
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <ButtonWrapper>
                        <ButtonMailWrite onClick={handleButtonClick} />
                    </ButtonWrapper>
                </BoxWrapper>
            </DialogFormBox>
        </>
    )
};

const BoxWrapper = styled.div`
    height: 539px;
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

const SeatWrapper = styled.div`
    width: 450px;
    height: 450px;
    border-radius : 15px;
    padding: 30px;
    background-color: #F5F6F8;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default MailWriteBox;