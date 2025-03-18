"use client"

import { useEffect, useState } from "react"
import ReactConfetti from "react-confetti"

export default function WelcomeConfetti() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Hide confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [])

  if (!showConfetti) return null

  return (
    <ReactConfetti
      width={dimensions.width}
      height={dimensions.height}
      recycle={false}
      numberOfPieces={200}
      gravity={0.2}
    />
  )
}