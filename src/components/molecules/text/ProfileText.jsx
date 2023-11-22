import Text from "../../atoms/text/Text";

const ProfileText = ({ content, color, margin, onClick, cursor, active }) => {
    return (
        <>
            <Text
                size="20px"
                color={color}
                weight="bold"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                textAlign="center"
                margin={margin}
                active={active}
                onClick={onClick}
                cursor={cursor}
            >
                {content}
            </Text>
        </>

    )
}

export default ProfileText;