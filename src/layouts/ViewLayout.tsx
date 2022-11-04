import { Fragment, forwardRef, useEffect } from 'react'
import { useLocation } from '@reach/router'
import { AppHeader } from '@component/organisms/AppHeader/AppHeader'
import { AppContent } from '@component/organisms/AppContent/AppContent'
import { AppFooter } from '@component/organisms/AppFooter/AppFooter'

type LayoutProps = {
    children: JSX.Element | JSX.Element[]
    home?: boolean
}

export const ViewLayout = forwardRef<HTMLElement, LayoutProps>(({ children, home = false }, ref): JSX.Element => {
    const menuItems: Second.MenuItem[] = [
        {
            id: 1,
            label: 'INFO',
            path: '/info',
        },
        {
            id: 2,
            label: 'MUSIC PLAYER',
            path: '/music',
        },
        {
            id: 3,
            label: 'WORKS',
            path: '/works',
        },
    ]

    const { pathname } = useLocation()

    useEffect(() => {
        document.body.setAttribute('data-page', pathname === '/' ? 'home' : String(pathname).replace(/\//g, ''))
    }, [])

    return (
        <Fragment>
            <AppHeader items={menuItems} home={home} />
            <AppContent ref={ref} home={home}>
                {children}
            </AppContent>
            <AppFooter home={home} />
        </Fragment>
    )
})
