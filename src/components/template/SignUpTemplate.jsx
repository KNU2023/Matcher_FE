import CheckSign from "../organisms/box/CheckSign";
import ButtonSignUp from "../organisms/button/ButtonSignUp";
import SignInForm from "../organisms/input/SignInForm";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpTemplate = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        userStudentNumber: "",
        userMajor: "",
        userName: "",
    });

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
                    <SignInForm formData={formData} setFormData={setFormData}/>
                </FormWrapper>
                <CheckWrapper>
                    <CheckSign isChecked={isChecked} setIsChecked={setIsChecked}/>
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