import SeatBoxButton from "../../molecules/button/SeatBoxButton";
import styled from "styled-components";

// const DUMMY_SEAT = [
//     {
//         id : "p1",
//         row : 1,
//         column : 1,
//         available : true
//     },
//     {
//         id : "p2",
//         row : 1,
//         column : 2,
//         available : true,
//     },
//     {
//         id : "p3",
//         row : 1,
//         column : 3,
//         available : true,
//     },
//     {
//         id : "p4",
//         row : 1,
//         column : 4,
//         available : true,
//     },
//     {
//         id: "p5",
//         row : 1,
//         column : 5,
//         available : true,
//     },
//     {
//         id: "p6",
//         row : 1,
//         column : 5,
//         available : true,
//     },
//     {
//         id: "p7",
//         row : 1,
//         column : 5,
//         available : true,
//     },
//     {
//         id: "p8",
//         row : 1,
//         column : 5,
//         available : true,
//     },
//     {
//         id: "p9",
//         row : 1,
//         column : 5,
//         available : true,
//     },
//     {
//         id: "p10",
//         row : 1,
//         column : 5,
//         available : true,
//     },
//     {
//         id: "p11",
//         row : 1,
//         column : 5,
//         available : true,
//     },
//     {
//         id: "p12",
//         row : 1,
//         column : 5,
//         available : true,
//     }
// ]

const SeatCreateButton = () => {

    const rows = 12;
    const columns = 12;

    const createSeatId = (row, column) => `p${row}_${column}`;

    const DUMMY_SEAT = Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: columns }, (_, columnIndex) => ({
            id: createSeatId(rowIndex + 1, columnIndex + 1),
            row: rowIndex + 1,
            column: columnIndex + 1,
            available: true,
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
                    available={seat.available}
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