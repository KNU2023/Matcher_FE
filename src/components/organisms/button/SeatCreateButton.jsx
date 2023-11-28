import SeatBoxButton from "../../molecules/button/SeatBoxButton";
import styled from "styled-components";

const SeatCreateButton = () => {

    const rows = 12;
    const columns = 12;

    const createSeatId = (row, column) => `p${row}_${column}`;

    const DUMMY_SEAT = Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: columns }, (_, columnIndex) => ({
            id: createSeatId(rowIndex + 1, columnIndex + 1),
            row: rowIndex + 1,
            column: columnIndex + 1,
            booker: null,
        }))
    ).flat();

    return (
        <SeatBoxWrapper>
            {DUMMY_SEAT.map((seat) => (
                <SeatBoxButton
                    key={seat.id}
                    id={seat.id}
                    row={seat.row}
                    column={seat.column}
                    booker={seat.booker}
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