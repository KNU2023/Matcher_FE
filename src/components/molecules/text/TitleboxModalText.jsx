import Text from "../../atoms/text/Text";

const TitleboxModalText = ({ content, color, margin, onClick, justifyContent, textAlign }) => {
    return (
        <>
            <Text
                size="24px"
                color={color}
                weight="bold"
                display="flex"
                flexDirection="row"
                justifyContent={justifyContent}
                textAlign={textAlign}
                margin={margin}
                onClick={onClick}
            >
                {content}
            </Text>
        </>

    )
}

export default TitleboxModalText;