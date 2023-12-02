import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
// import Login from "../organisms/Login";
import LoginComplete from "../organisms/LoginComplete";
import styled from "styled-components";
import TitleMainBox from "../molecules/div/TitleMainBox";
import TitleMainBoxText from "../molecules/text/TitleMainBoxText";
import { useNavigate, useLocation } from "react-router-dom";
import JobPostCreateBox from "../organisms/box/JobPostCreateBox";

const JobPostCreateTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClickJob = () => {
        navigate("/jobpost");
    }

    return (
        <>
            <Wrapper>
                <MainBox >
                    <TitleMainBox>
                        <TitleMainBoxText
                            content="구인구직"
                            onClick={onClickJob}
                            cursor="pointer"
                            active={location.pathname === "/jobpost"}
                        />
                        <TitleMainBoxText
                            content="구인구직 생성"
                            margin="0px 0px 0px 27px"
                            cursor="pointer"
                            active={location.pathname === "/jobpost/create"}
                        />
                    </TitleMainBox>
                    <JobPostCreateBox />
                </MainBox>
                <ContentWrapper>
                    <Category />
                    {/* <Login /> */}
                    <LoginComplete />
                    <Alarm />
                </ContentWrapper>
            </Wrapper>
        </>
    )
}

export default JobPostCreateTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;