import ActiveButton from '../../atoms/button/ActiveButton';

const SeatBoxButton = ({key}) => {

    return (
        <ActiveButton
            key={key}
            width="30px"
            height="30px"
            margin="3px"
            borderRadius="4px"
            backgroundColor="#FFFFFF"
            border="2px solid #2F9B79"
            activeStyle={{
                backgroundColor: "#C0C0C0",
                border: "2px solid #C0C0C0"
            }}
        >

        </ActiveButton>
    )
}

export default SeatBoxButton;