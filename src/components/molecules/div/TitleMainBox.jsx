import DivText from "../../atoms/div/DivText";

const TitleMainBox = ({ children }) => {
    return (
        <>
            <DivText
                width="611px"
                height="60px"
                display="flex"
                flexDirection="left"
            >
                {children}
            </DivText>
        </>
    )
}

export default TitleMainBox;