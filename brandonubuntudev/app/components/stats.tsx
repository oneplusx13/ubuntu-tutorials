
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { BookOpen, Users, Download, Star } from 'lucide-react'

const stats = [
  {
    icon: BookOpen,
    value: 150,
    label: 'Tutorials',
    suffix: '+',
  },
  {
    icon: Users,
    value: 25000,
    label: 'Students',
    suffix: '+',
  },
  {
    icon: Download,
    value: 100000,
    label: 'Downloads',
    suffix: '+',
  },
  {
    icon: Star,
    value: 4.9,
    label: 'Rating',
    suffix: '/5',
  },
]

function CountUpAnimation({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      let startTime: number
      const startValue = 0
      const endValue = value

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = startValue + (endValue - startValue) * easeOutQuart
        
        setCount(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [inView, value, duration])

  return (
    <span ref={ref} className="count-animation">
      {value === 4.9 ? count.toFixed(1) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by the Ubuntu Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers and system administrators who have mastered Ubuntu with our comprehensive tutorials.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-green-600 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountUpAnimation value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
