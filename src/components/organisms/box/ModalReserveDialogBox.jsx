import DialogBox from "../../molecules/box/DialogBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import TitleboxModalText from "../../molecules/text/TitleboxModalText";
import styled from "styled-components";
import SeatCreateButton from "../button/SeatCreateButton";
import { IoMdCloseCircle } from "react-icons/io";
import ButtonReservation from "../button/ButtonReservation";

const ModalReserveDialogBox = () => {
    return (
        <>
            <DialogBox>
                <Xbox>
                    <IoMdCloseCircle size="25" color="#03C75A" cursor="pointer" />
                </Xbox>
                <TitleboxModalText margin="0px 0px 13px 0px" justifyContent="left" content="종프 팀원 한분 찾습니다." />
                <TitleboxModalSecondText margin="0px 0px 13px 0px" size="16px" color="#757575" content="컴학3학년" />
                <TitleboxModalSecondText margin="0px 0px 10px 0px" size="12px" color="#757575" content="2023.11.02" />
                <StyleLine />
                <BoxWrapper>
                    123
                    <SeatWrapper>
                        <SeatCreateButton />
                    </SeatWrapper>
                </BoxWrapper>
                <ButtonWrapper>
                    <ButtonReservation />
                </ButtonWrapper>
            </DialogBox>
        </>
    )
};

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

const SeatWrapper = styled.div`
    width: 450px;
    height: 450px;
    border-radius : 15px;
    padding: 30px;
    background-color: #F5F6F8;
`;

export default ModalReserveDialogBox;