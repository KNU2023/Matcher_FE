import styled from "styled-components";
import profile from "../../assets/profile.svg";
import MyprofileNavigation from "../organisms/MyprofileNavigation";
import ProfileText from "../molecules/text/ProfileText";
import Img from "../atoms/img/Img";
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditUserForm from "../organisms/input/EditUserForm.jsx";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MyPageJob from "../organisms/MyPageJob";
import MyPageReserve from "../organisms/MyPageReserve";
import ProfileImg from "../atoms/img/ProfileImg.jsx";

const MyPageTemplate = () => {
    const [userName, setUserName] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                //console.log(accessToken);
                // 데이터를 가져오는 API 호출
                const response = await axios.get('/api/user', {
                    headers: {
                        'Authorization': accessToken,
                    },
                });

                // 가져온 데이터를 state에 저장
                setUserName(response.data.name);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        // 컴포넌트가 마운트될 때 데이터를 가져오도록 useEffect에서 호출
        fetchUserData();
    }, []);


    const formData = useSelector((state) => state.signup.formData);


    const handleButtonClick = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        alert('로그아웃되었습니다.');
        window.location.replace("/");
    };


    return (
        <>
            <Wrapper>
                <ProfileBox>
                    <ProfileImg margin="11px 0px 11px 0px" width="111px" height="111px">{profile}</ProfileImg>
                    <ProfileText content={userName} margin="0px 0px 87px 0px" />
                    <MyprofileNavigation />
                    <LittleText onClick={handleButtonClick}>로그아웃</LittleText>
                    <SmallLittleText>으라차차</SmallLittleText>
                </ProfileBox>
                <ContentBox>
                    {location.pathname === "/mypage" ? (
                        <EditUserForm formData={formData} />
                    ) : (
                        location.pathname === "/mypage/reservation" ? (<MyPageReserve />) : (
                            location.pathname === "/mypage/jobpost" ? (<MyPageJob />) : (null)
                        )
                    )}
                </ContentBox>
            </Wrapper>
        </>
    )
}

export default MyPageTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ProfileBox = styled.div`
    width: 411px;
    height: 832px;
    border: 1px solid #E3E5E8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContentBox = styled.div`
    width: 609px;
    height: 832px;
    background-color: #F9FBFC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LittleText = styled.span`
    font-size: 8px;
    color: #b2b2b2;
    cursor: pointer;
    margin: 33px 0px 13px 0px;
`;

const SmallLittleText = styled.span`
    font-size: 14px;
    weight: bold;
    color: #b2b2b2;
`;