"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface StatCardProps {
  value: string
  label: string
  delay?: number
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const isNumeric = !isNaN(Number(value.replace(/[^0-9]/g, "")))
  const numericValue = Number(value.replace(/[^0-9]/g, ""))
  const prefix = value.startsWith("$") ? "$" : ""
  const suffix = value.includes("+") ? "+" : value.includes("hrs") ? "hrs" : ""

  useEffect(() => {
    if (!isNumeric) {
      setDisplayValue(value)
      return
    }

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), numericValue)
      setDisplayValue(`${prefix}${current.toLocaleString()}${suffix}`)

      if (step >= steps) {
        clearInterval(timer)
        setDisplayValue(value)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isNumeric, numericValue, prefix, suffix])

  return (
    <motion.div
      className="text-center p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {displayValue}
      </div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">{label}</div>
    </motion.div>
  )
}