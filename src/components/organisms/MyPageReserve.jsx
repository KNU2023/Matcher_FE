import TitleboxModalSecondText from "../molecules/text/TitleboxModalSecondText";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MyPageReserveContentBox from "./box/MyPageReserveContentBox";

const MyPageReserve = () => {
    const paging = 0;
    const [reservePost, setReservePost] = useState([]);

    const myJob = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            //console.log(accessToken);
            const response = await axios.get(`/api/user/reservationpost?page=${paging}`, {
                headers: {
                    'Authorization': accessToken,
                },
            });
            // 가져온 데이터를 state에 저장
            console.log(response.data.data);
            setReservePost(response.data.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    useEffect(() => {
        myJob();
    }, []);

    return (
        <>
            <TitleboxModalSecondText content="예약 게시글 관리" size="36" weight="bold" />
            <ReserveWrapper>
                {reservePost.map((reserve) => (
                    <MyPageReserveContentBox
                        key={reserve.id}
                        title={reserve.title}
                        date={reserve.date}
                        jobPostId={reserve.id}
                        ownerName={reserve.ownerName}
                    />
                ))}
            </ReserveWrapper>
        </>
    )
}

const ReserveWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px;
        height: 0px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c0c0c0;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
`;

export default MyPageReserve;