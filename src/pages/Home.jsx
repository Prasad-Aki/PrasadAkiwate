import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Brain, Cloud, Code2, Cpu, Database, Download, FolderPlus, GitBranch, Mail, MapPin, MonitorSmartphone, Rocket, Server, Sparkles, Wand2 } from 'lucide-react'
import AnimatedOrb from '../components/AnimatedOrb.jsx'
import StudioScene from '../components/StudioScene.jsx'
import resumePdf from '../assets/Prasad_Akiwate_VIT.pdf'

export default function Home() {
  const icons = [Cpu, Server, Database, Brain, Cloud, Rocket, Wand2, MonitorSmartphone, Code2]

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,229,255,0.1),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.08),_transparent_30%)]" />
      <AnimatedOrb className="left-[-4rem] top-[-6rem]" size="h-80 w-80" />
      <AnimatedOrb className="right-[-5rem] top-16" size="h-96 w-96" color="from-fuchsia-500/30 to-violet-600/10" />
      <div className="mx-auto flex max-w-7xl flex-col px-6 pb-24 pt-24 sm:px-10 sm:pt-24 lg:px-12">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: 'easeOut' }} className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" /> Hi, I'm Prasad Akiwate
            </div>
            <h1 className="text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Full Stack Software <span className="text-cyan-400">Engineer</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Building scalable full-stack applications, thoughtful user experiences, and reliable backend systems that solve real problems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">View My Work</a>
              <a href={resumePdf} target="_blank" rel="noreferrer" download="Prasad_Akiwate_Resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10">Download Resume <Download size={18} /></a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <a href="https://github.com/Prasad-Aki" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 transition hover:border-cyan-400/60 hover:text-white" target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a>
              <a href="mailto:prasadakiwate2006@gmail.com" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 transition hover:border-cyan-400/60 hover:text-white"><Mail size={16} /> Email</a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { icon: Code2, value: '2+', label: 'Years Learning' },
                { icon: FolderPlus, value: '2', label: 'Full Stack Projects' },
                { icon: Brain, value: '145+', label: 'DSA Problems' },
                { icon: Rocket, value: 'MERN', label: ' Stack' },
              ].map((item) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="rounded-[24px] glass p-5 shadow-[0_20px_80px_rgba(2,6,23,0.35)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 text-cyan-300">
                    <item.icon size={20} />
                  </div>
                  <p className="mt-4 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="relative">
            <StudioScene />
          </motion.div>
        </section>
      </div>
    </div>
  )
}
