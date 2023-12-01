import Box from "../../atoms/box/Box";

const EditModalBox = ({ children, onClick }) => {
    return (
        <>
            <Box
                width="260px"
                height="290px"
                borderRadius="10px"
                border="2px solid #03C75A"
                margin="0 auto"
                padding="20px"
                onClick={onClick}
            >
                {children}
            </Box>
        </>
    )
}

export default EditModalBox;