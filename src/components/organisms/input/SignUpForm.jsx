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
import ButtonSignUp from "../button/ButtonSignUp";
import CheckSign from "../box/CheckSign.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheck } from "../../../store/signUpSlice.jsx";
import axios from "axios";



const SignUpForm = ({ formData, setFormData }) => {
    const dispatch = useDispatch();
    const isChecked = useSelector((state) => state.signup.isChecked);

    const handleStudentNumberChange = (e) => {
        setFormData({
            ...formData,
            stdNumber: e.target.value,
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
            name: e.target.value,
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

    const submitHandler = async () => {
        // formData에 저장된 값 출력
        if (isChecked) {
            // console.log(formData)
            // navigate("/");
            console.log(formData);

            try {


                const response = await axios.post("/api/signup", formData);
                console.log('서버 응답:', response.data);

                alert("회원가입이 완료되었습니다.");
                window.location.replace("/")

            } catch (error) {
                console.error('데이터 제출 오류:', error);

            }
        } else {
            alert("개인정보 처리 방침에 동의해야 합니다.");
        }
    };

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
            <CheckWrapper>
                <CheckSign isChecked={isChecked} setIsChecked={() => dispatch(toggleCheck())} />
            </CheckWrapper>
            <ButtonSignUp onClick={submitHandler} />
        </>
    )
}

export default SignUpForm;

const CheckWrapper = styled.div`
    margin: 77px 0px 77px 0px;
`;

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