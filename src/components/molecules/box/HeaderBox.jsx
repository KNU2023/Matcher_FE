import Box from "../../atoms/box/Box";

const HeaderBox = ({ children }) => {
    return (
        <>
            <Box
                width="460px"
                height="55px"
                padding="40px 280px 15px 280px"
            >
                {children}
            </Box>
        </>
    )
}

export default HeaderBox;