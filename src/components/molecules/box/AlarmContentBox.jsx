import Box from "../../atoms/box/Box";

const AlarmContentBox = ({ children }) => {
    return (
        <>
            <Box
                width="229px"
                height="29px"
                borderRadius="10px"
                border="1px solid #E3E5E8"
                backgroundColor="#FFFFFF"
                padding="13px 34px 20px 17px"
                margin="10px 0px 10px 0px"
                boxShadow="0px 1px 3px rgba(0, 0, 0, 0.25)"
            >
                {children}
            </Box>
        </>
    )
}

export default AlarmContentBox;