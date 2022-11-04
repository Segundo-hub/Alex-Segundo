import { Link } from 'gatsby'
import { forwardRef } from 'react'
import './menu.scss'

type MenuProps = {
    items: Second.MenuItem[]
}

export const Menu = forwardRef<HTMLElement, MenuProps>(({ items }, ref) => (
    <nav className={`m-menu-wrapper`} ref={ref}>
        <ul className='m-menu abs-center'>
            {items.map(item => (
                <li key={item.id} className='m-menu-item'>
                    <Link to={item.path} className='m-menu__link' activeClassName='m-menu--active'>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
))

export const MenuRight = forwardRef<HTMLElement, MenuProps>(({ items }, ref) => (
    <nav className={`m-menu-wrapper m-menu-right`} ref={ref}>
        <ul className='m-menu abs-center'>
            {items.map(item => (
                <li key={item.id} className='m-menu-item'>
                    <Link to={item.path} className='m-menu__link' activeClassName='m-menu--active'>
                        {item.label}
                    </Link>
                </li>
            ))}
            <li className='m-menu-brand'>
                <Link to='/'>
                    <img src={require('@assets/images/simple-brand.png').default} alt='page-brand' />
                </Link>
            </li>
        </ul>
    </nav>
))
