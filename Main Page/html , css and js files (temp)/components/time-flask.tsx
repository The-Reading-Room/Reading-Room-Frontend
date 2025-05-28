"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface TimeFlaskProps {
  progress: number
}

export default function TimeFlask({ progress }: TimeFlaskProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw flask
    ctx.beginPath()
    ctx.moveTo(10, 5)
    ctx.lineTo(30, 5)
    ctx.lineTo(25, 15)
    ctx.lineTo(25, 35)
    ctx.arc(20, 35, 5, 0, Math.PI, false)
    ctx.lineTo(15, 15)
    ctx.lineTo(10, 5)
    ctx.closePath()
    ctx.strokeStyle = "#4F46E5"
    ctx.lineWidth = 2
    ctx.stroke()

    // Fill flask based on progress (ensure progress is between 0 and 1)
    const safeProgress = Math.max(0, Math.min(1, progress))
    const fillHeight = Math.max(0, Math.min(25, 25 * safeProgress))
    const startY = 35 - fillHeight

    if (fillHeight > 0) {
      ctx.beginPath()
      ctx.moveTo(15, startY)
      if (startY <= 15) {
        // Handle the neck of the flask
        const neckWidth = 15 + ((startY - 5) / 10) * 10
        ctx.lineTo(neckWidth, startY)
      } else {
        // Handle the body of the flask
        ctx.lineTo(25, startY)
      }
      ctx.lineTo(25, 35)
      ctx.arc(20, 35, 5, 0, Math.PI, false)
      ctx.lineTo(15, startY)
      ctx.closePath()

      // Create gradient fill
      const gradient = ctx.createLinearGradient(0, startY, 0, 40)
      gradient.addColorStop(0, "rgba(79, 70, 229, 0.3)")
      gradient.addColorStop(1, "rgba(79, 70, 229, 0.7)")
      ctx.fillStyle = gradient
      ctx.fill()
    }
  }, [progress])

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <canvas ref={canvasRef} width={40} height={40} className="opacity-70" />
      <div className="absolute bottom-0 left-0 w-full text-center text-[10px] text-indigo-600 font-medium">
        {Math.round((progress || 0) * 100)}%
      </div>
    </motion.div>
  )
}
