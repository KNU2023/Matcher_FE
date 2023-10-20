import TitleBox from "../../molecules/box/TitleBox"
import { BsFillPinAngleFill } from "react-icons/bs"
import TitleBoxWrapper from "../../molecules/div/TitleBoxWrapper";
import TitleboxText from "../../molecules/text/TitleboxText";

const AlarmTitleBox = () => {
    return (
        <>
            <TitleBox>
                <TitleBoxWrapper>
                    <TitleboxText content="팀원 소개" />
                    <BsFillPinAngleFill size="24" color="2F9B79" />
                </TitleBoxWrapper>
            </TitleBox>
        </>
    )
}

export default AlarmTitleBox;