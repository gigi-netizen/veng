"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface TrustBadgeProps {
  icon: ReactNode
  text: string
  delay?: number
}

export function TrustBadge({ icon, text, delay = 0 }: TrustBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-2 text-sm text-gray-600"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </motion.div>
  )
}