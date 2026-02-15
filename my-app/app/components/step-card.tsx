"use client"

import { motion } from "framer-motion"

interface StepCardProps {
  number: number
  title: string
  description: string
  delay?: number
}

export function StepCard({ number, title, description, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}