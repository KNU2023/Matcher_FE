import ProfileText from "../molecules/text/ProfileText";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const MyprofileNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const onClickMyprofile = () => {
        navigate("/mypage");
    };
    const onClickReservation = () => {
        navigate("/mypage/reservation");
    };
    const onClickJobPost = () => {
        navigate("/mypage/jobpost");
    }

    return (
        <>
            <NavigationWrapper>
                <ProfileText
                    content="내 프로필"
                    onClick={onClickMyprofile}
                    cursor="pointer"
                    margin="0px 0px 33px 0px"
                    active={location.pathname === "/mypage"}
                />
                <ProfileText
                    content="마이 예약 관리"
                    onClick={onClickReservation}
                    cursor="pointer"
                    margin="0px 0px 33px 0px"
                    active={location.pathname === "/mypage/reservation"}
                />
                <ProfileText
                    content="구인구직 관리"
                    onClick={onClickJobPost}
                    cursor="pointer"
                    margin="0px 0px 33px 0px"
                    active={location.pathname === "/mypage/jobpost"}
                />
                <ProfileText
                    content="앱 정보"
                    cursor="pointer"
                />
            </NavigationWrapper>
        </>
    )
};

const NavigationWrapper = styled.div`
    width:285px;
    height: 299px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #F1F2F3;
`;

export default MyprofileNavigation;