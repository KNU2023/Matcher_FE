import Text from "../../atoms/text/Text";

const TitleboxModalSecondText = ({ size, content, color, margin, onClick }) => {
    return (
        <>
            <Text
                size={size}
                color={color}
                weight="regular"
                display="flex"
                flexDirection="row"
                justifyContent="left"
                textAlign="left"
                margin={margin}
                onClick={onClick}
            >
                {content}
            </Text>
        </>

    )
}

export default TitleboxModalSecondText;