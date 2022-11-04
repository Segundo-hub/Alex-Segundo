import { Title } from '@component/atoms/Title/Title'
import { motion } from 'framer-motion'
import './simple-title.scss'

type SimpleTitleProps = {
    tag?: 'h2' | 'h3' | 'h4'
    title: string
}

export const SimpleTitle = ({ tag = 'h2', title }: SimpleTitleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className='m-simple-title'
        >
            <Title tag={tag} text={title} />
        </motion.div>
    )
}
