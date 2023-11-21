import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";
import TitleMainBox from "../molecules/div/TitleMainBox";
import TitleMainBoxText from "../molecules/text/TitleMainBoxText";
import { useNavigate, useLocation } from "react-router-dom";

const MailWriteTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const onClickWrite = () => {
        navigate("/mail/write");
    }

    const onClickMail = () => {
        navigate("/mail");
    }


    return (
        <>
            <Wrapper>
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
                <ContentWrapper>
                    <Category />
                    <Login />
                    <Alarm />
                </ContentWrapper>
            </Wrapper>
        </>
    )
}

export default MailWriteTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;