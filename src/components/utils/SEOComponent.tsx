import { useSiteMeta } from "hooks/useSiteMeta"
import { Fragment } from "react"

type SeoProps = {
    children?: JSX.Element | JSX.Element[],
    page?: string
} & SeoMeta

export const SEOComponent = (props: SeoProps): JSX.Element => {
    const meta = Object.assign(useSiteMeta(), props);
    return (
        <Fragment>
            <title>{meta.title ?? 'Alex Segundo'}</title>
            <meta name='description' content={meta.description} />
            <meta name='robots' content={meta.robots} />
            <meta name='image' content={meta.image} />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={meta.title} />
            <meta name='twitter:description' content={meta.description} />
            <meta name='twitter:image' content={meta.image} />
            <meta name='twitter:url' content={meta.siteUrl} />
            <meta property='og:title' content={meta.title} />
            <meta property='og:description' content={meta.description} />
            <meta property='og:type' content={meta.type ?? 'website'} />
            <meta property='og:image' content={meta.image} />
            <meta property='og:url' content={meta.siteUrl} />
            {props.children}
        </Fragment>
    )
}
