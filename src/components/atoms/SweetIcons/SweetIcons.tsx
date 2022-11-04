import { classes, ClassNames } from '@component/utils/functions'
import { FunctionComponent } from 'react'

interface IconProps {
    width?: string | number
    height?: string | number
    fill?: string
    className?: ClassNames
}

export const GitHub: FunctionComponent<IconProps> = ({
    width = 32,
    height = 32,
    fill = 'currentColor',
    className,
}): JSX.Element => (
    <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={classes('sweet sweet-github', className as ClassNames)}
        width={width}
        height={height}
    >
        <title>GitHub</title>
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
    </svg>
)

export const ExternalLink: FunctionComponent<IconProps> = ({
    width = 32,
    height = 32,
    fill = 'currentColor',
    className,
}): JSX.Element => (
    <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={classes('sweet sweet-external-link', className as ClassNames)}
        width={width}
        height={height}
    >
        <title>External Link</title>
        <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
        <polyline points='15 3 21 3 21 9'></polyline>
        <line x1='10' y1='14' x2='21' y2='3'></line>
    </svg>
)

export const GitHubSocial: FunctionComponent<IconProps> = ({
    width = 60,
    height = 60,
    fill = 'currentColor',
    className,
}): JSX.Element => (
    <svg
        width={width}
        height={height}
        fill='none'
        viewBox='0 0 43 42'
        className={classes('sweet sweet-github-social', className as ClassNames)}
    >
        <path
            fill={fill}
            fillRule='evenodd'
            d='M21.546 3.5C11.905 3.5 4.09 11.314 4.09 20.954c0 7.711 5 14.254 11.937 16.564.873.158 1.188-.38 1.188-.842 0-.414-.014-1.513-.02-2.968-4.856 1.054-5.881-2.341-5.881-2.341-.791-2.016-1.937-2.553-1.937-2.553-1.584-1.084.12-1.059.12-1.059 1.754.123 2.673 1.799 2.673 1.799 1.557 2.667 4.088 1.897 5.078 1.45.16-1.128.614-1.898 1.111-2.334-3.874-.439-7.948-1.937-7.948-8.627 0-1.902.68-3.463 1.792-4.681-.177-.443-.78-2.22.173-4.62 0 0 1.465-.471 4.799 1.786a16.771 16.771 0 0 1 4.368-.588 16.76 16.76 0 0 1 4.368.588c3.335-2.259 4.798-1.787 4.798-1.787.954 2.402.355 4.178.174 4.62 1.12 1.218 1.791 2.778 1.791 4.682 0 6.707-4.077 8.181-7.965 8.613.62.54 1.18 1.603 1.18 3.23 0 2.335-.02 4.218-.02 4.79 0 .468.311 1.01 1.202.839C34.005 35.2 39 28.663 39 20.955 39 11.313 31.186 3.5 21.546 3.5Z'
            clipRule='evenodd'
        />
    </svg>
)

export const LinkedIn: FunctionComponent<IconProps> = ({
    width = 60,
    height = 60,
    fill = 'currentColor',
    className,
}): JSX.Element => (
    <svg
        width={width}
        height={height}
        fill='none'
        viewBox='0 0 43 42'
        className={classes('sweet sweet-linkedin', className as ClassNames)}
    >
        <path
            fill={fill}
            d='M35.4 5.25h-28A1.75 1.75 0 0 0 5.65 7v28c0 .966.782 1.75 1.75 1.75h28A1.75 1.75 0 0 0 37.15 35V7a1.75 1.75 0 0 0-1.75-1.75ZM14.993 32.09h-4.676V17.057h4.676V32.09Zm-2.338-17.086a2.709 2.709 0 1 1 0-5.417 2.709 2.709 0 0 1 0 5.418ZM32.492 32.09H27.82v-7.31c0-1.743-.032-3.985-2.43-3.985-2.432 0-2.801 1.9-2.801 3.862v7.435h-4.667V17.059h4.48v2.054h.065c.62-1.18 2.147-2.427 4.416-2.427 4.732 0 5.606 3.112 5.606 7.161v8.243h.002Z'
        />
    </svg>
)

export const Twitter: FunctionComponent<IconProps> = ({
    width = 60,
    height = 60,
    fill = 'currentColor',
    className,
}): JSX.Element => (
    <svg
        width={width}
        height={height}
        fill='none'
        viewBox='0 0 43 42'
        className={classes('sweet sweet-twitter', className as ClassNames)}
    >
        <path
            fill={fill}
            d='M34.658 13.995c.023.306.023.61.023.915 0 9.319-7.093 20.057-20.055 20.057A19.917 19.917 0 0 1 3.8 31.8c.567.065 1.113.088 1.703.088a14.12 14.12 0 0 0 8.752-3.012 7.063 7.063 0 0 1-6.593-4.888c.436.065.873.108 1.332.108.632 0 1.267-.087 1.857-.24a7.047 7.047 0 0 1-5.653-6.917v-.088c.94.524 2.03.851 3.185.895a7.039 7.039 0 0 1-3.143-5.87c0-1.309.348-2.51.96-3.556a20.05 20.05 0 0 0 14.535 7.377 8.01 8.01 0 0 1-.175-1.616 7.046 7.046 0 0 1 7.049-7.049c2.03 0 3.862.85 5.15 2.226a13.925 13.925 0 0 0 4.473-1.703 7.036 7.036 0 0 1-3.1 3.885 14.128 14.128 0 0 0 4.059-1.091 15.128 15.128 0 0 1-3.533 3.645Z'
        />
    </svg>
)

export const Instagram: FunctionComponent<IconProps> = ({
    width = 60,
    height = 60,
    fill = 'currentColor',
    className,
}): JSX.Element => (
    <svg
        width={width}
        height={height}
        fill='none'
        viewBox='0 0 43 42'
        className={classes('sweet sweet-instagram', className as ClassNames)}
    >
        <path
            fill={fill}
            d='M21.198 12.91a8.09 8.09 0 0 0-8.09 8.09 8.09 8.09 0 1 0 16.18 0 8.092 8.092 0 0 0-8.09-8.09Zm0 13.347a5.256 5.256 0 1 1-.003-10.51 5.256 5.256 0 0 1 .003 10.51Zm8.412-11.758a1.886 1.886 0 1 0 0-3.773 1.886 1.886 0 0 0 0 3.773Z'
        />
        <path
            fill={fill}
            d='M36.133 10.694a8.06 8.06 0 0 0-4.608-4.606 11.561 11.561 0 0 0-3.825-.735c-1.686-.073-2.22-.094-6.493-.094-4.274 0-4.821 0-6.493.094a11.47 11.47 0 0 0-3.822.735 8.05 8.05 0 0 0-4.607 4.606 11.524 11.524 0 0 0-.733 3.826c-.076 1.683-.098 2.217-.098 6.492 0 4.274 0 4.818.098 6.493.026 1.309.273 2.6.733 3.827a8.067 8.067 0 0 0 4.61 4.606 11.51 11.51 0 0 0 3.823.787c1.685.074 2.219.097 6.492.097 4.274 0 4.822 0 6.493-.097 1.307-.026 2.6-.274 3.826-.733a8.072 8.072 0 0 0 4.607-4.607c.46-1.226.707-2.517.733-3.826.076-1.684.099-2.217.099-6.492 0-4.276 0-4.818-.099-6.493a11.515 11.515 0 0 0-.736-3.88ZM34 27.375a8.827 8.827 0 0 1-.544 2.954 5.227 5.227 0 0 1-2.996 2.995 8.723 8.723 0 0 1-2.922.544c-1.663.077-2.132.096-6.395.096-4.266 0-4.702 0-6.396-.096a8.68 8.68 0 0 1-2.921-.544 5.223 5.223 0 0 1-3.008-2.995 8.892 8.892 0 0 1-.544-2.92c-.076-1.663-.093-2.132-.093-6.395 0-4.265 0-4.7.093-6.396a8.816 8.816 0 0 1 .544-2.953 5.226 5.226 0 0 1 3.008-2.995 8.766 8.766 0 0 1 2.92-.545c1.665-.075 2.132-.096 6.397-.096 4.265 0 4.702 0 6.395.096a8.68 8.68 0 0 1 2.922.545 5.235 5.235 0 0 1 2.996 2.995c.343.935.529 1.924.544 2.921.076 1.664.095 2.132.095 6.397 0 4.262 0 4.721-.075 6.394H34v-.002Z'
        />
    </svg>
)

export const Codepen: FunctionComponent<IconProps> = ({
    width = 60,
    height = 60,
    fill = 'currentColor',
    className,
}): JSX.Element => (
    <svg
        width={width}
        height={height}
        fill='none'
        viewBox='0 0 43 42'
        className={classes('sweet sweet-codepen', className as ClassNames)}
    >
        <path
            fill={fill}
            d='M38.316 14.779c0-.002-.001-.002 0 0-.003-.002-.003-.004-.005-.007-.002 0-.002-.002-.002-.002v-.002c-.11-.163-.253-.3-.41-.399L21.86 3.73c-.446-.306-1.127-.306-1.571 0L4.25 14.374a1.375 1.375 0 0 0-.65 1.195v10.78c-.005.268.07.541.23.785v.001a.115.115 0 0 0 .003.004c.005.01.012.017.017.026v.004h.002l.002.001.001.002c.11.154.245.28.396.376L20.29 38.192c.224.154.493.243.784.243.295 0 .565-.09.787-.243L37.9 27.548a1.39 1.39 0 0 0 .65-1.199V15.57a1.388 1.388 0 0 0-.233-.79Zm-15.85-7.301 12.169 8.072-5.57 3.696-6.6-4.438v-7.33h.002Zm-2.785 0v7.33l-6.6 4.438-5.566-3.694L19.68 7.478ZM6.389 18.149l4.192 2.783-4.192 2.819v-5.602Zm13.292 16.294L7.5 26.363l5.591-3.762 6.589 4.372v7.47Zm1.391-9.892-5.474-3.637 5.474-3.684 5.48 3.684-5.48 3.637Zm1.395 9.892v-7.472l6.59-4.372 5.588 3.763-12.178 8.081ZM35.76 23.751l-4.193-2.82 4.193-2.782v5.602Z'
        />
    </svg>
)

export const Mail: FunctionComponent<IconProps> = ({
    width = 60,
    height = 60,
    fill = 'currentColor',
    className,
}): JSX.Element => (
    <svg
        width={width}
        height={height}
        fill='none'
        viewBox='0 0 43 42'
        className={classes('sweet sweet-mail', className as ClassNames)}
    >
        <path
            fill={fill}
            d='M35 7H7c-1.93 0-3.5 1.57-3.5 3.5v21C3.5 33.43 5.07 35 7 35h28c1.93 0 3.5-1.57 3.5-3.5v-21C38.5 8.57 36.93 7 35 7Zm0 3.5v.894l-14 10.89L7 11.397V10.5h28Zm-28 21V15.827l12.925 10.054c.316.247.695.369 1.075.369s.76-.122 1.075-.37L35 15.828l.004 15.673H7Z'
        />
    </svg>
)

export type SocialIconResolverTypes = 'github' | 'linkedin' | 'twitter' | 'instagram' | 'codepen' | 'mail'

type SocialIconResolverProps = {
    icon: SocialIconResolverTypes
    className?: ClassNames
}

export const SocialIconResolver: FunctionComponent<SocialIconResolverProps> = ({ icon, className }): JSX.Element => {
    const icons: Record<typeof icon, JSX.Element> = {
        github: <GitHubSocial className={className} />,
        linkedin: <LinkedIn className={className} />,
        twitter: <Twitter className={className} />,
        instagram: <Instagram className={className} />,
        codepen: <Codepen className={className} />,
        mail: <Mail className={className} />,
    }

    return icons[icon] ?? <></>
}
