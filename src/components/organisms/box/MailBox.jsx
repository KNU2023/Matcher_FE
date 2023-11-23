import styled from "styled-components";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Smalltitle from "../../molecules/text/Smalltitle";

const MailBox = ({ key, data, openModal }) => {
    return (
        <MailBoxWrapper onClick={openModal}>
            <IoChatbubbleEllipses size="24" color="#2F9B79" />
            {/* <Smalltitle weight="bold" content="종프 1 팀원 한 분 찾습니다. 보고 문의드립니다." /> */}
            <Smalltitle weight="bold" content={data.userName} key={data.id}/>
            <Smalltitle content={data.userEmail} key={data.id}/>
        </MailBoxWrapper>
    )
};

const MailBoxWrapper = styled.div`
    width: 611px;
    height: 50px;
    border-top: 1px solid #E7E8EB;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export default MailBox;