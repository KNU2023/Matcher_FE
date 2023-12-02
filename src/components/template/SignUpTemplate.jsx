import CheckSign from "../organisms/box/CheckSign";
import ButtonSignUp from "../organisms/button/ButtonSignUp";
import SignUpForm from "../organisms/input/SignUpForm";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheck, updateFormData } from "../../store/signUpSlice";
import { useNavigate } from "react-router-dom";

const SignUpTemplate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isChecked = useSelector((state) => state.signup.isChecked);
    const formData = useSelector((state) => state.signup.formData);

    // Submit 버튼을 눌렀을 때 실행될 함수
    const submitHandler = () => {
        // formData에 저장된 값 출력
        console.log(formData);
        if (isChecked) {
            alert("회원가입이 완료되었습니다.");
            navigate("/");
        } else {
            alert("개인정보 처리 방침에 동의해야 합니다.");
        }
    };

    return (
        <>
            <Wrapper>
                <FormWrapper>
                    <SignUpForm formData={formData} setFormData={(data) => dispatch(updateFormData(data))} />
                </FormWrapper>
                <CheckWrapper>
                    <CheckSign isChecked={isChecked} setIsChecked={() => dispatch(toggleCheck())}/>
                </CheckWrapper>
                <ButtonSignUp onClick={submitHandler} />
            </Wrapper>
        </>
    )
}

export default SignUpTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = styled.div`
    margin: 53px 0px 57px 0px;
`;

const CheckWrapper = styled.div`
    margin: 0px 0px 77px 0px;
`;