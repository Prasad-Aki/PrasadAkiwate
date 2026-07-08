import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-4 z-[60] mx-auto mb-10 flex w-[calc(100%-2rem)] max-w-7xl flex-wrap items-center justify-between gap-4 rounded-full glass neon-border px-5 py-3 sm:w-[calc(100%-2.5rem)]">
      <Link to="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-bold text-slate-950">PA</div>
        <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Prasad Akiwate</p>
      </Link>
      <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`transition hover:text-white ${location.pathname === item.path ? 'text-cyan-400 font-semibold' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
