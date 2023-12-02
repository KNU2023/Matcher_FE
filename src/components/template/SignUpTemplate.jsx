import SignUpForm from "../organisms/input/SignUpForm";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/signUpSlice";
import { useNavigate } from "react-router-dom";

const SignUpTemplate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formData = useSelector((state) => state.signup.formData);

    // Submit 버튼을 눌렀을 때 실행될 함수
    

    return (
        <>
            <Wrapper>
                <FormWrapper>
                    <SignUpForm formData={formData} setFormData={(data) => dispatch(updateFormData(data))} />
                </FormWrapper>
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

