import Box from "../../atoms/box/Box";

const MyPageTextBox = ({ children }) => {
    return (
        <>
            <Box
                width="411px"
                height="832px"
                border="1px solid #E3E5E8"
                boxShadow="2px 4px 4px rgba(0, 0, 0, 0.2)"
                backgroundColor="#FFFFFF"
            >
                {children}
            </Box>
        </>
    )
}

export default MyPageTextBox;