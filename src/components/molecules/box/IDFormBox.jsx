import BoxInput from "../../atoms/box/BoxInput";

const IDFormBox = ({ children }) => {
    return (
        <>
            <BoxInput
                width="338px"
                height="26px"
                borderRadius="10px"
                borderTop="1px solid #B2B2B2"
                borderLeft="1px solid #B2B2B2"
                borderRight="1px solid #B2B2B2"
                borderBottom="1px solid #B2B2B2"
                padding="12px 17px 12px 17px"
            >
                {children}
            </BoxInput>
        </>
    )
};

export default IDFormBox;