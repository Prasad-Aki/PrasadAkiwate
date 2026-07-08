import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Environment, Sparkles } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function HolographicCore() {
    const group = useRef()
    const innerRef = useRef()
    const ringRefs = [useRef(), useRef(), useRef()]

    useFrame((state) => {
        if (!group.current) return
        // gentle bobbing and pointer-driven tilt
        const t = state.clock.getElapsedTime()
        group.current.rotation.y = 0.25 * Math.sin(t * 0.4)
        group.current.position.y = 0.12 * Math.sin(t * 0.9)

        // inner core subtle pulse
        if (innerRef.current) {
            innerRef.current.scale.setScalar(1 + 0.04 * Math.sin(t * 3))
            innerRef.current.material.emissiveIntensity = 0.9 + 0.5 * Math.abs(Math.sin(t * 2.4))
        }

        // rotate rings at different speeds
        ringRefs.forEach((r, i) => {
            if (r.current) r.current.rotation.z = t * (0.2 + i * 0.15) * (i % 2 === 0 ? 1 : -1)
        })
    })

    return (
        <group ref={group} position={[0, 1.1, 0]}>
            {/* inner glowing core */}
            <mesh ref={innerRef}>
                <sphereGeometry args={[0.5, 48, 48]} />
                <meshStandardMaterial color="#00fff0" emissive="#7c5cff" emissiveIntensity={1.2} metalness={0.2} roughness={0.1} />
            </mesh>

            {/* translucent glass shell */}
            <mesh>
                <sphereGeometry args={[0.78, 64, 64]} />
                <meshPhysicalMaterial transmission={0.9} thickness={0.6} roughness={0.06} metalness={0.1} clearcoat={0.6} clearcoatRoughness={0.1} color="#061025" opacity={0.9} transparent />
            </mesh>

            {/* rotating rings */}
            <mesh ref={ringRefs[0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.2, 0.02, 16, 200]} />
                <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={0.9} metalness={0.6} roughness={0.05} transparent opacity={0.9} />
            </mesh>
            <mesh ref={ringRefs[1]} rotation={[0, Math.PI / 3.5, 0]}>
                <torusGeometry args={[1.45, 0.02, 16, 200]} />
                <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.8} metalness={0.5} roughness={0.05} transparent opacity={0.85} />
            </mesh>
            <mesh ref={ringRefs[2]} rotation={[Math.PI / 4, 0, 0]}>
                <torusGeometry args={[1.73, 0.015, 12, 200]} />
                <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.7} metalness={0.45} roughness={0.05} transparent opacity={0.8} />
            </mesh>

            {/* small orbiting particles */}
            {[...Array(12)].map((_, i) => {
                const ang = (i / 12) * Math.PI * 2
                const x = Math.cos(ang) * (1.9 + (i % 3) * 0.06)
                const z = Math.sin(ang) * (1.9 + (i % 3) * 0.06)
                const y = (i % 2 === 0 ? 0.25 : -0.18)
                return (
                    <Float key={i} speed={0.6 + (i % 4) * 0.06} rotationIntensity={0.25} floatIntensity={0.2}>
                        <mesh position={[x, y, z]}>
                            <sphereGeometry args={[0.03, 8, 8]} />
                            <meshStandardMaterial color={i % 2 === 0 ? '#00E5FF' : '#a855f7'} emissive={i % 2 === 0 ? '#00E5FF' : '#a855f7'} emissiveIntensity={1} metalness={0.4} roughness={0.1} />
                        </mesh>
                    </Float>
                )
            })}

            <Sparkles count={60} scale={3.4} size={1.2} position={[0, 1.15, 0]} />
        </group>
    )
}

export default function StudioScene() {
    const env = useMemo(() => new THREE.Color('#060816'), [])

    return (
        // make container transparent so scene blends with page background
        <div className="relative h-[480px] w-full overflow-hidden sm:h-[560px]">
            <Canvas style={{ background: 'transparent' }} gl={{ alpha: true }} camera={{ position: [0, 1.2, 5.5], fov: 38 }}>
                <fog attach="fog" args={[env, 4, 12]} />
                <ambientLight intensity={0.7} color="#0b1220" />
                <directionalLight position={[4, 6, 4]} intensity={2.8} color="#22d3ee" />
                <pointLight position={[-3, 2, 1.5]} intensity={2.6} color="#22d3ee" />
                <pointLight position={[2.8, 1.1, 3]} intensity={2.2} color="#c084fc" />
                <Environment preset="night" />
                <HolographicCore />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            </Canvas>
        </div>
    )
}
