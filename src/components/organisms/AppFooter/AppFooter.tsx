import { AppContainer } from '@component/atoms/Container/Container'
import { motion, Variant } from 'framer-motion'
import './app-footer.scss'

type AppFooterProps = {
    home?: boolean
}

export const AppFooter = ({ home = false }: AppFooterProps) => {
    const variants: Record<string, Variant> = {
        in: {
            y: -20,
            opacity: 0,
        },
        out: {
            y: -20,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
        },
    }

    return (
        <>
            {home ? (
                <motion.footer
                    className='o-footer'
                    initial='in'
                    animate='animate'
                    exit='out'
                    variants={variants}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <AppContainer className='abs-center'>
                        <div className={'abs-center o-footer--content'}>
                            <img
                                src={require('@assets/images/simple-brand.png').default}
                                className='o-footer__brand'
                                alt='Alex Segundo brand'
                            />
                            <a
                                className='o-footer__caption'
                                href='https://github.com/Segundo-hub'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Designed & Built by Alex Segundo
                            </a>
                        </div>
                    </AppContainer>
                </motion.footer>
            ) : null}
        </>
    )
}
