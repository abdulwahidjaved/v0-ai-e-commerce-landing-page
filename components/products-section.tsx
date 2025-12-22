"use client"

import { motion } from "framer-motion"
import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Neural Headphones",
    price: 299,
    image: "/futuristic-wireless-headphones.jpg",
  },
  {
    id: 2,
    name: "Quantum Smartwatch",
    price: 499,
    image: "/advanced-smart-watch.jpg",
  },
  {
    id: 3,
    name: "AI Camera Drone",
    price: 899,
    image: "/modern-ai-drone.jpg",
  },
  {
    id: 4,
    name: "Holographic Display",
    price: 1299,
    image: "/holographic-display-device.jpg",
  },
  {
    id: 5,
    name: "Smart Home Hub",
    price: 199,
    image: "/smart-home-ai-hub.jpg",
  },
  {
    id: 6,
    name: "VR Gaming Set",
    price: 799,
    image: "/vr-headset-gaming.jpg",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our curated selection of AI-enhanced products designed for the future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
