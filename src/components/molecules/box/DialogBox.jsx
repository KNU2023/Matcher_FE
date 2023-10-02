import Box from "../../atoms/box/Box";

const DialogBox = ({ children }) => {
    return (
        <>
            <Box
                width="569px"
                height="539px"
                borderRadius="10px"
                border="2px solid #03C75A"
                margin="0 auto"
                padding="7px 9px 40px 16px"
            >
                {children}
            </Box>
        </>
    )
}

export default DialogBox;