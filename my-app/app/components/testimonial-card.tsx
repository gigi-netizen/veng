"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  initials: string
  quote: string
  rating: number
  avatar: string
  delay?: number
}

export function TestimonialCard({ name, quote, rating, avatar, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + i * 0.05, duration: 0.2 }}
              >
                <Star
                  className={`w-4 h-4 ${
                    i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
    </motion.div>
  )
}