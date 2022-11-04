import { ViewLayout } from '@layout/ViewLayout'
import { SEOComponent } from '@component/utils/SEOComponent'
import { graphql, HeadFC, PageProps, StaticQueryDocument } from 'gatsby'
import { PageTitle } from '@component/molecules/PageTitle/PageTitle'
import { AppContainer } from '@component/atoms/Container/Container'
import { useSelector } from 'react-redux'
import { WorkCard } from '@component/molecules/WorkCard/WorkCard'
import { WorksList } from '@component/organisms/WorksList/WorksList'

export default function WorksIndexPage(props: PageProps): JSX.Element {
    const works = useSelector((state: ReduxStore) => state.works.works)

    return (
        <ViewLayout>
            <AppContainer tag='section'>
                <PageTitle title='WORKS' />
            </AppContainer>
            <AppContainer tag='section'>
                <div
                    style={{
                        padding: '2vh 0 16vh 0',
                    }}
                >
                    <WorksList works={works} />
                </div>
            </AppContainer>
        </ViewLayout>
    )
}

export const Head: HeadFC = () => (
    <SEOComponent
        title='Alex Segundo | Works'
        description='Front End Developer. Creation of animations and interactive experiences, high-end solutions, maintenance and security of websites'
        page='works'
    />
)
