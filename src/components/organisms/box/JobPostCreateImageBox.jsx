import DialogFormBox from "../../molecules/box/DialogFormBox";
import ImageInput from "../../molecules/input/ImageInput";
import DialogboxText from "../../molecules/text/DialogboxText";
import ButtonCreateImage from "../button/ButtonCreateImage";
import styled from "styled-components";
import axios from "axios";
import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCreateNonImage from "../button/ButtonCreateNonImage";

const JobPostCreateImageBox = ({ id }) => {
    const [file, setFile] = useState("");
    const navigate = useNavigate();

    const handleUpload = (e) => {
        const selectedFile = e.target.files[0];
        console.log("selectedfile", selectedFile)
        setFile(selectedFile);
        console.log("file", file)
    };

    // useEffect(() => {
    //     console.log("file", file);
    // }, [file]);

    const onSubmitHandler = async () => {
        const accessToken = localStorage.getItem("accessToken");

        // const formData = new FormData();
        // formData.append("file", file);

        // for (const key of formData.keys()) {
        //     console.log(key);
        // }

        // for (const value of formData.values()) {
        //     console.log("value", value);
        // }

        const response = await axios.post(`/api/image/${id}`, { files: file }, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": accessToken,
            },
        });


        console.log(response);
        alert("이미지 업로드가 완료되었습니다.");
        window.location.replace("/jobpost");
    };

    return (
        <>
            <DialogFormBox>
                <BoxWrapper>
                    <DialogboxText content="이미지 업로딩" />
                    <ImageInput
                        id="image"
                        onChange={handleUpload}
                    />
                    <ButtonWrapper>
                        <ButtonCreateNonImage onClick={(e) => navigate("/jobpost")} />
                        <ButtonCreateImage onClick={onSubmitHandler} />
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

export default JobPostCreateImageBox;