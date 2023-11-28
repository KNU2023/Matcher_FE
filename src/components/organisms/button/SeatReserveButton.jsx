import ReserveSeatBoxButton from "../../molecules/button/ReserveSeatBoxButton";
import styled from "styled-components";

const SeatReserveButton = ({ row, col, seat }) => {
    const rows = row;
    const columns = col;
    console.log("부커스", seat);

    const createSeatId = (row, column) => `p${row}_${column}`;

    const DUMMY_SEAT = Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: columns }, (_, columnIndex) => {
            const seatId = createSeatId(rowIndex + 1, columnIndex + 1);
            const reservationInfo = seat.find(info => info.rowNumber === rowIndex && info.colNumber === columnIndex);
            return {
                id: seatId,
                row: rowIndex + 1,
                column: columnIndex + 1,
                booker: reservationInfo ? reservationInfo.booker : null,
                hidden: !reservationInfo || reservationInfo.rowNumber === undefined || reservationInfo.colNumber === undefined,
            };
        })
    ).flat();

    console.log("더미", DUMMY_SEAT);

    return (
        <SeatBoxWrapper>
            {DUMMY_SEAT.map((seat) => (
                <BoxWrapper key={seat.id} style={{ visibility: seat.hidden ? 'hidden' : 'visible' }}>
                    <ReserveSeatBoxButton
                        id={seat.id}
                        row={seat.row}
                        column={seat.column}
                        booker={seat.booker}
                    />
                </BoxWrapper>
            ))}
        </SeatBoxWrapper>
    );
};

const SeatBoxWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    // grid-template-rows: repeat(12, 1fr);
`;

const BoxWrapper = styled.div`
   margin: 1px;
`;

export default SeatReserveButton;
