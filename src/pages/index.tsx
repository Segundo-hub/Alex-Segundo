import { ViewLayout } from '@layout/ViewLayout'
import { SEOComponent } from '@component/utils/SEOComponent'
import { Presentation } from '@component/molecules/Presentation/Presentation'
import { BannerBars } from '@component/molecules/BannerBars/BannerBars'
import { useEffect, useRef, useState } from 'react'
import { HeadFC, PageProps } from 'gatsby'
import gsap from 'gsap'

export default function HomeIndexPage(props: PageProps): JSX.Element {
    const root = useRef<HTMLElement>(null)
    const tl = useRef<gsap.core.Timeline>()

    useEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap
                .timeline()
                .from('.k-title-item', {
                    x: 24,
                    opacity: 0,
                    stagger: 0.1,
                    ease: 'back.easeInOut',
                })
                .from(
                    '.t-title-item',
                    {
                        x: -14,
                        opacity: 0,
                        stagger: 0.025,
                    },
                    '-=0.5'
                )
        }, root)

        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <ViewLayout ref={root} home={true}>
            <BannerBars />
            <section className='abs-center h-screen'>
                <Presentation title='ALEX SEGUNDO' subtitle='FRONT-END DEVELOPER | MUSIC PRODUCER' />
            </section>
        </ViewLayout>
    )
}

export const Head: HeadFC = () => <SEOComponent title='Alex Segundo' page='home' />
