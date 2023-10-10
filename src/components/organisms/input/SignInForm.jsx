import MJSignInFormBox from "../../molecules/box/MJSignInFormBox";
import SNSignInFormBox from "../../molecules/box/SNSignInFormBox";
import SignInFormBox from "../../molecules/box/SignInFormBox";
import SNSignInput from "../../molecules/input/SNSignInput";
import NNSignInFormBox from "../../molecules/box/NNSignInFormBox";
import { BsPerson } from "react-icons/bs";
import { LiaCrownSolid } from "react-icons/lia";
import { RiInformationLine} from "react-icons/ri";
import styled from "styled-components";
import NNSignInput from "../../molecules/input/NNSignInput";
import MJSignInput from "../../molecules/input/MJSignInput";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const IconWrapper = styled.div`
    margin: ${props => props.margin || '0px'}; /* margin을 prop으로 받아 설정 */
`;

const SignInForm = () => {
    return (
        <>
            <SignInFormBox>
                <SNSignInFormBox>
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <BsPerson size="24px" color="#C3C3C3" />
                        </IconWrapper>
                        <SNSignInput />
                    </Wrapper>
                </SNSignInFormBox>
                <MJSignInFormBox> 
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <RiInformationLine size="24px" color="#C3C3C3"/>
                        </IconWrapper>
                        <MJSignInput />
                    </Wrapper>
                </MJSignInFormBox>
                <NNSignInFormBox>
                    <Wrapper>
                        <IconWrapper margin="0px 10px 0px 0px">
                            <LiaCrownSolid size="24px" color="#C3C3C3" />
                        </IconWrapper>
                        <NNSignInput />
                    </Wrapper>
                </NNSignInFormBox>
            </SignInFormBox>
        </>
    )
}

export default SignInForm;