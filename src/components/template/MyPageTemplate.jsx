import styled from "styled-components";
import profile from "../../assets/profile.svg";
import MyprofileNavigation from "../organisms/MyprofileNavigation";
import ProfileText from "../molecules/text/ProfileText";
import Img from "../atoms/img/Img";

const MyPageTemplate = () => {
    return (
        <>
            <Wrapper>
                <ProfileBox>
                    <Img margin="11px 0px 11px 0px" width="111px" height="111px">{profile}</Img>
                    <ProfileText content="김민수" margin="0px 0px 87px 0px"/>
                    <MyprofileNavigation />
                    <LittleText>로그아웃</LittleText>
                    <SmallLittleText>으라차차</SmallLittleText>
                </ProfileBox>
                <SideBox>
                    <ContentBox>

                    </ContentBox>
                </SideBox>
            </Wrapper>
        </>
    )
}

export default MyPageTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ProfileBox = styled.div`
    width: 411px;
    height: 832px;
    border: 1px solid #E3E5E8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SideBox = styled.div`
    width: 739px;
    height: 832px;
    background-color: #F9FBFC;
`;

const ContentBox = styled.div`
    width: 609px;
    height: 832px;
    background-color: #F9FBFC;
`;

const LittleText = styled.span`
    font-size: 8px;
    color: #b2b2b2;
    cursor: pointer;
    margin: 33px 0px 13px 0px;
`;

const SmallLittleText = styled.span`
    font-size: 14px;
    weight: bold;
    color: #b2b2b2;
`;