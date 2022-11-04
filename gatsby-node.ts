import { GatsbyNode } from 'gatsby'
import path from 'path'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions, getConfig }): void => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            alias: {
                '@component': path.resolve(__dirname, 'src/components'),
                '@store': path.resolve(__dirname, 'src/store'),
                '@layout': path.resolve(__dirname, 'src/layouts'),
                '@hook': path.resolve(__dirname, 'src/hooks'),
                '@assets': path.resolve(__dirname, 'src/assets'),
            },
        },
    })

    if (getConfig().mode === 'production') {
        actions.setWebpackConfig({
            devtool: false,
        })
    }
}
