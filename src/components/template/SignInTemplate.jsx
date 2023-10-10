import Header from "../organisms/Header";
import CheckSign from "../organisms/box/CheckSign";
import ButtonSignIn from "../organisms/button/ButtonSignIn";
import SignInForm from "../organisms/input/SignInForm";
import styled from "styled-components";

const SignInTemplate = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <FormWrapper>
                    <SignInForm />
                </FormWrapper>
                <CheckWrapper>
                    <CheckSign />
                </CheckWrapper>
                <ButtonSignIn />
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
    margin: 53px 0px 57px 0px;
`;

const CheckWrapper = styled.div`
    margin: 0px 0px 77px 0px;
`;