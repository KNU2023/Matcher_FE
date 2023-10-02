import Button from "../../atoms/button/Button";

const Logout = ({ children, onClick }) => {


    return (
        <Button
            width="80px"
            height="31px"
            fontsize="10px"
            margin="0px"
            color="#606060"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#ffffff"
            borderRadius="15px"
            border="1px solid #E3E5E8"
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default Logout;