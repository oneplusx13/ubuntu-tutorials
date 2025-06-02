
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Monitor, Server, BookOpen, Users, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    type: 'desktop',
    icon: Monitor,
    title: 'Ubuntu Desktop',
    description: 'Learn to master Ubuntu Desktop environment, applications, and daily workflows',
    levels: [
      {
        name: 'Beginner',
        count: 25,
        description: 'Basic installation, navigation, and essential applications',
        color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      },
      {
        name: 'Intermediate',
        count: 18,
        description: 'System customization, package management, and troubleshooting',
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      },
      {
        name: 'Advanced',
        count: 12,
        description: 'Kernel compilation, advanced scripting, and system optimization',
        color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      },
    ],
  },
  {
    type: 'server',
    icon: Server,
    title: 'Ubuntu Server',
    description: 'Master server administration, deployment, and enterprise-level configurations',
    levels: [
      {
        name: 'Beginner',
        count: 22,
        description: 'Server installation, basic commands, and user management',
        color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      },
      {
        name: 'Intermediate',
        count: 28,
        description: 'Web servers, databases, networking, and security basics',
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      },
      {
        name: 'Advanced',
        count: 15,
        description: 'Load balancing, clustering, automation, and enterprise deployment',
        color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      },
    ],
  },
]

export default function TutorialCategories() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tutorial Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your learning path based on your experience level and goals. Each category is carefully structured to build your skills progressively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <CardDescription className="text-base">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {category.levels.map((level, levelIndex) => (
                      <motion.div
                        key={level.name}
                        className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (levelIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <Badge className={level.color}>
                              {level.name}
                            </Badge>
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <BookOpen className="h-4 w-4" />
                              <span>{level.count} tutorials</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {level.description}
                        </p>
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm"
                          className="w-full"
                        >
                          <Link 
                            href={`/tutorials/${category.type}/${level.name.toLowerCase()}`}
                            className="flex items-center justify-center"
                          >
                            Explore {level.name}
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </motion.div>
                    ))}
                    
                    <div className="pt-4 border-t">
                      <Button 
                        asChild 
                        className="w-full ubuntu-gradient text-white hover:opacity-90"
                      >
                        <Link 
                          href={`/tutorials/${category.type}`}
                          className="flex items-center justify-center"
                        >
                          View All {category.title} Tutorials
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
