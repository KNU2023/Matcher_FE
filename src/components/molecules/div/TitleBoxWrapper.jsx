import DivText from "../../atoms/div/DivText";

const TitleBoxWrapper = ({ children }) => {
    return (
        <>
            <DivText
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                textAlign="center"
            >
                {children}
            </DivText>
        </>
    )
}

export default TitleBoxWrapper;
