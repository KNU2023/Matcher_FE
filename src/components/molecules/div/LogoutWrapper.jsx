import DivText from "../../atoms/div/DivText";

const LogoutWrapper = ({ children }) => {
    return (
        <>
            <DivText
                display="flex"
                flexDirection="row"
                justifyContent="center"
                textAlign="center"
            >
                {children}
            </DivText>
        </>
    )
}

export default LogoutWrapper;
