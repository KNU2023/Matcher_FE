import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";
import DialogSkeletonReserve from "../organisms/box/DialogSkeletonReserve";
import TitleMainBox from "../molecules/div/TitleMainBox";
import TitleMainBoxText from "../molecules/text/TitleMainBoxText";
import ReservationSearch from "../organisms/input/ReservationSearch";
import ModalReserveDialogBox from "../organisms/box/ModalReserveDialogBox";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const DUMMY_DATA = [
//     {
//         "hasNext": false,
//         "data": [
//             {
//                 "id": 1,
//                 "title": "제목",
//                 "date": "2023-11-11T12:12:12",
//                 "author": {
//                     "email": "user1@example.com",
//                     "name": "유저1",
//                     "major": "major1",
//                     "stdNumber": "12"
//                 }
//             },
//             {
//                 "id": 2,
//                 "title": "제목",
//                 "date": "2023-11-11T12:12:12",
//                 "author": {
//                     "email": "user1@example.com",
//                     "name": "유저2",
//                     "major": "major2",
//                     "stdNumber": "13"
//                 }
//             }
//         ]
//     },
// ]

const ReservationTemplate = () => {
    // console.log("dummy : ", DUMMY_DATA);
    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setModalOpen] = useState(false);
    // const dispatch = useDispatch();
    // const reserveData = useSelector((state) => state.reserveData);


    const onClickCreate = () => {
        navigate("/create");
    }

    const onClickReserve = () => {
        navigate("/");
    }

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <>
            <Wrapper>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    <MainBox>
                        <TitleMainBox>
                            <TitleMainBoxText
                                content="자리 예약"
                                onClick={onClickReserve}
                                cursor="pointer"
                                active={location.pathname === "/"} />
                            <TitleMainBoxText
                                content="예약 생성"
                                margin="0px 0px 0px 27px"
                                onClick={onClickCreate}
                                cursor="pointer"
                                active={location.pathname === "create"}
                            />
                        </TitleMainBox>
                        <ReservationSearch />
                        <ContentBoxWrapper>
                            <DialogSkeletonReserve openModal={openModal} />
                            {/* {DUMMY_DATA.map((item) => (
                                <DialogSkeletonReserve key={item.id} reserveDataItem={item} />
                                ,(console.log("item_data: ", item))
                            ))} */}
                        </ContentBoxWrapper>
                    </MainBox>
                </motion.div>
                <ContentWrapper>
                    <Category />
                    <Login />
                    <Alarm />
                </ContentWrapper>
                {isModalOpen && (
                    <ModalWrapper>
                        <ModalReserveDialogBox closeModal={closeModal} />
                    </ModalWrapper>
                )}
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentBoxWrapper = styled.div`
    height: 483px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin-top: 39px;
    row-gap: 15px;
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

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export default ReservationTemplate;
