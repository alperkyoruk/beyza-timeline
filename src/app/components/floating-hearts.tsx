"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface HeartProps {
  size: number
  duration: number
  x: number
  delay: number
  opacity: number
  rotation: number
}

// Component for a single heart with its own animation pattern
const Heart = ({ size, duration, x, delay, opacity, rotation }: HeartProps) => {
  return (
    <motion.div
      className="absolute text-pink-500"
      style={{
        fontSize: size,
        left: `${x}%`,
        opacity: opacity,
      }}
      initial={{ y: "110vh", rotate: 0 }}
      animate={{
        y: "-10vh",
        rotate: rotation,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      ❤️
    </motion.div>
  )
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartProps[]>([])

  // Generate random hearts on component mount
  useEffect(() => {
    const newHearts: HeartProps[] = []
    
    // Generate 20-30 hearts with random properties
    const heartCount = Math.floor(Math.random() * 11) + 20 // 20-30 hearts
    
    for (let i = 0; i < heartCount; i++) {
      newHearts.push({
        size: Math.random() * 50 + 15, // 15-65px size
        duration: Math.random() * 15 + 20, // 20-35s duration
        x: Math.random() * 100, // 0-100% horizontal position
        delay: Math.random() * 10, // 0-20s delay
        opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8 opacity
        rotation: Math.random() * 360 - 180, // -180 to 180 degrees rotation
      })
    }
    
    setHearts(newHearts)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart, index) => (
        <Heart key={index} {...heart} />
      ))}
    </div>
  )
}
