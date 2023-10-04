import LoginBox from "../molecules/box/LoginBox";
import LoginWrapper from "../molecules/div/LoginWrapper";
import styled from "styled-components";
import profile from "../../assets/profile.svg";
import lock from "../../assets/lock.svg";
import Img from "../atoms/img/Img";
import ButtonLogout from "./button/ButtonLogout";
import Smalltitle from "../molecules/text/Smalltitle";
import LogoutTitle from "../molecules/text/LogoutTitle";

const LoginComplete = () => {
  return (
    <>
      <LoginWrapper>
        <LoginBox>
          <SectionBox>
            <Img margin="11px 0px 0px 0px">{profile}</Img>
            <ContentBox>
              <ButtonLogout />
              <ContentWrapper>
                <LogoutTitle size="14" weight="bold" content="이름님" />
                <DivideBar />
                <Smalltitle color="#606060" content="으라차차 ID" />
                <Img margin="0px 0px 0px 4px">{lock}</Img>
              </ContentWrapper>
              <Smalltitle
                justifyContent="left"
                weight="bold"
                content="k546kh@gmail.com"
              />
            </ContentBox>
          </SectionBox>
          <MypageButton>마이페이지</MypageButton>
        </LoginBox>
      </LoginWrapper>
    </>
  );
};

export default LoginComplete;

const SectionBox = styled.div`
  width: 273px;
  height: 76px;
  padding: 12px 23px 23px 28px;
  display: flex;
  flex-direction: row;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

const DivideBar = styled.div`
  width: 1px;
  height: 10px;
  background-color: #d9d9d9;
  margin: 0px 10px 0px 10px;
`;

const MypageButton = styled.div`
  width: 66px;
  height: 17px;
  background-color: #2f9b79;
  padding: 11px 129px 11px 129px;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  text-align: center;
  border-radius: 0px 0px 8px 8px;
  color: #ffffff;
  cursor: pointer;
`;
