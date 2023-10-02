import Box from "../../atoms/box/Box";

const CategoryBox = ({ children }) => {
    return (
        <>
            <Box
                width="324px"
                height="145px"
                borderRadius="10px"
                border="2px solid #E3E5E8"
                boxShadow="4px 4px 4px rgba(0, 0, 0, 0.2)"
                backgroundColor="#F5F6F8"
            >
                {children}
            </Box>
        </>
    )
}

export default CategoryBox;