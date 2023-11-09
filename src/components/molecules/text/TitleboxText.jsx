import Text from "../../atoms/text/Text";

const TitleboxText = ({ content, color, margin, onClick }) => {
    return (
        <>
            <Text
                size="16px"
                color={color}
                weight="bold"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                textAlign="center"
                margin={margin}
                onClick={onClick}
            >
                {content}
            </Text>
        </>

    )
}

export default TitleboxText;