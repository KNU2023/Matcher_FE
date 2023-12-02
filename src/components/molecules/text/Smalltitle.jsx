import Text from "../../atoms/text/Text";

const Smalltitle = ({ content, color, justifyContent, weight, onClick, margin }) => {
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
                margin={margin}
                onClick={onClick}
            >
                {content}
            </Text>
        </>
    )
}

export default Smalltitle;