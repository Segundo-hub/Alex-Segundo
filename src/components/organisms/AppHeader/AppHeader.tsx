import { Menu, MenuRight } from '@component/molecules/Menu/Menu'
import { Variant, motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { Fragment } from 'react'
import { useVariants } from './animations.motion'
import './app-header.scss'

type AppHeaderProps = {
    items: Second.MenuItem[]
    home: boolean
}

export const AppHeader = ({ items, home }: AppHeaderProps): JSX.Element => {
    const isMobile = useMediaQuery('(max-width: 62em)')
    const variants = useVariants(isMobile)

    const variantsRight: Record<string, Variant> = {
        in: {
            y: 20,
            opacity: 0,
            rotate: -90,
        },
        out: {
            y: 20,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
        },
    }

    return (
        <Fragment>
            {home ? (
                <motion.header
                    className={`o-header abs-center`}
                    animate={'animate'}
                    initial='in'
                    exit='out'
                    variants={variants}
                    transition={{ duration: 0.5, type: 'tween', delay: 0.25 }}
                >
                    <Menu items={items} />
                </motion.header>
            ) : (
                <motion.header
                    className={`o-header--right abs-center`}
                    animate={'animate'}
                    initial='in'
                    exit='out'
                    variants={variantsRight}
                    transition={{ duration: 0.5, type: 'tween', delay: 0.25 }}
                >
                    <MenuRight items={items} />
                </motion.header>
            )}
        </Fragment>
    )
}
