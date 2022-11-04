import { motion, Variant } from 'framer-motion'
import './biography.scss'

export const Biography = () => {
    const container: Record<string, Variant> = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                delay: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.14,
            },
        },
    }

    const item: Record<string, Variant> = {
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
        <motion.article
            className='m-bio-article'
            variants={container}
            initial='hidden'
            animate='show'
            transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.8 }}
        >
            <motion.p variants={item}>
                I am a Front End developer focused on productivity and code quality. My motto: “You will never get it
                right the first time, keep trying. And when you get it, optimize it”.
            </motion.p>
            <motion.p variants={item}>
                Organized person, problem solver, lover of electronic music, technology and, above all, programming.
            </motion.p>
            <motion.p variants={item}>
                Interested in the full spectrum of web development and low-level programming. Challenging myself every
                day with ambitious projects.
            </motion.p>
            <motion.p variants={item}>
                Work with the following technologies:{' '}
                <span className='m-bio-tech'>
                    JavaScript, TypeScript, Nodejs, PHP, MySQL, MongoDB, SCSS/CSS, HTML, Laravel, Vue, WordPress, Nuxt,
                    Nextjs, React, Svelte, Gatsby, Expressjs, Mongoose.
                </span>
            </motion.p>
        </motion.article>
    )
}
