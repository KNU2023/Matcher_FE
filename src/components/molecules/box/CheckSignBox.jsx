import Box from "../../atoms/box/Box";


const CheckSignBox = ({ children }) => {
    return (
        <>
            <Box
                width="330px"
                height="26px"
                border="2px solid #B2B2B2"
                padding="12px 22px 12px 20px"
            >
                {children}
            </Box>
        </>
    )
}

export default CheckSignBox;