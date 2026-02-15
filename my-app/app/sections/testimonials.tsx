"use client"

import { motion } from "framer-motion"
import { TestimonialCard } from "../components/testimonial-card"

const testimonials = [
  {
    name: "Jordan P.",
    initials: "JP",
    quote: "Au début, je ne croyais pas que c'était réel, mais après mon premier paiement, j'ai été accro !",
    rating: 5,
    avatar: "/assets/avatar-jp.png",
  },
  {
    name: "Mia L.",
    initials: "ML",
    quote: "Plateforme légitime. Les paiements sont rapides et le processus est super simple.",
    rating: 5,
    avatar: "/assets/avatar-ml.png",
  },
  {
    name: "Chris D.",
    initials: "CD",
    quote: "Littéralement, je gagne de l'argent en naviguant sur TikTok. Je ne pourrais pas demander mieux !",
    rating: 5,
    avatar: "/assets/avatar-cd.png",
  },
  {
    name: "Emma R.",
    initials: "ER",
    quote: "J'adore le design et la simplicité. Les récompenses quotidiennes me motivent.",
    rating: 5,
    avatar: "/assets/avatar-er.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Ce Que Disent Nos Utilisateurs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              initials={testimonial.initials}
              quote={testimonial.quote}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}