import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Alex Segundo`,
        siteUrl: `https://alexsegundo.com`,
        description: `I make software with my soul, for the same reason as you. I compose melodies to enjoy the development. A Front End Developer and EDM Producer around here`,
        author: `alex-segundo`,
        lang: `en-US`,
        robots: `index, follow`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                additionalData: `@import '@assets/scss/__settings.scss';`,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `Alex Segundo Website`,
                short_name: `Alex Segundo`,
                description: `A Front End Developer and EDM Producer around here`,
                lang: `en`,
                display: `standalone`,
                icon: `src/assets/images/icon.png`,
                start_url: `/`,
                background_color: `#070808`,
                theme_color: `#22aad3`,
            },
        },
        'gatsby-plugin-sharp',
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `locale`,
                path: `${__dirname}/src/locales`,
            },
        },
        // {
        //     resolve: `gatsby-plugin-react-i18next`,
        //     options: {
        //         localeJsonSourceName: `locale`,
        //         languages: [`en`, `es`],
        //         defaultLanguage: `en`,
        //         trailingSlash: 'always',
        //         fallbackLanguage: `en`,
        //         i18nextOptions: {
        //             interpolation: {
        //                 escapeValue: false,
        //             },
        //             keySeparator: false,
        //             nsSeparator: false,
        //         },
        //         pages: [
        //             {
        //                 matchPath: '/',
        //                 languages: ['en']
        //             }
        //         ]
        //     },
        // },
    ],
}

export default config
