import { usePartition } from 'hooks/usePartition'
import { Fragment, memo, MemoExoticComponent } from 'react'

type PartitionProp = {
    text: string
    prefix?: string
    children?: JSX.Element | JSX.Element[]
}

export const PartitionComponent = memo(({ text, prefix = 'k-title' }: PartitionProp) => (
    <Fragment>
        {usePartition(text).map((parts, count) => (
            <span key={count} className={`${prefix}-part`}>
                {parts.map((part, index) => (
                    <span key={index} className={`${prefix}-item`}>
                        {part}
                    </span>
                ))}
            </span>
        ))}
    </Fragment>
))
