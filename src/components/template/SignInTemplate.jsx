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



    return (
        <>
            <Wrapper>
                <FormWrapper>
                    <SignInForm formData={formData} setFormData={(data) => dispatch(updateFormData(data))} />
                </FormWrapper>
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

