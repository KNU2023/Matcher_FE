import Box from "../../atoms/box/Box";

const DialogFormBox = ({ children }) => {
    return (
        <>
            <Box
                width="554px"
                height="539px"
                borderRadius="10px"
                border="2px solid #03C75A"
                margin="0 auto"
                padding="30px 16px 17px 24px"
            >
                {children}
            </Box>
        </>
    )
}

export default DialogFormBox;