import MainBox from "../molecules/box/MainBox";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";
import TitleMainBox from "../molecules/div/TitleMainBox";
import TitleMainBoxText from "../molecules/text/TitleMainBoxText";
import { useNavigate, useLocation } from "react-router-dom";
import ReserveCreateBox from "../organisms/box/ReserveCreateBox";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../store/authSlice";
import LoginComplete from "../organisms/LoginComplete";

const ReservationCreateTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const accessToken = useSelector(selectAccessToken);
    

    const onClickReserve = () => {
        navigate("/");
    }

    return (
        <>
            <Wrapper>
                <MainBox >
                    <TitleMainBox>
                        <TitleMainBoxText
                            content="자리 예약"
                            onClick={onClickReserve}
                            cursor="pointer"
                            active={location.pathname === "/"}
                        />
                        <TitleMainBoxText
                            content="예약 생성"
                            margin="0px 0px 0px 27px"
                            cursor="pointer"
                            active={location.pathname === "/create"}
                        />
                    </TitleMainBox>
                    <ReserveCreateBox />
                </MainBox>
                <ContentWrapper>
                    <Category />
                    {accessToken ? <LoginComplete /> : <Login />}
                    <Alarm />
                </ContentWrapper>
            </Wrapper>
        </>
    )
}

export default ReservationCreateTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;