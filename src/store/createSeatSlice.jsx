import { createSlice } from "@reduxjs/toolkit";

const createSeatSlice = createSlice({
    name : "seat",
    initialState : {
        items : [],
    },
    reducers : {
        createReservation(state, action){
            state.items = action.payload.items;
        },
        reserveSeat(state, action){
            const newSeat = {
                id : new Date().toISOString(),
                row : action.payload.row,
                column : action.payload.column,
                available : false,
            }
            state.items.push(newSeat)
        }
    }
})


export const createSeatAction = createSeatSlice.actions;

export default createSeatSlice;