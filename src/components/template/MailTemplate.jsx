import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";
// import ModalDialogBox from "../organisms/box/ModalDialogBox";
import ModalReserveDialogBox from "../organisms/box/ModalReserveDialogBox";

const MailTemplate = () => {
    return (
        <>
            <Wrapper>
                <MainBox>
                    <ModalReserveDialogBox />
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

export default MailTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;