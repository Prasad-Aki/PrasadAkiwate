import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
        >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                {eyebrow}
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
        </motion.div>
    )
}
