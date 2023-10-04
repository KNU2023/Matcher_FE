import LoginBox from "../molecules/box/LoginBox";
import styled from "styled-components";
import { ImBubble } from "react-icons/im";
import Smalltitle from "../molecules/text/Smalltitle";
import LoginWrapper from "../molecules/div/LoginWrapper";

const Login = () => {
  return (
    <>
      <LoginWrapper>
        <LoginBox>
          <LoginBoxWrapper>
            <Smalltitle content="으라차차 페이지를 찾아주셔서 감사합니다." />
            <KaKaoLoginBox>
              <ImBubble size="18" color="#000000" />
              <LoginText>카카오 로그인</LoginText>
            </KaKaoLoginBox>
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
  background-color: #fee500;
  padding: 11px 100px 11px 14px;
  font-size: 13px;
  cursor: pointer;
`;

const LoginBoxWrapper = styled.div`
  padding: 47px 11px 47px 11px;
`;

const LoginText = styled.span`
  margin-left: 86px;
`;
