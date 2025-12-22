"use client"

import { motion } from "framer-motion"
import { Cpu, TrendingUp, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              About AI Commerce
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're revolutionizing the e-commerce industry by integrating cutting-edge artificial intelligence into
              every aspect of the shopping experience. Our platform learns from your preferences, anticipates your
              needs, and delivers personalized recommendations that truly matter.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From intelligent product discovery to automated inventory management, our AI-powered platform ensures a
              seamless, efficient, and delightful shopping experience for millions of customers worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Cpu, label: "AI-Powered", value: "100%" },
              { icon: TrendingUp, label: "Growth Rate", value: "250%" },
              { icon: Users, label: "Happy Customers", value: "1M+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
