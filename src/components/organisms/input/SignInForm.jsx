import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineKey } from "react-icons/ai";
import styled from "styled-components";
import IDFormBox from "../../molecules/box/IDFormBox";
import IDSignInput from "../../molecules/input/IDSignInput";
import PWSignInput from "../../molecules/input/PWSignInput";

const SignInForm = ({ formData, setFormData }) => {


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

        </>
    )
}

export default SignInForm;

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