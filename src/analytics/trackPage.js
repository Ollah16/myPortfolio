import { useEffect, useRef } from 'react'
import { handlePage } from './analytics'

const TrackPage = ({ page }) => {
    const isPageTracked = useRef(false)

    useEffect(() => {
        if (isPageTracked.current) return
        handlePage(page)
        isPageTracked.current = true
    }, [page])
}

export default TrackPage