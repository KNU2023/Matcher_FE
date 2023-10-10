import BoxInput from "../../atoms/box/BoxInput";

const NNSignInFormBox = ({ children }) => {
    return (
        <>
            <BoxInput
                width="338px"
                height="26px"
                borderRadius="0px 0px 10px 10px"
                borderBottom="1px solid #B2B2B2"
                padding="12px 17px 12px 17px"
            >
                {children}
            </BoxInput>
        </>
    )
};

export default NNSignInFormBox;