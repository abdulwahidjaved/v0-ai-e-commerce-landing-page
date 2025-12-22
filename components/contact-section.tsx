"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-8 space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="glass border-primary/30 focus:border-primary focus:glow-blue transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="glass border-primary/30 focus:border-primary focus:glow-blue transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us what you're thinking..."
                rows={5}
                className="glass border-primary/30 focus:border-primary focus:glow-blue transition-all duration-300 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-blue group"
              size="lg"
            >
              Send Message
              <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
