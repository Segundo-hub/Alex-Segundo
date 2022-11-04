import { useEffect, useState } from 'react'

const performMatches = (query: string): boolean => {
    return typeof window !== 'undefined' ? window.matchMedia(query).matches : false
}

/**
 * JavaScript media query support as identical css media querys
 *
 * @param query - Css media query as string, example: `(min-width: 62em)`
 */
export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(performMatches(query))

    const matchMediaHandler = () => {
        setMatches(performMatches(query))
    }

    useEffect(() => {
        const media = window.matchMedia(query)

        matchMediaHandler()

        if (typeof media.removeListener === 'function') {
            media.addListener(matchMediaHandler)
        } else {
            media.addEventListener('change', matchMediaHandler)
        }

        return () => {
            if (typeof media.removeListener === 'function') {
                media.removeListener(matchMediaHandler)
            } else {
                media.removeEventListener('change', matchMediaHandler)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return matches
}
