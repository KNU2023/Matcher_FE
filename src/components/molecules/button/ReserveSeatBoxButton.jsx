import ClickButton from '../../atoms/button/ClickButton';
import styled from 'styled-components';

const ReserveSeatBoxButton = ({ id, row, column, booker, onClick, isActive  }) => {

    console.log("booker 제대로", booker);

    return (
        <ClickButton
            key={id}
            width="30px"
            height="30px"
            margin="3px"
            borderRadius="4px"
            backgroundColor={booker ? "#2F9B79" : "#FFFFFF"}
            border={booker ? "2px solid #2F9B79" : "2px solid #2F9B79"}
            activeStyle={{
                backgroundColor: "#2F9B79",
            }}
            onClick={onClick}
            isActive={isActive}
        >
            <SeatBoxText>
                {row}/{column}
            </SeatBoxText>
        </ClickButton>
    )
}

const SeatBoxText = styled.div`
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default ReserveSeatBoxButton;
