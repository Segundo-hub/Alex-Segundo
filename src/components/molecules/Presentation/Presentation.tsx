import { PartitionComponent } from '@component/utils/PartitionComponent'
import { forwardRef, Ref } from 'react'
import './presentation.scss'

type PresentationProps = {
    title: string
    subtitle: string
}

export const Presentation = forwardRef(({ title, subtitle }: PresentationProps, ref: Ref<HTMLDivElement>) => (
    <div className='h-presentation' ref={ref}>
        <h1 className='k-title'>
            <PartitionComponent text={title} prefix='k-title' />
        </h1>
        <h2 className='t-title'>
            <PartitionComponent text={subtitle} prefix='t-title' />
        </h2>
    </div>
))
