import styled from "styled-components";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Smalltitle from "../../molecules/text/Smalltitle";
import ModalMailDialogBox from "./ModalMailDialogBox";
import { useEffect, useState } from "react";
import axios from "axios";

const MailBox = ({ key, data }) => {
    const [userId, setUserId] = useState(null);
    const [senderEmail, setSenderEmail] = useState(null);
    const [receiverEmail, setReceiverEmail] = useState(null);
    const [date, setDate] = useState(null);
    const [userContent, setUserContent] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = async () => {
        setModalOpen(true);
        try {
            const accessToken = localStorage.getItem("accessToken");
            // const jobpostId = data.id;
            //console.log(accessToken);
            const response = await axios.get(`/api/message/${userMail}`, {
                headers: {
                    'Authorization': accessToken,
                },
            });

            // 가져온 데이터를 state에 저장
            //console.log("jobPost결과값: ", response.data);
            //console.log("userEmail Response", response.data);
            //console.log("id", response.data[0]);
            setUserId(response.data[0].id);
            setSenderEmail(response.data[0].senderEmail);
            setReceiverEmail(response.data[0].receiverEmail);
            setDate(response.data[0].date);
            setUserContent(response.data[0].content);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const userMail = data.userEmail;
    //console.log("userMail", userMail);

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const accessToken = localStorage.getItem("accessToken");
    //             // const jobpostId = data.id;
    //             //console.log(accessToken);
    //             const response = await axios.get(`/api/message/${userMail}`, {
    //                 headers: {
    //                     'Authorization': accessToken,
    //                 },
    //             });

    //             // 가져온 데이터를 state에 저장
    //             //console.log("jobPost결과값: ", response.data);
    //             console.log("userEmail Response", response.data);
    //             setUserContent(response.data);
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     };
    //     fetchUserData();
    // }, []);
    //console.log(userContent);


    return (
        <>
            <MailBoxWrapper onClick={openModal}>
                <IoChatbubbleEllipses size="24" color="#2F9B79" />
                {/* <Smalltitle weight="bold" content="종프 1 팀원 한 분 찾습니다. 보고 문의드립니다." /> */}
                <Smalltitle weight="bold" content={data.userName} key={data.id} />
                <Smalltitle content={data.userEmail} key={data.id} />
            </MailBoxWrapper>
            
            {isModalOpen && (
                <ModalWrapper>
                    <ModalMailDialogBox
                        id={userId}
                        receiverEmail={receiverEmail}
                        senderEmail={senderEmail}
                        date={date}
                        content={userContent}
                        closeModal={closeModal} />
                </ModalWrapper>
            )}
            {/* {isModalOpen && userContent && userContent.senderEmail === data.userEmail && (
                    <ModalWrapper>
                        <ModalMailDialogBox
                            key={userContent.id}
                            id={userContent.id}
                            senderEmail={userContent.senderEmail}
                            receiverEmail={userContent.receiverEmail}
                            date={userContent.date}
                            content={userContent.content}
                            closeModal={closeModal}
                        />
                    </ModalWrapper>
                )} */}
        </>
    )
};

const MailBoxWrapper = styled.div`
    width: 611px;
    height: 50px;
    border-top: 1px solid #E7E8EB;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
`;

export default MailBox;