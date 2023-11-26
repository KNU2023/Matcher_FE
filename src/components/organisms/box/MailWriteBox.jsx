import DialogFormBox from "../../molecules/box/DialogFormBox";
import FormInput from "../../molecules/input/FormInput";
import TextAreaInput from "../../molecules/input/TextAreaInput";
import DialogboxText from "../../molecules/text/DialogboxText";
import styled from "styled-components";
import ButtonMailWrite from "../button/ButtonMailWrite";


const MailWriteBox = () => {
 

    return (
        <>
            <DialogFormBox>
                <BoxWrapper>
                    <DialogboxText content="보낼 이" />
                    <FormInput id="title" type="text" />
                    <DialogboxText content="본문" />
                    <TextAreaInput
                        id="textarea"
                        width="425px"
                        height="311px"
                        marginTop="22px"
                        marginBottom="22px"
                        padding="27px 27px 27px 27px"
                        
                    />
                    <ButtonWrapper>
                        <ButtonMailWrite/>
                    </ButtonWrapper>
                </BoxWrapper>
            </DialogFormBox>
        </>
    )
};

const BoxWrapper = styled.div`
    height: 539px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px; /* Width of scrollbar */
        height: 0px; /* Set to 0 for horizontal scrollbar */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #C0C0C0; /* Scrollbar color */
        border-radius: 4px; /* Round the corners of the scrollbar */
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* Color of scrollbar track */
    }
`;

const SeatWrapper = styled.div`
    width: 450px;
    height: 450px;
    border-radius : 15px;
    padding: 30px;
    background-color: #F5F6F8;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default MailWriteBox;