"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-sm text-gray-500 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Le Programme de Gains TikTok est actuellement en accès anticipé. Places limitées disponibles pour les nouveaux utilisateurs.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline"
          >
            Politique de Confidentialité
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline"
          >
            Conditions
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline"
          >
            Support
          </a>
        </motion.div>
      </div>
    </footer>
  )
}