import Box from "../../atoms/box/Box";

const MyPageBox = ({ children }) => {
    return (
        <>
            <Box
                width="1020px"
                height="832px"
                backgroundColor="#F9FBFC"
            >
                {children}
            </Box>
        </>
    )
}

export default MyPageBox;