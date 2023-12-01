import EditModalBox from "../../molecules/box/EditModalBox";
import EditInput from "../../molecules/input/EditInput";
import TextAreaInput from "../../molecules/input/TextAreaInput";
import DialogboxText from "../../molecules/text/DialogboxText";
import ButtonEditMyPage from "../button/ButtonEditMyPage";
import styled from "styled-components";
import axios from "axios";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";

const EditReserveBox = ({ closeModal, id }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const onClickEdit = async () => {
        const userConfirmed = window.confirm('정말로 수정하시겠습니까?');
        if (userConfirmed) {
            // console.log("id:", id);
            // console.log("제목:", title);
            // console.log("내용:", content);
            const formData = {
                reservationPostId: id,
                title: title,
                content: content,
            }

            console.log(formData)

            try {
                const accessToken = localStorage.getItem("accessToken");
                const response = await axios.put(`/api/reservationpost/${id}`, formData, {
                    headers: {
                        Authorization: accessToken,
                    },
                });

                const data = await response.data.json;

                alert("수정되었습니다.")
                window.location.reload();
                return data;
            } catch (error) {
                console.error('데이터 제출 오류:', error);

            }
        }
    }

    return (
        <>
            <EditModalBox>
                <Xbox>
                    <IoMdCloseCircle size="25" color="#03C75A" cursor="pointer" onClick={closeModal} />
                </Xbox>
                <DialogboxText content="제목" />
                <EditInput type="text" onChange={(e) => setTitle(e.target.value)} />
                <DialogboxText content="내용" />
                <TextAreaInput
                    type="text"
                    width="230px"
                    height="80px"
                    padding="10px"
                    marginTop="11px"
                    marginBottom="11px"
                    onChange={(e) => setContent(e.target.value)}
                />
                <ButtonWrapper>
                    <ButtonEditMyPage onClick={onClickEdit} />
                </ButtonWrapper>
            </EditModalBox>
        </>
    )
}

const Xbox = styled.div`
    height: 38px;
    display: flex;
    justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: right;
`;

export default EditReserveBox;