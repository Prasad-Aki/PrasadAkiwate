import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import { ArrowRight, Mail, Download, Sparkles, MapPin } from 'lucide-react'
import resumePdf from '../assets/Prasad_Akiwate_VIT.pdf'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitStatus) setSubmitStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const { name, email, message } = formData
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus('Please fill in your name, email, and project brief.')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name.trim()}`)
    const body = encodeURIComponent(`Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`)

    window.location.href = `mailto:prasadakiwate2006@gmail.com?subject=${subject}&body=${body}`
    setSubmitStatus('Opening your email app...')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen mt-10 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(0,229,255,0.14),rgba(59,130,246,0.09),rgba(0,0,0,0.8))] p-8 shadow-[0_25px_100px_rgba(0,229,255,0.16)] backdrop-blur-2xl sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading eyebrow="Contact" title="Let's build something exceptional together." description="I'm currently open to internships, freelance work, and full-time opportunities where I can contribute to impactful products and grow as an engineer." />
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <a href="mailto:prasadakiwate2006@gmail.com" className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/50 hover:text-white"><Mail size={18} /> prasadakiwate2006@gmail.com</a>
                <a href={resumePdf} target="_blank" rel="noreferrer" download="Prasad_Akiwate_Resume.pdf" className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/50 hover:text-white"><Download size={18} /> Download Resume</a>
                <a href="https://www.linkedin.com/in/prasad-akiwate-621113375/" className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/50 hover:text-white" target="_blank" rel="noreferrer"><Sparkles size={18} /> linkedin.com/in/prasad-akiwate</a>
                <a href="https://github.com/Prasad-Aki" className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/50 hover:text-white" target="_blank" rel="noreferrer"><Sparkles size={18} /> github.com/Prasad-Aki</a>
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3"><MapPin size={18} /> Pune, India</div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" value={formData.name} onChange={handleChange} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-slate-500" placeholder="Name" />
                <input name="email" type="email" value={formData.email} onChange={handleChange} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-slate-500" placeholder="Email" />
              </div>
              <textarea name="message" value={formData.message} onChange={handleChange} className="mt-4 min-h-36 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-slate-500" placeholder="Project brief" />
              <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
                Send Inquiry <ArrowRight size={16} />
              </button>
              {submitStatus && <p className="mt-3 text-sm text-cyan-300">{submitStatus}</p>}
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
