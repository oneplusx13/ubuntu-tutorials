
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Terminal, Download, Settings, Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import CodeBlock from '@/components/code-block'

const quickStartSteps = [
  {
    icon: Download,
    title: 'Download Ubuntu',
    description: 'Get the latest Ubuntu ISO from the official website',
    code: 'wget https://releases.ubuntu.com/22.04/ubuntu-22.04.3-desktop-amd64.iso',
  },
  {
    icon: Settings,
    title: 'Create Bootable USB',
    description: 'Use dd command or GUI tools to create installation media',
    code: 'sudo dd if=ubuntu-22.04.3-desktop-amd64.iso of=/dev/sdX bs=4M status=progress',
  },
  {
    icon: Terminal,
    title: 'Install Ubuntu',
    description: 'Boot from USB and follow the installation wizard',
    code: '# Boot from USB and select "Install Ubuntu"\n# Follow the graphical installer',
  },
  {
    icon: Rocket,
    title: 'First Steps',
    description: 'Update your system and install essential packages',
    code: 'sudo apt update && sudo apt upgrade -y\nsudo apt install curl wget git vim',
  },
]

export default function QuickStart() {
  return (
    <section id="quick-start" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quick Start Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get up and running with Ubuntu in minutes. Follow these essential steps to set up your Ubuntu environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {quickStartSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      code={step.code}
                      language="bash"
                      title={`Step ${index + 1}`}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="ubuntu-gradient text-white hover:opacity-90">
            <Link href="/tutorials/desktop/beginner" className="flex items-center">
              View Detailed Tutorials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
