import Box from "../../atoms/box/Box";

const DialogBox = ({ children, onClick }) => {
    return (
        <>
            <Box
                width="560px"
                height="555px"
                borderRadius="10px"
                border="2px solid #03C75A"
                margin="0 auto"
                padding="8px 9px 23px 23px"
                onClick={onClick}
            >
                {children}
            </Box>
        </>
    )
}

export default DialogBox;