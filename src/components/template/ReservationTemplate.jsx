import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";
import DialogSkeleton from "../organisms/box/DialogSkeleton";

const ReservationTemplate = () => {
    return (
        <>
            <Wrapper>
                <MainBox>
                    <DialogSkeleton />
                    <DialogSkeleton />
                    <DialogSkeleton />
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

export default ReservationTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;