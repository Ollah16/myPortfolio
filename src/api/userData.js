import axios from "axios";
import { userDataAPI } from "../constants";

const isDataArrived = false

export const getUserData = async () => {

    if (isDataArrived) return;

    try {
        const response = await axios.post(
            userDataAPI,
            {
                hostName: window.location.hostname,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        isDataArrived = true
        return response.data;
    } catch (error) {
        console.error("Failed to fetch user data:", error);
        throw error;
    }
};
