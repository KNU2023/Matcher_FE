import DialogFormBox from "../../molecules/box/DialogFormBox";
import FormInput from "../../molecules/input/FormInput";
import ImageInput from "../../molecules/input/ImageInput";
import TextAreaInput from "../../molecules/input/TextAreaInput";
import DialogboxText from "../../molecules/text/DialogboxText";
import ButtonCreate from "../button/ButtonCreate";
import styled from "styled-components";

const ReserveCreateBox = () => {
    return (
        <>
            <DialogFormBox>
                <BoxWrapper>
                    <DialogboxText content="제목" />
                    <FormInput id="title" width="228px" height="5px" padding="15px" marginTop="22px" marginBottom="22px" />
                    <DialogboxText content="본문" />
                    <TextAreaInput
                        id="textarea"
                        width="425px"
                        height="311px"
                        marginTop="22px"
                        marginBottom="22px"
                        padding="27px 27px 27px 27px"
                    />
                    <DialogboxText content="날짜" />
                    <DialogboxText content="장소" />
                    <DialogboxText content="좌석을 생성해 주세요." />

                    <ButtonWrapper>
                        <ButtonCreate />
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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default ReserveCreateBox;