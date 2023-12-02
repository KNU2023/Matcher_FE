import { createSeatAction } from "./createSeatSlice";

export const axiosCreateReservation = (items) => {
    return async (dispatch) => {
        const axiosData = async () => {
            const response = await axios(
                "url"
            );
                

            if(!response.ok){
                throw new Error("Could not axios Reserve Data!")
            }
            
            const data = await response.json();
            
            return data;
        };

        try {
            const data = await axiosData();
            dispatch(
                createSeatAction.createReservation({
                    items: seatData.items || [],
                })
            );
        } catch(error){
            dispatch(
            
            )
        }
    };
}