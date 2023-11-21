import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";
import TitleMainBox from "../molecules/div/TitleMainBox";
import TitleMainBoxText from "../molecules/text/TitleMainBoxText";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MailTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();


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
                    </MainBox>
                </motion.div>
                <ContentWrapper>
                    <Category />
                    <Login />
                    <Alarm />
                </ContentWrapper>
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