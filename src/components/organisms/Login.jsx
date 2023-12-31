import LoginBox from "../molecules/box/LoginBox";
import styled from "styled-components";
import Smalltitle from "../molecules/text/Smalltitle";
import LoginWrapper from "../molecules/div/LoginWrapper";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth?mode=login")
  }

  const handleSignUp = () => {
    navigate("/auth?mode=signup")
  }

  return (
    <>
      <LoginWrapper>
        <LoginBox>
          <LoginBoxWrapper>
            <Smalltitle content="Matcher 페이지를 찾아주셔서 감사합니다." />
            <KaKaoLoginBox onClick={handleLogin}>
              <LoginText>로그인 하기</LoginText>
            </KaKaoLoginBox>
            <Smalltitle content="아직 계정이 없으신가요?" onClick={handleSignUp}/>
          </LoginBoxWrapper>
        </LoginBox>
      </LoginWrapper>
    </>
  );
};

export default Login;

const KaKaoLoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 186px;
  height: 19.16px;
  background-color: #2f9b79;
  padding: 11px 100px 11px 14px;
  font-size: 13px;
  cursor: pointer;
`;

const LoginBoxWrapper = styled.div`
  padding: 47px 11px 47px 11px;
`;

const LoginText = styled.span`
  margin-left: 86px;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
`;
