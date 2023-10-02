import DivIcon from "../../atoms/div/DivIcon";

const IconWrapper = ({ children }) => {
    return (
        <>
            <DivIcon
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                {children}
            </DivIcon>
        </>

    )
}

export default IconWrapper;