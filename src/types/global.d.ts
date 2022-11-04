import { RootState } from '../store'

declare global {
    /**
     * Redux store available globaly
     */
    declare interface ReduxStore extends RootState {}

    /**
     * Seo meta properties available globaly
     */
    declare interface SeoMeta {
        title?: string
        description?: string
        image?: string
        siteUrl?: string
        robots?: string
        schema?: string
        type?: string
    }

    /**
     * Global access to common types and intrefaces protected by project namespace
     */
    namespace Second {
        /**
         * Main menu item for the entire application context
         */
        declare interface MenuItem {
            id: number | string
            label: string
            path: string
        }
    }
}
