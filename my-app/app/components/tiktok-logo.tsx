"use client"

import { motion } from "framer-motion"

export function TikTokLogo({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="tiktokGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FE2C55">
              <animate
                attributeName="stop-color"
                values="#FE2C55;#25F4EE;#FE2C55"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#25F4EE">
              <animate
                attributeName="stop-color"
                values="#25F4EE;#FE2C55;#25F4EE"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#FE2C55">
              <animate
                attributeName="stop-color"
                values="#FE2C55;#25F4EE;#FE2C55"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <path
          d="M27.6 8.7c-2.2 0-4.2-1-5.5-2.6v11.8c0 5.6-4.5 10.1-10.1 10.1S2 23.5 2 17.9 6.5 7.8 12.1 7.8c.5 0 1 0 1.5.1v5.5c-.5-.1-.9-.1-1.4-.1-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7 4.7-2.1 4.7-4.7V.5h5.4c0 3.5 2.8 6.3 6.3 6.3v2z"
          fill="url(#tiktokGradient)"
        />
      </svg>
    </motion.div>
  )
}