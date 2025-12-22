"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:glow-blue">
        {/* Product Image */}
        <div className="relative h-64 bg-muted/30 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
          <Button className="w-full bg-primary/10 hover:bg-primary text-foreground hover:text-primary-foreground border border-primary/30 group">
            View Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
