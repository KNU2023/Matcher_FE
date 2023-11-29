import ProfileText from "../molecules/text/ProfileText";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

    const onClickDeleteUser = async () => {
        confirm("정말로 탈퇴하시겠습니까?");
        if (confirm) {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const response = await axios.delete('/api/user', {
                    headers: {
                        'Authorization': accessToken,
                    },
                });
                console.log(response.data);

                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');

                alert("탈퇴되었습니다.");
                window.location.replace("/");

            } catch (error) {
                console.error('Error fetching user data:', error);
                throw new Error(error);
            }
        }
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
                    content="탈퇴하기"
                    cursor="pointer"
                    onClick={onClickDeleteUser}
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