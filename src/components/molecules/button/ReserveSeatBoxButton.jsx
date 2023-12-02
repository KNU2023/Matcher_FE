import ActiveButton from '../../atoms/button/ActiveButton';

const ReserveSeatBoxButton = ({key}) => {

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
                backgroundColor: "#2F9B79",
            }}
        >

        </ActiveButton>
    )
}

export default ReserveSeatBoxButton;