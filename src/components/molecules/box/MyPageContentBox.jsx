import Box from "../../atoms/box/Box";

const MyPageContentBox = ({ children }) => {
    return (
        <>
            <Box
                width="536px"
                height="25px"
                border="2px solid #03C75A"
                display="flex"
                padding="8px"
                margin ="5px"
                justifyContent="center"
                alignItems="center"
            >
                {children}
            </Box>
        </>
    )
}

export default MyPageContentBox;