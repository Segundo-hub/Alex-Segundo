import { AnchorBlank } from '@component/atoms/Anchor/Anchor'
import { ExternalLink, GitHub } from '@component/atoms/SweetIcons/SweetIcons'
import { Work } from '@store/reducers/workReducer'
import './work-card.scss'

type WorkCardProps = Work & React.HTMLAttributes<HTMLElement>

export const WorkCard = (props: WorkCardProps): JSX.Element => {
    const { slogan, title, content, technologies, poster, github, link } = props
    const image = 'url(' + (poster ? poster : require('@assets/images/fallback/fallback-01.jpg').default) + ')'

    return (
        <article className='m-workcard' style={{ '--card-image': image } as React.CSSProperties}>
            <h2 className='m-workcard__title'>{slogan}</h2>
            <section className='m-workcard__content main-center'>
                <div className='mw-article'>
                    <h3 className='mw-article__title'>{title}</h3>
                    <p className='mw-article__content'>{content}</p>
                    <span className='mw-article__techs'>{technologies.join(', ').trimEnd()}</span>
                    <div className='mw-links cross-center'>
                        <AnchorBlank href={link} className='mw-links__external'>
                            <ExternalLink />
                        </AnchorBlank>
                        <AnchorBlank href={github} className='mw-links__github'>
                            <GitHub />
                        </AnchorBlank>
                    </div>
                </div>
            </section>
        </article>
    )
}
