import Button from "../atoms/Button";

const Iconbox = ({ children, onClick }) => {

    const hoverStyle ={
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        color: '#2F9B79',
    }

    return (
        <Button
            width="44px"
            height="44px"
            margin="0px 25px 14px 25px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#ffffff"
            boxShadow="4px 4px 4px rgba(0, 0, 0, 0.2)"
            borderRadius="10px"
            hoverStyle={hoverStyle}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default Iconbox;