import { WorkCard } from '@component/molecules/WorkCard/WorkCard'
import { Work } from '@store/reducers/workReducer'
import './works-list.scss'

type WorskListProps = {
    works: Work[]
}

export const WorksList = ({ works }: WorskListProps) => (
    <ul className='o-works'>
        {works.map(work => (
            <li key={work.id} className='o-works__item'>
                <WorkCard
                    id={work.id as never}
                    slogan={work.slogan}
                    title={work.title}
                    content={work.content}
                    technologies={work.technologies}
                    github={work.github}
                    link={work.link}
                />
            </li>
        ))}
    </ul>
)
