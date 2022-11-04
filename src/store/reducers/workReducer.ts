import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

export interface Work {
    id: number
    slogan: string
    title: string
    content: string
    technologies: string[]
    poster?: string
    link?: string
    github: string
}

interface WorksState {
    works: Work[]
}

const worksSlice = createSlice<WorksState, SliceCaseReducers<WorksState>>({
    name: 'work-slice',
    initialState: {
        works: [
            {
                id: 1,
                slogan: 'Swilen - PHP framework',
                title: 'Swilen Framework',
                content:
                    'PHP Mini Framework inspired in Laravel and Expressjs; support routing, middleware, container dependency injection, database wrapper, token with Jwt standard, small data validation. Developed with Microkernel arquitecture.',
                technologies: ['PHP', 'MySQL', 'Pest', 'Composer'],
                poster: '',
                link: 'https://packagist.org/packages/swilen/framework',
                github: 'https://github.com/Segundo-hub/swilen-framework',
            },
            {
                id: 2,
                slogan: 'Seemly - Website',
                title: 'Seemly - Data Structures',
                content:
                    'Web page with a list of data structures, algorithms, and design patterns implemented in various programming languages. It is expected that later it may have animated graphics.',
                technologies: ['Next', 'React', 'Markdown', 'Redux Toolkit'],
                poster: '',
                link: 'https://seemly.vercel.app',
                github: 'https://github.com/Segundo-hub/Seemly',
            },
            {
                id: 3,
                slogan: 'Janque - Website',
                title: 'Centro Poblado Janque',
                content:
                    'The website of the town of Janque is made to show the culture of the Janque community and to be able to contribute to the identity of the people of this town.',
                technologies: ['Nuxt', 'Vue', 'Markdown', 'Vuex'],
                poster: '',
                link: 'https://janque-website.web.app',
                github: 'https://github.com/Centro-Poblado-Janque/Janque-Website',
            },
        ],
    },
    reducers: {},
})

export default worksSlice.reducer
