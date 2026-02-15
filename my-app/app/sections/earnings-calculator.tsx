"use client"

import { motion } from "framer-motion"
import { StatCard } from "../components/stat-card"

export function EarningsCalculator() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vos Gains Hebdomadaires Estimés
          </h2>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-7xl sm:text-8xl font-bold text-gray-900">$1000</span>
          <p className="text-gray-500 mt-2">Basé sur l&apos;activité de visionnage moyenne</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-200 pt-8">
          <StatCard value="50+" label="Vidéos/Jour" delay={0} />
          <StatCard value="$0.50" label="Par Vidéo" delay={0.1} />
          <StatCard value="24hrs" label="Délai de Paiement" delay={0.2} />
        </div>
      </div>
    </section>
  )
}