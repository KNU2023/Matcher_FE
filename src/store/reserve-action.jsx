import { reserveAction } from "./reserveSlice";

export const axiosReserveData = () => {
    return async (dispatch) => {
        const axiosData = async () => {
            const response = await axios("http://localhost:8080/reservation");

            if(!response.ok){
                throw new Error("Could not axios Reserve Data!")
            }

            const data = await response.json();

            return data;
        };

        try {
            const reserveData = await axiosData();

            dispatch(
                reserveAction.replaceReserveData({
                    items: reserveData.items || [],
                })
            );
        } catch(error){
            //error
        }
    }
}