"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TikTokLogo } from "../components/tiktok-logo"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TrustBadge } from "../components/trust-badge"
import { EarningsModal } from "../components/earnings-modal"
import { Zap, Lock, Users } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function Hero() {
  const [username, setUsername] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [earnings] = useState(110.46)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      setIsModalOpen(true)
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* TikTok Logo */}
        <motion.div className="flex justify-center mb-8" variants={itemVariants}>
          <TikTokLogo className="w-20 h-20 sm:w-24 sm:h-24" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          variants={itemVariants}
        >
          Complétez les étapes pour commencer à gagner de l&apos;argent avec vos vidéos TikTok
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg text-gray-600 mb-8"
          variants={itemVariants}
        >
          Rejoignez la bêta des Gains TikTok et obtenez un paiement pour chaque vidéo courte que vous regardez.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto"
          variants={itemVariants}
        >
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Entrez votre nom d&apos;utilisateur TikTok @
            </label>
            <Input
              type="text"
              placeholder="@votreutilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full text-lg font-semibold"
          >
            Vérifier les Gains
          </Button>
        </motion.form>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8"
          variants={itemVariants}
        >
          <TrustBadge
            icon={<Zap className="w-5 h-5 text-yellow-500" />}
            text="Aucun téléchargement requis"
            delay={0.7}
          />
          <TrustBadge
            icon={<Lock className="w-5 h-5 text-green-500" />}
            text="Programme sécurisé et vérifié"
            delay={0.8}
          />
          <TrustBadge
            icon={<Users className="w-5 h-5 text-blue-500" />}
            text="Plus de 15 000 gagnants actifs"
            delay={0.9}
          />
        </motion.div>
      </motion.div>

      {/* Earnings Modal */}
      <EarningsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        earnings={earnings}
      />
    </section>
  )
}