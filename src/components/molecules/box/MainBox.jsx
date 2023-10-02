import Box from "../../atoms/box/Box";

const MainBox = ({ children }) => {
    return (
        <>
            <Box
                width="611px"
                height="636px"
                borderRadius="10px"
                border="2px solid #E3E5E8"
                boxShadow="4px 4px 4px rgba(0, 0, 0, 0.2)"
                padding="27px 26px 58px 35px"
            >
                {children}
            </Box>
        </>
    )
}

export default MainBox;