import { classnames } from '@component/utils/functions'
import React from 'react'
import './container.scss'

type AppContainerProps = {
    children: JSX.Element | JSX.Element[]
    tag?: keyof JSX.IntrinsicElements
} & React.HTMLAttributes<HTMLElement>

export const AppContainer = ({ children, tag = 'div', ...rest }: AppContainerProps): JSX.Element => {
    const withAttributes = (atributes: React.HTMLAttributes<HTMLElement>) => {
        const temp: Record<'classes', any> = { classes: '' }

        if (Object.prototype.hasOwnProperty.call(atributes, 'className')) {
            temp.classes = atributes.className
            delete atributes.className
        }

        return Object.assign(atributes, {
            className: classnames('a-container', temp.classes),
        })
    }

    return React.createElement(tag, withAttributes(rest), children)
}
