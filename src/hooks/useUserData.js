const { useState, useEffect } = require("react");
const { getUserData } = require("../api/userData")

export const useUserData = () => {

    const [userData, setUserData] = useState({})

    const fetchUserData = async () => {
        try {
            const response = await getUserData();
            setUserData(response?.data)
        } catch (err) {
            console.log("Error occured", err.message)
        }
    }

    useEffect(() => {
        fetchUserData()
    })

    return userData
}