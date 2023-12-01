import DialogFormBox from "../../molecules/box/DialogFormBox";
import FormInput from "../../molecules/input/FormInput";
import ImageInput from "../../molecules/input/ImageInput";
import TextAreaInput from "../../molecules/input/TextAreaInput";
import DialogboxText from "../../molecules/text/DialogboxText";
import ButtonCreate from "../button/ButtonCreate";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { jobAction } from "../../../store/jobPostSlice";
import { axiosJobData } from "../../../store/job-action";
import { useState, useEffect } from "react";
import axios from "axios";
import * as React from 'react';


const JobPostCreateBox = () => {
    const dispatch = useDispatch();

    const formData = useSelector((state) => state.jobpost.formData);
    const [file, setFile] = useState();

    // const handleFileChange = async (event) => {
    //     const selectedFile = event.target.files[0];
    //     setFile(selectedFile);
    //     console.log(selectedFile);
    // };

    // useEffect(() => {
    //     if (file) {
    //         const form = new FormData();
    //         form.append('files', file);
    //         console.log("Form Data:", form);
    //     }
    // }, [file]);

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


            // const form = new FormData();

            // // 이 부분에서 FormData에 파일을 추가합니다.
            // if (file) {
            //     form.append('files', file);
            // }

            // console.log("form", form);

            // try {

            //     const accessToken = localStorage.getItem("accessToken");

            //     const form = new FormData();
            //     form.append('files2', file);
            //     console.log("Form Data2:", form);

            //     const response = await axios.post(
            //         `/api/image/${responseData}`,
            //         form,
            //         {
            //             headers: {
            //                 "Authorization": accessToken,
            //             },
            //         }
            //     );


            //     alert("이미지가 생성되었습니다.");
            // } catch (error) {
            //     console.error("이미지 업로드 중 오류 발생:", error);
            //     alert("이미지 업로드 중 오류 발생.");
            // }

            alert("구인 게시글이 생성되었습니다.");

        } catch (error) {
            console.error("구인 게시글 생성 중 오류 발생:", error);
            alert("구인 게시글 생성 중 오류가 발생했습니다.");
        }
    }

    return (
        <>
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
                    <DialogboxText content="이미지 업로딩" />
                    {/* <ImageInput
                        // onChange={(e) => { encodeFileToBase64(e.target.files[0]) }}
                        onChange={handleFileChange}
                    /> */}
                    <ButtonWrapper>
                        <ButtonCreate onClick={onSubmitHandler} />
                    </ButtonWrapper>
                </BoxWrapper>
            </DialogFormBox>
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