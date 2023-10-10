import CheckSignBox from "../../molecules/box/CheckSignBox";
import TitleboxText from "../../molecules/text/TitleboxText";
import { BsCheckCircle } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const CheckSign = ({ isChecked, setIsChecked }) => {

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <CheckSignBox>
                <BoxWrapper>
                    {isChecked ? (
                        <BsCheckCircleFill
                            size="22px"
                            color="#2F9B79"
                            onClick={toggleCheck}
                        />
                    ) : (
                        <BsCheckCircle
                            size="22px"
                            color="#D9D9D9"
                            onClick={toggleCheck}
                        />
                    )}
                    <TitleboxText margin="0px 0px 0px 20px" color="#2F9B79" content="[필수]" />
                    <TitleboxText margin="0px 0px 0px 20px" content="개인정보 처리 방침에 동의합니다." />
                </BoxWrapper>
            </CheckSignBox>
        </>
    )
}

export default CheckSign;