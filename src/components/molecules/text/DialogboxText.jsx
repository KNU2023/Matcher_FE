import Text from "../../atoms/text/Text";

const DialogboxText = ({ content, color, margin }) => {
    return (
        <>
            <Text
                size="16px"
                color={color}
                weight="bold"
                display="flex"
                flexDirection="row"
                justifyContent="left"
                textAlign="left"
                margin={margin}
            >
                {content}
            </Text>
        </>

    )
}

export default DialogboxText;