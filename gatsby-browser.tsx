import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { GatsbyBrowser } from 'gatsby'
import { Provider } from 'react-redux'
import { store } from './src/store'
import '@assets/scss/main.scss'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }): JSX.Element => {
    return <AnimatePresence mode='wait'>{element}</AnimatePresence>
}

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }): JSX.Element => {
    return <Provider store={store}>{element}</Provider>
}

export const shouldUpdateScroll: GatsbyBrowser['shouldUpdateScroll'] = ({
    routerProps: { location },
    getSavedScrollPosition,
}): boolean => {
    const TRANSITION_DELAY = 1000

    // @ts-ignore
    if (location.action === 'PUSH') {
        window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
        console.log('hola')
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), TRANSITION_DELAY)
    }

    return false
}
