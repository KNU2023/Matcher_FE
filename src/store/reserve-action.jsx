import axios from "axios";
import { reserveAction } from "./reserveSlice";

export const axiosReserveData = (requestData) => {
    return async (dispatch) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.post("/api/reservationpost", requestData, {
                headers: {
                    'Authorization': accessToken,
                },
            });

            if (response.status !== 200) {
                throw new Error("예약 데이터를 가져올 수 없습니다!");
            }

            const data = response.data;

            dispatch(
                reserveAction.updateReserveData({
                    items: {
                        title: data.title,
                        content: data.content,
                        rowSize: data.rowSize,
                        colSize: data.colSize,
                        disableSeatList: data.disableSeatList || [],
                    },
                })
            );
        } catch (error) {
            console.error("예약 데이터를 가져오는 중 오류 발생:", error.message);
            throw new Error(`예약 데이터를 가져오는 중 오류 발생: ${error.message}`);
        }
    };
};
