import Text from "../../atoms/text/Text";

const Smalltitle = ({ content, color, justifyContent, weight, onClick }) => {
    return (
        <>
            <Text
                size="10px"
                color={color}
                weight={weight}
                display="flex"
                flexDirection="row"
                justifyContent={justifyContent}
                textAlign="center"
                margin="0px"
                onClick={onClick}
            >
                {content}
            </Text>
        </>

    )
}

export default Smalltitle;