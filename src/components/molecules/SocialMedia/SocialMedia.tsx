import { AnchorBlank } from '@component/atoms/Anchor/Anchor'
import { SocialIconResolver, SocialIconResolverTypes } from '@component/atoms/SweetIcons/SweetIcons'
import { motion, Variant } from 'framer-motion'
import './social-media.scss'

interface SocialMediaButton {
    id: number
    icon: SocialIconResolverTypes
    label: string
    url: string
}

export const SocialMedia = () => {
    const store: SocialMediaButton[] = [
        {
            id: 1,
            icon: 'github',
            label: 'GitHub',
            url: 'https://github.com/Segundo-hub',
        },
        {
            id: 2,
            icon: 'linkedin',
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/alex-segundo/',
        },
        {
            id: 3,
            icon: 'twitter',
            label: 'Twitter',
            url: 'https://twitter.com/@asegundo442',
        },
        {
            id: 4,
            icon: 'instagram',
            label: 'Instagram',
            url: 'https://www.instagram.com/alexsegundoll/',
        },
        {
            id: 5,
            icon: 'codepen',
            label: 'Codepen',
            url: 'https://codepen.io/Alex-Segundo',
        },
        {
            id: 6,
            icon: 'mail',
            label: 'Mail',
            url: 'mailto:asegundo442@gmail.com',
        },
    ]

    const container: Record<string, Variant> = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                delay: 0.75,
                when: 'beforeChildren',
                staggerChildren: 0.14,
            },
        },
    }

    const variants: Record<string, Variant> = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
        },
    }

    return (
        <motion.ul
            className='main-center m-social-media'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {store.map(item => (
                <motion.li key={item.id} className='line-height-0 m-social-media__item' variants={variants}>
                    <AnchorBlank href={item.url} className='abs-center flex-inline m-social-link'>
                        <SocialIconResolver icon={item.icon} className='m-social-link__icon' />
                        <span className='m-social-link__label'>{item.label}</span>
                    </AnchorBlank>
                </motion.li>
            ))}
        </motion.ul>
    )
}
