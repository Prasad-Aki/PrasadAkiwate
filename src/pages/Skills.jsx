import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import { Code2, Cloud, Sparkles, Server, Database, BadgeCheck, GitBranch, Rocket, Cpu } from 'lucide-react'

const techCategories = ['All', 'Frontend', 'Backend', 'Database', 'Authentication', 'Tools & Deployment', 'Languages']

const technologyItems = [
  { category: 'Frontend', title: 'React', Icon: Code2 },
  { category: 'Frontend', title: 'HTML', Icon: Code2 },
  { category: 'Frontend', title: 'CSS', Icon: Cloud },
  { category: 'Frontend', title: 'Tailwind CSS', Icon: Sparkles },
  { category: 'Backend', title: 'Node.js', Icon: Server },
  { category: 'Backend', title: 'Express.js', Icon: Cloud },
  { category: 'Database', title: 'MongoDB', Icon: Database },
  { category: 'Authentication', title: 'Firebase Authentication', Icon: BadgeCheck },
  { category: 'Authentication', title: 'JWT', Icon: BadgeCheck },
  { category: 'Tools & Deployment', title: 'GitHub', Icon: GitBranch },
  { category: 'Tools & Deployment', title: 'Vercel', Icon: Rocket },
  { category: 'Tools & Deployment', title: 'Render', Icon: Cloud },
  { category: 'Languages', title: 'C++', Icon: Cpu },
  { category: 'Languages', title: 'Java', Icon: Cpu },
]

export default function Skills() {
  const [selectedTechCategory, setSelectedTechCategory] = useState('All')

  return (
    <div className="min-h-screen py-20 mt-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading eyebrow="Tech Stack" title="Technologies I Work With" description="These are the tools I use daily to build modern web applications." />
        <div className="mt-10 rounded-[28px] bg-gradient-to-br from-white/6 to-white/3 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
          <div className="flex flex-wrap gap-3">
            {techCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedTechCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${selectedTechCategory === category ? 'border-cyan-400 bg-cyan-400/10 text-white' : 'border-white/10 bg-transparent text-slate-300 hover:border-cyan-400/30 hover:text-white'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologyItems.filter((tech) => selectedTechCategory === 'All' || tech.category === selectedTechCategory).map((tech) => (
              <motion.div key={tech.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="flex items-center gap-4 rounded-2xl border border-white/6 bg-slate-900/40 p-4 hover:shadow-[0_12px_40px_rgba(0,229,255,0.06)] hover:scale-[1.02] transition">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-md">
                  <tech.Icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-400">{tech.category}</p>
                  <p className="text-lg font-semibold text-white">{tech.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
