import DialogBox from "../../molecules/box/DialogBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import TitleboxModalText from "../../molecules/text/TitleboxModalText";
import styled from "styled-components";
import ButtonMail from "../button/ButtonMail";
import ButtonMailDelete from "../button/ButtonMailDelete";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";

const ModalMailDialogBox = ({ id, content, senderEmail, date, receiverEmail, closeModal }) => {
    // console.log("content", content);
    // console.log("receiverEmail", receiverEmail);
    // console.log("senderEmail", senderEmail);
    // console.log("date", date);

    const onClickDeleteMail = async () => {
        const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');

        if (confirmDelete) {
            try {
                // 서버로 DELETE 요청 보내기
                const accessToken = localStorage.getItem("accessToken");
                const response = await axios.delete(`/api/message/${id}`, {
                    headers: {
                        'Authorization': accessToken,
                    },
                });

                // 응답 확인
                console.log(response.data);

                // 삭제 성공 시 추가 동작 수행
                alert('메시지가 성공적으로 삭제되었습니다.');

                // 모달 닫기 등 다른 동작 수행
                // closeModal();
                window.location.reload();
            } catch (error) {
                // 오류가 발생했을 때 처리
                console.error('Error deleting message:', error);
                alert('메시지 삭제 중 오류가 발생했습니다.');
            }
        }
    };

    return (
        <>
            <DialogBox>
                <Xbox>
                    <IoMdCloseCircle size="25" color="#03C75A" cursor="pointer" onClick={closeModal} />
                </Xbox>
                <TitleboxModalText margin="0px 0px 13px 0px" justifyContent="left" content={`발신자: ${senderEmail}`} />
                <TitleboxModalSecondText margin="0px 0px 13px 0px" size="16px" color="#757575" content={`송신자: ${receiverEmail}`} />
                <TitleboxModalSecondText margin="0px 0px 10px 0px" size="12px" color="#757575" content={date} />
                <StyleLine />
                <BoxWrapper>
                    {content}
                </BoxWrapper>
                <ButtonWrapper>
                    <ButtonMailDelete onClick={onClickDeleteMail} />
                    <ButtonMail />
                </ButtonWrapper>
            </DialogBox>
        </>
    )
};

export default ModalMailDialogBox;

const Xbox = styled.div`
    height: 38px;
    display: flex;
    justify-content: flex-end;
`;

const StyleLine = styled.div`
    width: 539px;
    height: 1px;
    background-color: #e3e5e8;
`;

const BoxWrapper = styled.div`
    width: 539px;
    height: 344px;
    padding: 18px 0px 18px 0px;
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