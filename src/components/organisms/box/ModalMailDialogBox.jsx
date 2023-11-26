import DialogBox from "../../molecules/box/DialogBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import TitleboxModalText from "../../molecules/text/TitleboxModalText";
import styled from "styled-components";
import ButtonMail from "../button/ButtonMail";
import { IoMdCloseCircle } from "react-icons/io";

const ModalMailDialogBox = ({ content, senderEmail, date, receiverEmail, closeModal }) => {
    // console.log("content", content);
    // console.log("receiverEmail", receiverEmail);
    // console.log("senderEmail", senderEmail);
    // console.log("date", date);

    return (
        <>
            <DialogBox>
                <Xbox>
                    <IoMdCloseCircle size="25" color="#03C75A" cursor="pointer" onClick={closeModal} />
                </Xbox>
                <TitleboxModalText margin="0px 0px 13px 0px" justifyContent="left" content={`발신자: ${senderEmail}`}  />
                <TitleboxModalSecondText margin="0px 0px 13px 0px" size="16px" color="#757575" content={`송신자: ${receiverEmail}`} />
                <TitleboxModalSecondText margin="0px 0px 10px 0px" size="12px" color="#757575" content={date} />
                <StyleLine />
                <BoxWrapper>
                    {content}
                </BoxWrapper>
                <ButtonWrapper>
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