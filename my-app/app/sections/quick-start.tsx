"use client"

import { motion } from "framer-motion"
import { StepCard } from "../components/step-card"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Créer Votre Compte",
    description: "Entrez votre adresse e-mail pour rejoindre la bêta des Gains TikTok.",
  },
  {
    number: 2,
    title: "Regarder et Gagner",
    description: "Regardez des clips courts TikTok quotidiennement — chaque visionnage complété ajoute à votre solde.",
  },
  {
    number: 3,
    title: "Retirer les Gains",
    description: "Obtenez des paiements instantanés via PayPal, CashApp ou virement direct.",
  },
]

export function QuickStart() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 inline-flex items-center gap-3">
            Guide de Démarrage Rapide
            <ArrowRight className="w-8 h-8" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}