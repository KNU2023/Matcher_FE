import Text from "../../atoms/text/Text";

const LogoutTitle = ({ content }) => {
    return (
        <>
            <Text
                size="10px"
                color="#000000"
                weight="normal"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                textAlign="center"
                margin="0px 4px 0px 0px"
            >
                {content}
            </Text>
        </>

    )
}

export default LogoutTitle;