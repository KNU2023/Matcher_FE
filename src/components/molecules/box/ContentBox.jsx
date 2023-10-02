import Box from "../../atoms/box/Box";

const ContentBox = ({ children }) => {
    return (
        <>
            <Box
                width="179px"
                height="150px"
                borderRadius="10px"
                border="2px solid #03C75A"
                margin="0 auto"
                padding="13px 16px 13px 17px"
            >
                {children}
            </Box>
        </>
    )
}

export default ContentBox;