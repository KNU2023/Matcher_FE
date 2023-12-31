import Box from "../../atoms/box/Box";

const ContentBox = ({ children, onClick }) => {
    return (
        <>
            <Box
                width="146px"
                height="124px"
                borderRadius="10px"
                border="2px solid #03C75A"
                margin="0 auto"
                padding="13px 16px 10px 17px"
                onClick={onClick}
            >
                {children}
            </Box>
        </>
    )
}

export default ContentBox;