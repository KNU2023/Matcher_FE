import ActiveButton from '../../atoms/button/ActiveButton';

const ReserveSeatBoxButton = ({ id, rowNumber, colNumber, booker, onClick, isActive }) => {

    //console.log("booker 제대로", booker);

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