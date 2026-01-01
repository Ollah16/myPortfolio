import axios from "axios"

let isEnterClicked = false

export const trackEnter = (event) => {
    if (isEnterClicked) return
    axios.post(`https://book-store-back-end-three.vercel.app/metrics/clicks`, {},
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(() => {
            isEnterClicked = true
        }).catch((err) => { console.log(err) })
}

export const trackPage = (page) => {
    console.log(`${page} Loaded`)
}

export const trackClicks = (event) => {
    console.log(event)
}
