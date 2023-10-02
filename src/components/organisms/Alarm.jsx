import AlarmBox from "../molecules/box/AlarmBox";
import AlarmContentBox from "../molecules/box/AlarmContentBox";
import AlarmTitleBox from "./box/AlarmTitleBox";
import styled from "styled-components";

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

const Alarm = () => {
    return (
        <>
            <AlarmBox>
                <AlarmTitleBox />
                <AlarmBoxWrapper>
                    <AlarmContentBox />
                </AlarmBoxWrapper>
            </AlarmBox>
        </>
    )
}

export default Alarm;