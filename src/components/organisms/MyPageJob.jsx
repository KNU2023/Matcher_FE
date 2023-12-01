import TitleboxModalSecondText from "../molecules/text/TitleboxModalSecondText";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MyPageJobContentBox from "./box/MyPageJobContentBox";
import EditReserveBox from "./input/EditReserveBox";

const MyPageJob = () => {
    const [jobPost, setJobPost] = useState([]);
    const paging = 0;


    const myJob = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            //console.log(accessToken);
            const response = await axios.get(`/api/user/jobpost?page=${paging}`, {
                headers: {
                    'Authorization': accessToken,
                },
            });
            // 가져온 데이터를 state에 저장
            console.log("jobPost", response.data.data);
            setJobPost(response.data.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    useEffect(() => {
        myJob();
    }, []);

    return (
        <>
            <TitleboxModalSecondText content="구인구직 게시글 관리" size="36" weight="bold" />
            <JobWrapper>
                {jobPost.map((job) => (
                    <MyPageJobContentBox
                        key={job.id}
                        title={job.title}
                        date={job.date}
                        jobPostId={job.id}
                        author={job.author}
                    />
                ))}
            </JobWrapper>
        </>
    )
}

const JobWrapper = styled.div`
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

export default MyPageJob;