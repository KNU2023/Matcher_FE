import MJSignUpFormBox from "../../molecules/box/MJSignUpFormBox";
import SNSignUpFormBox from "../../molecules/box/SNSignUpFormBox";
import SignUpFormBox from "../../molecules/box/SignUpFormBox";
import SNSignInput from "../../molecules/input/SNSignInput";
import NNSignUpFormBox from "../../molecules/box/NNSignUpFormBox";
import { BsPerson } from "react-icons/bs";
import { LiaCrownSolid } from "react-icons/lia";
import { RiInformationLine } from "react-icons/ri";
import styled from "styled-components";
import NNSignInput from "../../molecules/input/NNSignInput";
import MJSignInput from "../../molecules/input/MJSignInput";
import ButtonEditUser from "../button/ButtonEditUser";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../../store/signUpSlice";
import axios from "axios";

const EditUserForm = ({ formData }) => {
    const dispatch = useDispatch();


    const submitHandler = async () => {
        //console.log(formData.nickname);
        try {
            const accessToken = localStorage.getItem("accessToken");
            const requestData = {
                name: formData.nickname,
                major: formData.major,
                stdNumber: formData.studentNumber,
            };

            const response = await axios.put('/api/user', requestData, {
                headers: {
                    Authorization: accessToken,
                },
            });
            console.log('서버 응답:', response.data);

            alert("회원정보가 수정되었습니다.");
            window.location.replace("/mypage")

        } catch (error) {
            console.error('데이터 제출 오류:', error);

        }
    };


    return (
        <>
            <SignUpFormBox>
                <SNSignUpFormBox>
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <BsPerson size="24px" color="#C3C3C3" />
                        </IconWrapper>
                        <SNSignInput
                            onChange={(e) => dispatch(updateFormData({ studentNumber: e.target.value }))}
                        />
                    </Wrapper>
                </SNSignUpFormBox>
                <MJSignUpFormBox>
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <RiInformationLine size="24px" color="#C3C3C3" />
                        </IconWrapper>
                        <MJSignInput
                            onChange={(e) => dispatch(updateFormData({ major: e.target.value }))}
                        />
                    </Wrapper>
                </MJSignUpFormBox>
                <NNSignUpFormBox>
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <LiaCrownSolid size="24px" color="#C3C3C3" />
                        </IconWrapper>
                        <NNSignInput
                            onChange={(e) => dispatch(updateFormData({ nickname: e.target.value }))}
                        />
                    </Wrapper>
                </NNSignUpFormBox>
            </SignUpFormBox>
            <ButtonWrapper>
                <ButtonEditUser onClick={submitHandler} />
            </ButtonWrapper>
        </>
    )
}

export default EditUserForm;


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const IconWrapper = styled.div`
    margin: ${props => props.margin || '0px'}; /* margin을 prop으로 받아 설정 */
`;

const ButtonWrapper = styled.div`
    margin-top: 60px;
`;
