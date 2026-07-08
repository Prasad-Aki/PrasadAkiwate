import { motion } from 'framer-motion'
import resumePdf from '../assets/Prasad_Akiwate_VIT.pdf'
import heroImage from '../assets/hero.png'
import { Download, ArrowRight, Mail, MapPin, GraduationCap, Briefcase, Target, Code2, Brain, Rocket, Sparkles } from 'lucide-react'

export default function About() {
  const technologies = ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase']

  const personalInfo = [
    { icon: GraduationCap, label: 'EDUCATION', value: 'B.Tech Information Technology, VIT Pune' },
    { icon: MapPin, label: 'LOCATION', value: 'Maharashtra, India, Pune' },
    { icon: Briefcase, label: 'STATUS', value: 'Open to Internship, Full-time Opportunities' },
    { icon: Target, label: 'GRADUATION', value: 'Batch of 2028, Third-Year Student' },
  ]

  const codingJourney = [
    { icon: Code2, value: '2+', label: 'Years of Coding', subtitle: 'Consistent Learner' },
    { icon: Rocket, value: '2', label: 'Projects Completed', subtitle: 'End-to-End' },
    { icon: Brain, value: '145+', label: 'DSA Problems Solved', subtitle: 'LeetCode & GFG' },
    { icon: Sparkles, value: '100%', label: 'Dedication & Consistency', subtitle: 'Always Learning' },
  ]

  const currentFocus = [
    'Full Stack Development (MERN Stack)',
    'DSA & Problem Solving',
    'System Design & Scalable Architecture',
    'Building AI-powered Applications',
  ]

  return (
    <section id="about" className="relative py-20 overflow-hidden" style={{ background: '#050B14' }}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.08),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.06),transparent_40%)]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <h2 className="text-4xl font-semibold mt-10 text-white sm:text-5xl">
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-[28px] glass p-8 shadow-[0_20px_80px_rgba(2,6,23,0.35)]"
            >
              <p className="text-lg leading-8 text-slate-300">
                I'm a passionate Full Stack Developer with a love for building modern web applications and AI-powered solutions. I enjoy transforming ideas into user-focused experiences using cutting-edge technologies like React, Node.js, and cloud platforms.
              </p>

              {/* Technologies */}
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Technologies I Work With
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  download="Prasad_Akiwate_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href="mailto:prasadakiwate2006@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
                >
                  <Mail size={18} />
                  Let's Connect
                </a>
              </div>
            </motion.div>

            {/* Personal Information Grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {personalInfo.map((item) => (
                <motion.div
                  key={item.label}
                  className="rounded-3xl glass p-6 shadow-[0_20px_80px_rgba(2,6,23,0.35)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400/10 to-blue-500/10 text-cyan-300">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-cyan-300">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Coding Journey */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="rounded-[28px] bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-slate-950 p-8 border border-white/10"
            >
              <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-cyan-300">
                My Coding Journey
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {codingJourney.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400/10 to-blue-500/10 text-cyan-300">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-white">{item.value}</p>
                      <p className="mt-1 text-sm font-medium text-slate-200">{item.label}</p>
                      <p className="mt-1 text-xs text-slate-400">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Prasad Akiwate"
              className=" w-163 h-169 rounded-3xl object-cover"
            />

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 rounded-[28px] glass p-8 shadow-[0_20px_80px_rgba(2,6,23,0.35)]"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-300">
                Current Focus
              </p>
              <ul className="space-y-3">
                {currentFocus.map((focus, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <span className="text-cyan-300">→</span>
                    {focus}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
