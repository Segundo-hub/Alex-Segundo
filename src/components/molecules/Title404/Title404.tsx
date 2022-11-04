import './title.scss'
type TitleProps = {
    url: string
}

export const Title404 = ({ url }: TitleProps) => {
    return (
        <div className='err-caption'>
            <h1 className='err-caption__code'>404</h1>
            <h3 className='err-caption__label'>NO FOUND</h3>
            <p className='err-caption__text'>
                <span className='uri'>{url}</span> broken url or does not exist
            </p>
        </div>
    )
}
