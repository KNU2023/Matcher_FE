import ButtonSignIn from "../organisms/button/ButtonSignIn";
import SignInForm from "../organisms/input/SignInForm";
import styled from "styled-components";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData} from "../../store/signInSlice";
import { useNavigate } from "react-router-dom";

const SignInTemplate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.signin.formData);


    // Submit 버튼을 눌렀을 때 실행될 함수
    const submitHandler = () => {
        // formData에 저장된 값 출력
        console.log(formData);
        alert("로그인이 완료되었습니다.");
        navigate("/");
        // if (isChecked) {
        //     alert("로그인이 완료되었습니다.");
        //     navigate("/");
        // } else {
        //     alert("로그인에 실패하였습니다. 다시 시도해주세요.");
        // }
    };

    return (
        <>
            <Wrapper>
                <FormWrapper>
                    <SignInForm formData={formData} setFormData={(data) => dispatch(updateFormData(data))} />
                </FormWrapper>
                <ButtonSignIn onClick={submitHandler} />
            </Wrapper>
        </>
    )
}

export default SignInTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = styled.div`
    margin: 130px 0px 57px 0px;
`;

