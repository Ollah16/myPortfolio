import axios from "axios"
import { eventTrackingAPI, pageTrackingAPI } from "../constants"

let isEnterClicked = false

export const handleEvent = (event) => {
    if (process.env.NODE_ENV !== "production") return

    if (isEnterClicked) return
    axios.post(eventTrackingAPI, {
        eventName: "Button_clicked",
        buttonLabel: event,
        hostName: window.location.hostname
    },
        {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => {
            isEnterClicked = true
            console.log("Event registered")
        }).catch((err) => { console.log(err) })
}

export const handlePage = (page) => {
    if (process.env.NODE_ENV !== "production") return


    axios.post(pageTrackingAPI, {
        eventName: "Page_loaded",
        pageName: page,
        hostName: window.location.hostname
    },
        {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => {
            console.log("Page registered")
        }).catch((err) => { console.log(err) })
}

