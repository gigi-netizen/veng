"use client"

import { motion } from "framer-motion"
import { NotificationCard } from "../components/notification-card"

const notifications = [
  { name: "Grace A.", amount: 1376, initials: "GA", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { name: "Benjamin E.", amount: 1000, initials: "BE", color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
  { name: "Logan U.", amount: 1262, initials: "LU", color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
  { name: "Sophia L.", amount: 1633, initials: "SL", color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
  { name: "Jackson B.", amount: 1154, initials: "JB", color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
  { name: "Madison N.", amount: 1421, initials: "MN", color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
  { name: "Emma S.", amount: 1089, initials: "ES", color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
  { name: "Jayden Q.", amount: 1376, initials: "JQ", color: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
  { name: "Aiden G.", amount: 1523, initials: "AG", color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
  { name: "Charlotte F.", amount: 1187, initials: "CF", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { name: "Tyler J.", amount: 1456, initials: "TJ", color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
  { name: "Mia H.", amount: 1321, initials: "MH", color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
  { name: "Ethan W.", amount: 1602, initials: "EW", color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
  { name: "Chloe N.", amount: 1098, initials: "CN", color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
  { name: "Isabella C.", amount: 1478, initials: "IC", color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
  { name: "Ella X.", amount: 1000, initials: "EX", color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
]

// Duplicate for seamless loop
const allNotifications = [...notifications, ...notifications]

export function EarningsSidebar() {
  return (
    <motion.div
      className="fixed left-4 top-1/2 -translate-y-1/2 w-72 hidden lg:block z-40"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-4 overflow-hidden">
        <div className="h-[500px] overflow-hidden relative">
          <div className="scroll-animation space-y-3">
            {allNotifications.map((notification, index) => (
              <NotificationCard
                key={index}
                name={notification.name}
                amount={notification.amount}
                initials={notification.initials}
                color={notification.color}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}