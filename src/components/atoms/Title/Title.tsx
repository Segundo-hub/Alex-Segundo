import { PartitionComponent } from '@component/utils/PartitionComponent'
import './title.scss'

interface StringProp {
    text: string
    children?: JSX.Element | JSX.Element[]
    tag?: 'h1' | 'h2' | 'h3' | 'h4'
}

export const BigTitle = ({ text }: StringProp) => (
    <h1 className='k-title k-title--big'>
        <PartitionComponent text={text} prefix='k-title' />
    </h1>
)

export const Title = ({ text, tag = 'h1' }: StringProp) => {
    const Component: any = tag
    return (
        <Component className='a-title abs-center'>
            <span className='a-title__object'>&#91;</span>
            <span>{text}</span>
            <span className='a-title__object'>&#93;</span>
        </Component>
    )
}
