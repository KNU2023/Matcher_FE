import Text from "../../atoms/text/Text";

const TitleboxText = ({ content }) => {
    return (
        <>
            <Text
                size="16px"
                color="#000000"
                weight="bold"
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

export default TitleboxText;