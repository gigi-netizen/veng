"use client"

import { motion } from "framer-motion"

interface NotificationCardProps {
  name: string
  amount: number
  initials: string
  color: string
}

export function NotificationCard({ name, amount, initials, color }: NotificationCardProps) {
  return (
    <motion.div
      className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
        style={{ background: color }}
      >
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
        <p className="text-xs text-gray-500">
          vous avez gagné <span className="font-semibold text-green-600">${amount.toLocaleString()}</span> des revues cette semaine
        </p>
      </div>
    </motion.div>
  )
}