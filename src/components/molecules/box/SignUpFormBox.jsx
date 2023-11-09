import Box from "../../atoms/box/Box";

const SignUpFormBox = ({ children }) => {
    return(
        <>
            <Box
                width="372px"
                height="150px"
                border="1px solid #B2B2B2"
                borderRadius="10px"
            >
                {children}
            </Box>
        </>
    )
};

export default SignUpFormBox;