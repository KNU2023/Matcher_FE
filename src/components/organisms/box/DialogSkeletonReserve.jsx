// import SkeletonBox from "../../molecules/skeleton/SkeletonBox";
import ContentBox from "../../molecules/box/ContentBox";
import styled from "styled-components";
import { useState } from "react";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import ModalReserveDialogBox from "./ModalReserveDialogBox";
import axios from "axios";

const DialogSkeletonReserve = ({ data }) => {
    // console.log("Data in DialogSkeletonReserve:", reserveDataItem.data); // 확인용
    // const { id, title, date, author } = reserveDataItem.data;

    const [isModalOpen, setModalOpen] = useState(false);
    const [reservePostId, setReservePostId] = useState(null);
    const [reservePostTitle, setReservePostTitle] = useState(null);
    const [reservePostName, setReservePostName] = useState(null);
    const [reservePostdate, setReservePostdate] = useState(null);
    const [reservationRow, setReservationRow] = useState(null);
    const [reservationCol, setReservationCol] = useState(null);
    const [reservationSeat, setReservationSeat] = useState(null);
    const [reserveContent, setReserveContent] = useState(null);

    
    const openModal = async () => {
        setModalOpen(true);
        try {
            const accessToken = localStorage.getItem("accessToken");
            //console.log(accessToken);
            const response = await axios.get(`/api/reservationpost/${data.id}`, {
                headers: {
                    'Authorization': accessToken,
                },
            });

            // 가져온 데이터를 state에 저장
            //console.log("jobModal", response.data);
            setReservePostId(response.data.id);
            setReservePostTitle(response.data.title);
            setReserveContent(response.data.content);
            setReservePostName(response.data.author.name);
            setReservePostdate(response.data.date);
            setReservationRow(response.data.rowSize);
            setReservationCol(response.data.colSize);
            setReservationSeat(response.data.seatList);
            console.log(response.data);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <ContentBox onClick={openModal}>
                {/* <ContentBoxWrapper>
                    <SkeletonBox
                        height="15px"
                        width="134px"
                        borderRadius="4px"
                        margin="0px 0px 4px 0px"
                        padding="0px"
                    />
                    <SkeletonBox
                        height="10px"
                        width="50px"
                        borderRadius="3px"
                        margin="0px 0px 4px 0px"
                        padding="0px"
                    />
                    <SkeletonBox
                        height="10px"
                        width="134px"
                        borderRadius="3px"
                        margin="0px 0px 0px 0px"
                        padding="0px"
                    />
                </ContentBoxWrapper> */}
                <TitleboxModalSecondText content={data.title} size="14px" weight="bold" />
                <TitleboxModalSecondText content={data.ownerName} size="10px" color="#757575" />
                <TitleboxModalSecondText content={data.date} size="8px" color="#757575" />
            </ContentBox>
            {isModalOpen && (
                <ModalWrapper>
                    <ModalReserveDialogBox
                        closeModal={closeModal}
                        id={reservePostId}
                        title={reservePostTitle}
                        content={reserveContent}
                        name={reservePostName}
                        date={reservePostdate}
                        row={reservationRow}
                        col={reservationCol}
                        seat={reservationSeat}
                    />
                </ModalWrapper>
            )}
        </>
    );
};

// const ContentBoxWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin: 20px 0px 20px 0px;
// `;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export default DialogSkeletonReserve;
