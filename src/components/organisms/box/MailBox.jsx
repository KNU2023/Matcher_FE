import styled from "styled-components";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Smalltitle from "../../molecules/text/Smalltitle";

const MailBox = ({ openModal }) => {
    return (
        <MailBoxWrapper onClick={openModal}>
            <IoChatbubbleEllipses size="24" color="#2F9B79" />
            <Smalltitle content="컴퓨터학부 3학년" />
            <Smalltitle weight="bold" content="종프 1 팀원 한 분 찾습니다. 보고 문의드립니다." />
            <Smalltitle content="2023/06/11 | 18:00" />
        </MailBoxWrapper>
    )
};

const MailBoxWrapper = styled.div`
    width: 611px;
    height: 50px;
    border-top: 1px solid #E7E8EB;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export default MailBox;