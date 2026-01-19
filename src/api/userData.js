import axios from "axios";
import { userDataAPI } from "../constants";

export const getUserData = async () => {
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

        return response.data;
    } catch (error) {
        console.error("Failed to fetch user data:", error);
        throw error;
    }
};
