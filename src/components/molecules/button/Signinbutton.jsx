import Button from "../../atoms/button/Button";

const Signinbutton = ({ title, onClick }) => {

    const hoverStyle = {
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
    }

    return (
        <Button
            width="372px"
            height="60px"
            fontSize="20px"
            color="#ffffff"
            borderRadius="10px"
            border="none"
            backgroundColor="#2F9B79"
            boxshadow="4px 4px 2px rgba(0,0,0,0.2)"
            hoverStyle={hoverStyle}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default Signinbutton;

