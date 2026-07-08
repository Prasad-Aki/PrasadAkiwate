import { useMemo } from 'react'

export default function AnimatedOrb({ className = '', size = 'h-64 w-64', color = 'from-cyan-500/40 to-blue-600/10' }) {
    const style = useMemo(
        () => ({
            background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.02) 35%, transparent 70%)`,
        }),
        [],
    )

    return (
        <div
            className={`pointer-events-none absolute rounded-full bg-gradient-to-br ${color} blur-3xl ${size} ${className}`}
            style={style}
        />
    )
}
