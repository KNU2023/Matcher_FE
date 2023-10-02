import Text from "../../atoms/text/Text";

const Smalltitle = ({ content }) => {
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
                margin="0px"
            >
                {content}
            </Text>
        </>

    )
}

export default Smalltitle;