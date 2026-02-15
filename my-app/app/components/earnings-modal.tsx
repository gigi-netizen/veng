"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface EarningsModalProps {
  isOpen: boolean
  onClose: () => void
  earnings: number
}

export function EarningsModal({ isOpen, onClose, earnings }: EarningsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Vous auriez pu gagner aujourd&apos;hui:
          </DialogTitle>
          <DialogDescription asChild>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="py-6"
            >
              <span className="text-6xl font-bold text-green-500">
                ${earnings.toFixed(2)}
              </span>
            </motion.div>
          </DialogDescription>
        </DialogHeader>
        <p className="text-center text-sm text-gray-500 mb-6">
          Estimation basée sur le potentiel de votre activité de visionnage. Se réinitialise à minuit.
        </p>
        <Button
          size="lg"
          className="w-full text-lg"
          onClick={onClose}
        >
          Commencer Maintenant
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </DialogContent>
    </Dialog>
  )
}