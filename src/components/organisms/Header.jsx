import HeaderBox from "../molecules/box/HeaderBox";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const onClickHome = () => {
        navigate("/");
    }
    
    return (
        <>
            <HeaderBox onClick={onClickHome}>
                <HeaderWrapper>
                    <MainTitle>Matcher</MainTitle>
                    <SubTitle>당신의 예약과 프로젝트, 팀원을 찾는 모든 것을 이곳에</SubTitle>
                </HeaderWrapper>
            </HeaderBox>
        </>
    )
}

export default Header;

const MainTitle = styled.span`
    font-size : 32px;
    line-height: 32px;
    color: #2F9B79;
    font-weight: bold;
`;

const SubTitle = styled.span`
    font-size : 20px;
    line-height: 25px;
    color: #A6D4C5;
    font-weight: bold;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;