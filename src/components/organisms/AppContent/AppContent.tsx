import { forwardRef, memo } from 'react'
import { motion, Variant } from 'framer-motion'
import './app-content.scss'

type AppMainContenProps = {
    children: JSX.Element | JSX.Element[]
    home: boolean
} & React.HTMLAttributes<HTMLElement>

const MomoizedComponent = forwardRef<HTMLElement, AppMainContenProps>(({ children, home }, ref) => {
    const animation: Record<string, Variant> = {
        in: {
            y: 20,
            opacity: 0,
            scale: 1.1,
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
        },
        out: {
            y: 30,
            opacity: 0,
            scale: 1.1,
        },
        normal: {
            y: 30,
            opacity: 0,
            scale: 1,
        },
    }

    return (
        <motion.main
            initial='in'
            animate='animate'
            exit={home ? 'out' : 'normal'}
            variants={animation}
            transition={{
                duration: 0.4,
                type: 'tween',
            }}
            ref={ref}
            className='o-main-content'
        >
            {children}
        </motion.main>
    )
})

export const AppContent = memo(MomoizedComponent, (prev, next) => {
    return prev.home === next.home
})
