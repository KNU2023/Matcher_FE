import Button from "../../atoms/button/Button";

const Dialogbutton = ({ title, onClick }) => {

    const hoverStyle ={
        backgroundColor: '#03C75A',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        color: '#fff',
    }

    return (
        <Button
            width="92px"
            height="22px"
            fontSize="10px"
            color="black"
            borderRadius="10px"
            border="2px solid #03C75A"
            backgroundColor="white"
            boxShadow="4px 4px 2px rgba(0,0,0,0.2)"
            hoverStyle={hoverStyle}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default Dialogbutton;

