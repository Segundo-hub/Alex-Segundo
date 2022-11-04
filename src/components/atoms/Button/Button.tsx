import { classes, ClassNames } from '@component/utils/functions'
import { Link } from 'gatsby'
import './button.scss'

type FactoryProps<T = HTMLElement> = {
    type?: 'link' | 'button' | 'external'
    to?: string
    buttonType?: 'submit' | 'button' | 'reset'
    children: React.ReactNode
    onClick?: () => void
} & React.HTMLAttributes<T>

function Factory<T = HTMLElement>({
    type = 'button',
    to,
    buttonType,
    children,
    className,
    id,
    onClick,
}: FactoryProps<T>) {
    const types: Record<'link' | 'button' | 'external', JSX.Element> = {
        link: (
            <Link
                to={to as string}
                className={classes('at-button abs-center flex-inline', className as ClassNames)}
                id={id}
            >
                {children}
            </Link>
        ),
        button: (
            <button
                type={buttonType}
                className={classes('at-button abs-center flex-inline', className as ClassNames)}
                id={id}
                onClick={onClick}
            >
                {children}
            </button>
        ),
        external: (
            <a
                href={to as string}
                className={classes('at-button abs-center flex-inline', className as ClassNames)}
                id={id}
                target='_blank'
                rel='noopener noreferrer'
            >
                {children}
            </a>
        ),
    }

    return types[type] ?? <></>
}

export const Button = (props: FactoryProps) => {
    return <Factory {...props}>{props.children}</Factory>
}
