import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";
import TitleMainBox from "../molecules/div/TitleMainBox";
import TitleMainBoxText from "../molecules/text/TitleMainBoxText";
import MailBox from "../organisms/box/MailBox";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ModalMailDialogBox from "../organisms/box/ModalMailDialogBox";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../store/authSlice";
import LoginComplete from "../organisms/LoginComplete";
import axios from "axios";

const MailTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setModalOpen] = useState(false);
    const [userData, setUserData] = useState([]);
    const accessToken = useSelector(selectAccessToken);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }


    const onClickWrite = () => {
        navigate("/mail/write");
    }

    const onClickMail = () => {
        navigate("/mail");
    }

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                //console.log(accessToken);
                // 데이터를 가져오는 API 호출
                const response = await axios.get('/api/message', {
                    headers: {
                        'Authorization': accessToken,
                    },
                });

                // 가져온 데이터를 state에 저장
                console.log(response.data);
                setUserData(response.data);
                //console.log(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        // 컴포넌트가 마운트될 때 데이터를 가져오도록 useEffect에서 호출
        fetchUserData();
    }, []);

    return (
        <>
            <Wrapper>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    <MainBox>
                        <TitleMainBox>
                            <TitleMainBoxText
                                content="메일함"
                                onClick={onClickMail}
                                cursor="pointer"
                                active={location.pathname === "/mail"}
                            />
                            <TitleMainBoxText
                                content="쪽지쓰기"
                                margin="0px 0px 0px 27px"
                                onClick={onClickWrite}
                                cursor="pointer"
                                active={location.pathname === "/mail/write"}
                            />
                        </TitleMainBox>
                        <ContentBoxWrapper>
                            {userData.length > 0 ? (
                                userData.map((item) => (
                                    <MailBox
                                        key={item.id}
                                        data={item}
                                        openModal={openModal}
                                    />
                                ))
                            ) : (
                                null
                            )}
                        </ContentBoxWrapper>
                    </MainBox>
                </motion.div>
                <ContentWrapper>
                    <Category />
                    {accessToken ? <LoginComplete /> : <Login />}
                    <Alarm />
                </ContentWrapper>
                {isModalOpen && (
                    <ModalWrapper>
                        <ModalMailDialogBox closeModal={closeModal} />
                    </ModalWrapper>
                )}
            </Wrapper>
        </>
    )
}

export default MailTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentBoxWrapper = styled.div`
    width: 611px;
    height: 600px;
    display: flex;
    flex-direction: column;

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

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;