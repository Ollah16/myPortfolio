import { useEffect } from 'react'
import { trackPage } from './analytics'

const TrackPage = ({ page }) => {
    useEffect(() => {
        trackPage(page)
    }, [])
}

export default TrackPage