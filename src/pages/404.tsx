import { useEffect, useState } from 'react'
import { HeadFC, navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import { SEOComponent } from '@component/utils/SEOComponent'
import { Button } from '@component/atoms/Button/Button'
import { Title404 } from '@component/molecules/Title404/Title404'

export default (): JSX.Element => {
    const [times, setTimes] = useState<number>(30)
    const { href } = useLocation()
    useEffect(() => {
        if (times <= 0) navigate('/')

        const interval = setInterval(() => {
            setTimes(times - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [times])

    return (
        <main className='h-screen w-screen abs-center'>
            <section className='main-center flex-col'>
                <Title404 url={href} />
                <Button onClick={() => navigate('/')} className='not-found'>
                    RETURN TO HOME IN {Number(times).toFixed(2)}
                </Button>
            </section>
        </main>
    )
}

export const Head: HeadFC = () => <SEOComponent title='Alex Segundo | 404 - Not Found' page='not-found' />
