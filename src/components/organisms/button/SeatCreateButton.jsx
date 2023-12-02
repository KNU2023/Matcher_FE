import SeatBoxButton from "../../molecules/button/SeatBoxButton";
import styled from "styled-components";
import { useState } from "react";

const SeatCreateButton = ({ onSeatSelect }) => {
    const rows = 12;
    const columns = 12;

    const createSeatId = (row, column) => `p${row}_${column}`;

    const DUMMY_SEAT = Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: columns }, (_, columnIndex) => {
            const seatId = createSeatId(rowIndex + 1, columnIndex + 1);
            return {
                id: seatId,
                rowNumber: rowIndex,
                colNumber: columnIndex,
            };
        })
    ).flat();

    const [selectedSeats, setSelectedSeats] = useState([]);


    const handleSeatSelect = (row, col) => {
        const seatId = createSeatId(row, col);
        const isSelected = selectedSeats.some(seat => seat.id === seatId);
    
        let updatedSeats;
    
        if (isSelected) {
          updatedSeats = selectedSeats.filter(seat => seat.id !== seatId);
        } else {
          updatedSeats = [...selectedSeats, { rowNumber: row, colNumber: col }];
        }
    
        setSelectedSeats(updatedSeats);
    
        // 부모 컴포넌트에 선택된 좌석 정보 전달
        onSeatSelect(updatedSeats);
        console.log("selectedSeats:", selectedSeats);
      };

    return (
        <SeatBoxWrapper>
            {DUMMY_SEAT.map((seat) => (
                <SeatBoxButton
                    key={seat.id}
                    id={seat.id}
                    rowNumber={seat.rowNumber}
                    colNumber={seat.colNumber}
                    onSeatSelect={() => handleSeatSelect(seat.rowNumber, seat.colNumber)}
                />
            ))}
        </SeatBoxWrapper>
    )
};

const SeatBoxWrapper = styled.div`
    display : grid;
    grid-template-columns : repeat(12, 1fr);
    //grid-template-rows : repeat(12, 1fr);
`;

export default SeatCreateButton;