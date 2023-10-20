import AlarmBox from "../molecules/box/AlarmBox";
import AlarmContentBox from "../molecules/box/AlarmContentBox";
import AlarmTitleBox from "./box/AlarmTitleBox";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const Alarm = () => {
    return (
        <Wrapper>
            <AlarmBox>
                <AlarmTitleBox />
                <AlarmBoxWrapper>
                    <AlarmContentBox>
                        <FontAwesomeIcon icon={faStar} flip size="2xs" style={{ color: "#fcc783", }} />
                        김규회 - 심컴 3학년
                    </AlarmContentBox>
                    <AlarmContentBox>
                        <FontAwesomeIcon icon={faStar} flip size="2xs" style={{ color: "#fcc783", }} />
                        심규민 - 심컴 3학년
                    </AlarmContentBox>
                    <AlarmContentBox>
                        <FontAwesomeIcon icon={faStar} flip size="2xs" style={{ color: "#fcc783", }} />
                        손홍석 - 심컴 3학년
                    </AlarmContentBox>
                </AlarmBoxWrapper>
            </AlarmBox>
        </Wrapper>
    )
}

export default Alarm;

const Wrapper = styled.div`
    margin-left: 12px;
`;

const AlarmBoxWrapper = styled.div`
    width: 286px;
    height: 349px;
    padding: 0px 16px 0px 22px;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 6px; /* 스크롤바의 너비 조절 */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #A9A9A9; /* 스크롤바 색상 */
        border-radius: 6px; /* 스크롤바 모양 변경 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #888888; /* 스크롤바 hover 시 색상 변경 */
    }
`;