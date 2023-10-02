import Box from "../../atoms/box/Box";


const LoginBox = ({ children }) => {
    return (
        <>
            <Box
                width="324px"
                height="150px"
                border="2px solid #E3E5E8"
                boxShadow="4px 4px 4px rgba(0, 0, 0, 0.2)"
            >
                {children}
            </Box>
        </>
    )
}

export default LoginBox;