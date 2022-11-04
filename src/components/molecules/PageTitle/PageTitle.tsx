import { Title } from '@component/atoms/Title/Title'
import { motion } from 'framer-motion'
import './page-title.scss'

type PageTitleProps = {
    title: string
}

export const PageTitle = ({ title }: PageTitleProps): JSX.Element => {
    return (
        <motion.div
            className='m-page-title'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            viewport={{ once: true }}
        >
            <span className='m-page-title__reflect'>{title}</span>
            <Title text={title} />
        </motion.div>
    )
}
