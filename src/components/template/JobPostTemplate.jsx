import Header from "../organisms/Header";
import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";

const JobPostTemplate = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <MainBox />
                <ContentWrapper>
                    <Category />
                    <Login />
                    <Alarm />
                </ContentWrapper>
            </Wrapper>
        </>
    )
}

export default JobPostTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;