import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import { BadgeCheck } from 'lucide-react'
import linkedinImage from '../assets/linkedin.png'
import genwebImage from '../assets/genweb.png'

const projects = [
  {
    title: 'LinkedIn Clone',
    description: 'MERN Stack Social Media Platform',
    features: ['Authentication', 'Real-time Notifications', 'Real-time Messaging', 'Posts & Comments', 'Likes & Connections', 'Profile Management', 'Image Upload', 'Socket.IO'],
    stack: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Authentication', 'JWT'],
    links: { demo: 'https://linkedin-clone-frontend-eight.vercel.app/', github: 'https://github.com/Prasad-Aki/Linkedin_Clone_MERN' },
    image: linkedinImage,
    accent: 'from-cyan-500/20 via-blue-500/10 to-purple-500/20',
  },
  {
    title: 'GenWeb.ai',
    description: 'AI Website Builder - Generate websites using AI',
    features: ['OpenRouter AI Integration', 'Monaco Editor', 'Firebase Authentication', 'JWT Tokens', 'Razorpay Payments', 'MongoDB Database', 'Live Hosting', 'Credit System'],
    stack: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Authentication', 'JWT', 'Vercel', 'Render'],
    links: { demo: 'https://aiwebsitebuilder-client.vercel.app/', github: 'https://github.com/Prasad-Aki/AI_WEBSITE_BUILDER' },
    image: genwebImage,
    accent: 'from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen mt-10 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading eyebrow="Featured Projects" title="Premium product work with measurable impact." description="Each project marries thoughtful UX, robust architecture, and high-quality implementation." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }} className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${project.accent} p-[1px] shadow-[0_20px_80px_rgba(2,6,23,0.45)]`}>
              <div className="rounded-[27px] bg-slate-950/90 p-8 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <BadgeCheck className="text-cyan-300" />
                </div>
                <p className="mt-2 text-sm text-slate-400">{project.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-cyan-300">Features</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.features?.map((feat) => (
                    <span key={feat} className="text-xs text-slate-300">✔ {feat}</span>
                  ))}
                </div>
                <img src={project.image} alt={project.title} className="mt-6 h-48 w-full rounded-[24px] border border-white/10 object-cover shadow-[0_25px_90px_rgba(0,0,0,0.25)]" />
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{tech}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={project.links.demo} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]" target="_blank" rel="noreferrer">Live Demo</a>
                  <a href={project.links.github} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-100" target="_blank" rel="noreferrer">GitHub</a>
                  <button onClick={() => setSelectedProject(project)} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">Details</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedProject(null)} />
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: 20 }} transition={{ duration: 0.22 }} className="relative z-10 max-w-4xl w-full rounded-2xl border border-white/10 bg-slate-950/95 p-6 shadow-lg">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-white">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-sm text-slate-300">Close</button>
              </div>
              <p className="mt-3 text-sm text-slate-300">{selectedProject.description}</p>
              <img src={selectedProject.image} alt={selectedProject.title} className="mt-4 w-full rounded-lg object-cover" />
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{s}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a href={selectedProject.links.demo} target="_blank" rel="noreferrer" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">Live Demo</a>
                <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">GitHub</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
