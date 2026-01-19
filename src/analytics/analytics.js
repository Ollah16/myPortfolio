import axios from "axios"
import { eventTrackingAPI, pageTrackingAPI } from "../constants"

let isEnterClicked = false

export const handleEvent = (event) => {
    if (isEnterClicked) return
    axios.post(eventTrackingAPI, {
        eventName: "Button_clicked",
        buttonLabel: event
    },
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(() => {
            isEnterClicked = true
        }).catch((err) => { console.log(err) })
}

export const handlePage = (page) => {
    axios.post(pageTrackingAPI, {
        eventName: "Page_loaded",
        pageName: page
    },
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(() => {
        }).catch((err) => { console.log(err) })
}

