import { ViewLayout } from '@layout/ViewLayout'
import { SEOComponent } from '@component/utils/SEOComponent'
import { AppContainer } from '@component/atoms/Container/Container'
import { SocialMedia } from '@component/molecules/SocialMedia/SocialMedia'
import { Biography } from '@component/molecules/Biography/Biography'
import { PageTitle } from '@component/molecules/PageTitle/PageTitle'
import { SimpleTitle } from '@component/molecules/SimpleTitle/SimpleTitle'
import { HeadFC, PageProps } from 'gatsby'
import { motion } from 'framer-motion'

export default function InformationIndexPage(props: PageProps): JSX.Element {
    return (
        <ViewLayout>
            <AppContainer tag='section'>
                <PageTitle title='INFORMATION' />
                <Biography />
            </AppContainer>
            <AppContainer tag='section'>
                <SimpleTitle title='CONTACT' />
                <motion.div style={{ padding: '4vh 0 15vh 0' }}>
                    <SocialMedia />
                </motion.div>
            </AppContainer>
        </ViewLayout>
    )
}

export const Head: HeadFC = () => (
    <SEOComponent
        title='Alex Segundo | Information'
        description='Front End Developer. Creation of animations and interactive experiences, high-end solutions, maintenance and security of websites.'
        page='info'
    />
)
