import { Variant } from 'framer-motion'

export const useVariants = (isMobile: boolean) => {
    if (isMobile) {
        return {
            in: {
                y: '7vh',
                opacity: 0,
            },
            out: {
                y: '6vh',
                opacity: 0,
            },
            animate: {
                y: '8vh',
                opacity: 1,
            },
        } as Record<string, Variant>
    }

    return {
        in: {
            y: '19vh',
            opacity: 0,
        },
        out: {
            y: '18vh',
            opacity: 0,
        },
        animate: {
            y: '21vh',
            opacity: 1,
        },
    } as Record<string, Variant>
}
