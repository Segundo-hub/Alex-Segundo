import { graphql, useStaticQuery } from "gatsby"

interface siteMeta {
    site: {
        meta: SeoMeta
    }
}

export const useSiteMeta = (): SeoMeta => {
    const { site } = useStaticQuery<siteMeta>(graphql`
        query {
            site {
                meta: siteMetadata {
                    title
                    description
                    siteUrl
                    author
                    lang
                    robots
                }
            }
        }
    `)

    return site.meta
}
