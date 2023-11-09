import MJSignUpFormBox from "../../molecules/box/MJSignUpFormBox";
import SNSignUpFormBox from "../../molecules/box/SNSignUpFormBox";
import SignUpFormBox from "../../molecules/box/SignUpFormBox";
import SNSignInput from "../../molecules/input/SNSignInput";
import NNSignUpFormBox from "../../molecules/box/NNSignUpFormBox";
import { BsPerson } from "react-icons/bs";
import { LiaCrownSolid } from "react-icons/lia";
import { RiInformationLine } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineKey } from "react-icons/ai";
import styled from "styled-components";
import NNSignInput from "../../molecules/input/NNSignInput";
import MJSignInput from "../../molecules/input/MJSignInput";
import IDFormBox from "../../molecules/box/IDFormBox";
import IDSignInput from "../../molecules/input/IDSignInput";
import PWSignInput from "../../molecules/input/PWSignInput";

const SignUpForm = ({ formData, setFormData }) => {

    const handleStudentNumberChange = (e) => {
        setFormData({
            ...formData,
            studentNumber: e.target.value,
        });
        //console.log(e.target.value);
    }

    const handleMajorChange = (e) => {
        setFormData({
            ...formData,
            major: e.target.value,
        });
        //console.log(e.target.value);
    }

    const handleNicknameChange = (e) => {
        setFormData({
            ...formData,
            nickname: e.target.value,
        });
        //console.log(e.target.value);
    }

    const IDchange = (e) => {
        setFormData({
            ...formData,
            email: e.target.value,
        });
        //console.log(e.target.value);
    }

    const PWchange = (e) => {
        setFormData({
            ...formData,
            password: e.target.value,
        });
        //console.log(e.target.value);
    }

    return (
        <>
            <IDFormWrapper>
                <IDFormBox>
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <AiOutlineKey size="24px" color="#C3C3C3" />
                        </IconWrapper>
                        <IDSignInput
                            value={formData.email}
                            onChange={IDchange}
                        />
                    </Wrapper>
                </IDFormBox>
            </IDFormWrapper>

            <PWFormWrapper>
                <IDFormBox>
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <RiLockPasswordLine size="24px" color="#C3C3C3" />
                        </IconWrapper>
                        <PWSignInput
                            value={formData.password}
                            onChange={PWchange}
                        />
                    </Wrapper>
                </IDFormBox>
            </PWFormWrapper>

            <SignUpFormBox>
                <SNSignUpFormBox>
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <BsPerson size="24px" color="#C3C3C3" />
                        </IconWrapper>
                        <SNSignInput
                            value={formData.studentNumber}
                            onChange={handleStudentNumberChange}
                        />
                    </Wrapper>
                </SNSignUpFormBox>
                <MJSignUpFormBox>
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <RiInformationLine size="24px" color="#C3C3C3" />
                        </IconWrapper>
                        <MJSignInput
                            value={formData.major}
                            onChange={handleMajorChange}
                        />
                    </Wrapper>
                </MJSignUpFormBox>
                <NNSignUpFormBox>
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <LiaCrownSolid size="24px" color="#C3C3C3" />
                        </IconWrapper>
                        <NNSignInput
                            value={formData.name}
                            onChange={handleNicknameChange}
                        />
                    </Wrapper>
                </NNSignUpFormBox>
            </SignUpFormBox>
        </>
    )
}

export default SignUpForm;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const IconWrapper = styled.div`
    margin: ${props => props.margin || '0px'}; /* margin을 prop으로 받아 설정 */
`;

const IDFormWrapper = styled.div`
    margin: 10px 0px 30px 0px;
`;

const PWFormWrapper = styled.div`
    margin: 10px 0px 40px 0px;
`;