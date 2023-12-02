import MainBox from "../molecules/box/MainBox";
import TitleMainBox from "../molecules/div/TitleMainBox";
import TitleMainBoxText from "../molecules/text/TitleMainBoxText";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";
import ReservationSearch from "../organisms/input/ReservationSearch";
import DialogSkeleton from "../organisms/box/DialogSkeleton";
import ModalJobpostDialogBox from "../organisms/box/ModalJobpostDialogBox";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const JobPostTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setModalOpen] = useState(false);

    const onClickCreate = () => {
        navigate("/jobpost/create");
    }

    const onClickJob = () => {
        navigate("/jobpost");
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
                                content="구인구직"
                                onClick={onClickJob}
                                cursor="pointer"
                                active={location.pathname === "/jobpost"}
                            />
                            <TitleMainBoxText
                                content="구인구직 생성"
                                margin="0px 0px 0px 27px"
                                onClick={onClickCreate}
                                cursor="pointer"
                                active={location.pathname === "/jobpost/create"}
                            />
                        </TitleMainBox>
                        <ReservationSearch />
                        <ContentBoxWrapper>
                            <DialogSkeleton openModal={openModal} />
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
                        <ModalJobpostDialogBox closeModal={closeModal} />
                    </ModalWrapper>
                )}
            </Wrapper>
        </>
    )
}

export default JobPostTemplate;

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