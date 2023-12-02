import ActiveButton from '../../atoms/button/ActiveButton';
import styled from 'styled-components';

const SeatBoxButton = ({ key, rowNumber, colNumber, onSeatSelect }) => {

    const handleButtonClick = () => {
        // 클릭된 좌석 정보를 전달하는 콜백 함수 호출
        onSeatSelect({ rowNumber, colNumber });
        // console.log("좌석 선택", rowNumber, colNumber);
    };

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
            onClick={handleButtonClick}
        >
            <SeatBoxText>
                {rowNumber}/{colNumber}
            </SeatBoxText>
        </ActiveButton>
    )
}

const SeatBoxText = styled.div`
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default SeatBoxButton;