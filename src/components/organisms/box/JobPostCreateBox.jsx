import DialogFormBox from "../../molecules/box/DialogFormBox";
import FormInput from "../../molecules/input/FormInput";
import TextAreaInput from "../../molecules/input/TextAreaInput";
import DialogboxText from "../../molecules/text/DialogboxText";
import ButtonCreate from "../button/ButtonCreate";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { jobAction } from "../../../store/jobPostSlice";
import { axiosJobData } from "../../../store/job-action";
import * as React from 'react';
import JobPostCreateImageBox from "./JobPostCreateImageBox";
import { useState } from "react";


const JobPostCreateBox = () => {
    const dispatch = useDispatch();

    const formData = useSelector((state) => state.jobpost.formData);
    const [showCreateImageBox, setShowCreateImageBox] = useState(false);
    const [jobId, setJobId] = useState(null);

    const onSubmitHandler = async () => {
        try {
            const title = formData.title;
            const content = formData.content;

            // const requestData = {
            //     title,
            //     content,
            // };

            const responseData = await dispatch(
                axiosJobData({
                    title,
                    content,
                })
            );

            console.log("서버 응답 데이터:", responseData);
            setJobId(responseData);
            setShowCreateImageBox(true);
            return responseData;
        } catch (error) {
            console.error("구인 게시글 생성 중 오류 발생:", error);
            alert("구인 게시글 생성 중 오류가 발생했습니다.");
        }
    }


    return (
        <>
            {showCreateImageBox ? (
                <JobPostCreateImageBox id={jobId} />
            ) : (
                <DialogFormBox>
                    <BoxWrapper>
                        <DialogboxText content="제목" />
                        <FormInput
                            id="title"
                            type="text"
                            onChange={(e) => dispatch(jobAction.updateJobData({ title: e.target.value }))}
                        />
                        <DialogboxText content="본문" />
                        <TextAreaInput
                            id="textarea"
                            width="425px"
                            height="311px"
                            marginTop="22px"
                            marginBottom="22px"
                            padding="27px 27px 27px 27px"
                            onChange={(e) => dispatch(jobAction.updateJobData({ content: e.target.value }))}
                        />
                        <ButtonWrapper>
                            <ButtonCreate onClick={onSubmitHandler} />
                        </ButtonWrapper>
                    </BoxWrapper>
                </DialogFormBox>
            )}
        </>
    )
};

const BoxWrapper = styled.div`
    height: 539px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px; /* Width of scrollbar */
        height: 0px; /* Set to 0 for horizontal scrollbar */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #C0C0C0; /* Scrollbar color */
        border-radius: 4px; /* Round the corners of the scrollbar */
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* Color of scrollbar track */
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default JobPostCreateBox;