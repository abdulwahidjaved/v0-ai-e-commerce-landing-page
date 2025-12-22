"use client"

import { motion } from "framer-motion"
import { Brain, Search, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Based Recommendations",
    description: "Personalized product suggestions powered by advanced machine learning algorithms",
  },
  {
    icon: Search,
    title: "Smart Search & Filters",
    description: "Find exactly what you need with intelligent search and intuitive filtering options",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Enterprise-grade security for all transactions with end-to-end encryption",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Lightning-fast shipping with real-time tracking and AI-optimized logistics",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Powered by Intelligence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the next generation of shopping with AI-driven features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:glow-blue transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
