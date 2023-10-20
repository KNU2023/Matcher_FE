import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";
import DialogSkeleton from "../organisms/box/DialogSkeleton";
import TitleMainBox from "../molecules/div/TitleMainBox";
import TitleMainBoxText from "../molecules/text/TitleMainBoxText";
import ReservationSearch from "../organisms/input/ReservationSearch";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const ReservationTemplate = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const onClickCreate = () => {
        navigate("/create");
    }

    const onClickReserve = () => {
        navigate("/");
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
                            <DialogSkeleton />
                            <DialogSkeleton />
                            <DialogSkeleton />
                            <DialogSkeleton />
                            <DialogSkeleton />
                            <DialogSkeleton />
                            <DialogSkeleton />
                            <DialogSkeleton />
                            <DialogSkeleton />
                            <DialogSkeleton />
                            <DialogSkeleton />
                        </ContentBoxWrapper>
                    </MainBox>
                </motion.div>
                <ContentWrapper>
                    <Category />
                    <Login />
                    <Alarm />
                </ContentWrapper>
            </Wrapper>
        </>
    )
}

export default ReservationTemplate;

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