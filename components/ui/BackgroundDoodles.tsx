'use client'

import { motion } from 'framer-motion'
import { Fish, Flame, Waves, Utensils, ChefHat, Soup, Croissant, Wheat } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackgroundDoodles() {
    const icons = [Fish, Flame, Waves, Utensils, ChefHat, Soup, Croissant, Wheat]

    // Pre-defined scattered positions to ensure even coverage without random clustering
    const fixedPositions = [
        { top: 8, left: 10 }, { top: 12, left: 45 }, { top: 5, left: 85 },
        { top: 25, left: 25 }, { top: 30, left: 65 }, { top: 20, left: 92 },
        { top: 45, left: 5 }, { top: 50, left: 40 }, { top: 42, left: 80 },
        { top: 65, left: 15 }, { top: 70, left: 55 }, { top: 60, left: 90 },
        { top: 85, left: 30 }, { top: 90, left: 75 }, { top: 82, left: 8 }
    ]

    const [doodles, setDoodles] = useState<any[]>([])
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        // Map over fixed positions instead of creating a random array
        const newDoodles = fixedPositions.map((pos, i) => {
            const Icon = icons[i % icons.length]
            const size = Math.floor(Math.random() * 20) + 20

            const duration = Math.random() * 4 + 6
            const delay = Math.random() * 5

            // Keep slightly randomized movement for "alive" feel
            const yMove = Math.random() * 60 - 30
            const rotateMove = Math.random() * 40 - 20

            return {
                Icon,
                size,
                top: pos.top,
                left: pos.left,
                duration,
                delay,
                yMove,
                rotateMove,
                id: i
            }
        })
        setDoodles(newDoodles)
    }, [])

    if (!isMounted) return null

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
            {doodles.map((doodle) => (
                <motion.div
                    key={doodle.id}
                    className="absolute text-white/20 stroke-[2]"
                    style={{
                        top: `${doodle.top}%`,
                        left: `${doodle.left}%`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        y: [0, doodle.yMove, 0],
                        rotate: [0, doodle.rotateMove, 0],
                        opacity: 1
                    }}
                    transition={{
                        y: {
                            duration: doodle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: doodle.delay
                        },
                        rotate: {
                            duration: doodle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: doodle.delay
                        },
                        opacity: {
                            duration: 1.5,
                            ease: "easeOut"
                        }
                    }}
                >
                    <doodle.Icon size={doodle.size} />
                </motion.div>
            ))}
        </div>
    )
}
