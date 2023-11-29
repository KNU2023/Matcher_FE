import DialogFormBox from "../../molecules/box/DialogFormBox";
import FormInput from "../../molecules/input/FormInput";
import TextAreaInput from "../../molecules/input/TextAreaInput";
import DialogboxText from "../../molecules/text/DialogboxText";
import ButtonCreate from "../button/ButtonCreate";
import styled from "styled-components";
import SeatCreateButton from "../button/SeatCreateButton";
import { useDispatch, useSelector } from "react-redux";
import { axiosReserveData } from "../../../store/reserve-action";
import { reserveAction } from "../../../store/reserveSlice";
import { useState } from "react";

const ReserveCreateBox = () => {
    const dispatch = useDispatch();

    const formData = useSelector((state) => state.reserve.formData);

    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelect = (seats) => {
        setSelectedSeats(seats);
        console.log("Parent selectedSeats:", seats);
    };

    const onSubmitHandler = async () => {
        try {
            // 예약 생성에 필요한 데이터 수집
            const title = formData.title;
            const content = formData.content;
            const rowSize = 12;
            const colSize = 12;
            const disableSeatList = selectedSeats;

            // const requestData = {
            //     title,
            //     content,
            //     rowSize,
            //     colSize,
            //     disableSeatList: selectedSeats,
            // };

            await dispatch(
                axiosReserveData({
                    title,
                    content,
                    rowSize,
                    colSize,
                    disableSeatList,
                })
            );

            // 성공 메시지
            alert("예약이 생성되었습니다.");
            window.location.replace("/")
            //console.log(requestData);
        } catch (error) {
            // 오류 처리
            console.error("예약 생성 중 오류 발생:", error);
            alert("예약 생성 중 오류가 발생했습니다.");
        }
    };

    return (
        <>
            <DialogFormBox>
                <BoxWrapper>
                    <DialogboxText content="제목" />
                    <FormInput
                        id="title"
                        type="text"
                        onChange={(e) => dispatch(reserveAction.updateReserveData({ title: e.target.value }))}
                    />
                    <DialogboxText content="본문" />
                    <TextAreaInput
                        id="textarea"
                        width="425px"
                        height="311px"
                        marginTop="22px"
                        marginBottom="22px"
                        padding="27px 27px 27px 27px"
                        onChange={(e) => dispatch(reserveAction.updateReserveData({ content: e.target.value }))}
                    />

                    <DialogboxText content="생성하지 않을 좌석을 선택해주세요." />
                    <SeatWrapper>
                        <SeatCreateButton onSeatSelect={handleSeatSelect} />
                    </SeatWrapper>
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

const SeatWrapper = styled.div`
    width: 450px;
    height: 450px;
    border-radius : 15px;
    padding: 30px;
    background-color: #F5F6F8;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default ReserveCreateBox;