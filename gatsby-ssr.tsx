import { GatsbySSR } from 'gatsby'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'

type ReactHead = {
    type: 'meta' | 'script' | 'noscript' | 'link'
    props: Record<'name' | 'content', any>
} & React.ReactNode

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }): JSX.Element => (
    <Provider store={store}>{element}</Provider>
)

export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({ getHeadComponents, replaceHeadComponents }): void => {
    const headsReplacement = (getHeadComponents() as ReactHead[]).filter(({ type, props }) => {
        return !(type === 'meta' && props.name === 'generator')
    })

    replaceHeadComponents(headsReplacement)
}

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: 'en-US' })
}
