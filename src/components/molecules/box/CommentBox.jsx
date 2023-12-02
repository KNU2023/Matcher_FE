import Box from "../../atoms/box/Box";

const CommentBox = ({ children }) => {
    return (
        <>
            <Box
                width="536px"
                height="14px"
                border="0.5px solid #E7E8EB"
                display="flex"
                padding="8px 0px 8px 0px"
                margin ="1px"
                justifyContent="center"
                alignItems="center"
            >
                {children}
            </Box>
        </>
    )
}

export default CommentBox;