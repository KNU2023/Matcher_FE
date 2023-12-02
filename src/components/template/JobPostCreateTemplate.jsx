import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import LoginComplete from "../organisms/LoginComplete";
import styled from "styled-components";
import TitleMainBox from "../molecules/div/TitleMainBox";
import TitleMainBoxText from "../molecules/text/TitleMainBoxText";
import { useNavigate, useLocation } from "react-router-dom";
import JobPostCreateBox from "../organisms/box/JobPostCreateBox";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../store/authSlice";
import { useState } from "react";



const JobPostCreateTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const accessToken = useSelector(selectAccessToken);
    const [showCreateBox, setShowCreateBox] = useState(true);

    const onSubmitHandler = () => {
        setShowCreateBox(false);
    };

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
                    {showCreateBox ? (
                        <JobPostCreateBox onSubmitHandler={onSubmitHandler} />
                    ) : (
                        <JobPostCreateImageBox />
                    )}
                </MainBox>
                <ContentWrapper>
                    <Category />
                    {accessToken ? <LoginComplete /> : <Login />}
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