import Header from "./components/organisms/Header";
import Category from "./components/organisms/Category";
// import Login from "./components/organisms/Login";
import LoginComplete from "./components/organisms/LoginComplete";
import Alarm from "./components/organisms/Alarm";
import MainBox from "./components/molecules/box/MainBox";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <MainBox />
        <SectionWrapper>
          <Category />
          <LoginComplete />
          {/* <Login /> */}
          <Alarm />
        </SectionWrapper>
      </ContentWrapper>
    </>
  );
}

export default App;
