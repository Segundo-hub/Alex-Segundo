import { classes } from '@component/utils/functions'
// import './anchor.scss'

interface CommonAnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
    children: JSX.Element | JSX.Element[]
    href?: string
}

export const AnchorBlank = ({ href, children, className = '' }: CommonAnchorProps) => (
    <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={classes('a-link--blank', className, {
            disable: !href,
        })}
    >
        {children}
    </a>
)
