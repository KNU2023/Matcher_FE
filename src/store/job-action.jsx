import axios from "axios";
import { jobAction } from "./jobPostSlice";

export const axiosJobData = (requestData) => {
    return async (dispatch) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.post("/api/jobpost", requestData, {
                headers: {
                    'Authorization': accessToken,
                },
            });

            if (response.status !== 200) {
                throw new Error("jobPost Data를 가져올 수 없습니다!");
            }

            const data = response;

            dispatch(
                jobAction.updateJobData({
                    items: {
                        title: data.title,
                        content: data.content,
                    },
                })
            );

            console.log(data.data);

            return data.data;
        } catch (error) {
            console.error("jobPost Data를 가져오는 중 오류 발생:", error.message);
            throw new Error(`jobPost Data를 가져오는 중 오류 발생: ${error.message}`);
        }
    };
};
