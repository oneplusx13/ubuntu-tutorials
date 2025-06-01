
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, User, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

const featuredTutorials = [
  {
    id: 1,
    title: 'Complete Ubuntu 22.04 LTS Installation Guide',
    description: 'Step-by-step guide to installing Ubuntu 22.04 LTS with dual-boot configuration and essential post-installation setup.',
    category: 'Desktop',
    level: 'Beginner',
    readTime: '15 min',
    author: 'Brandon',
    rating: 4.9,
    slug: 'ubuntu-22-04-installation-guide',
    featured: true,
  },
  {
    id: 2,
    title: 'Setting Up NGINX with SSL on Ubuntu Server',
    description: 'Learn how to install, configure, and secure NGINX web server with Let\'s Encrypt SSL certificates on Ubuntu Server.',
    category: 'Server',
    level: 'Intermediate',
    readTime: '25 min',
    author: 'Brandon',
    rating: 4.8,
    slug: 'nginx-ssl-ubuntu-server',
    featured: true,
  },
  {
    id: 3,
    title: 'Docker Container Management on Ubuntu',
    description: 'Master Docker installation, container creation, and orchestration on Ubuntu for modern application deployment.',
    category: 'Server',
    level: 'Advanced',
    readTime: '35 min',
    author: 'Brandon',
    rating: 4.9,
    slug: 'docker-container-management-ubuntu',
    featured: true,
  },
  {
    id: 4,
    title: 'Ubuntu Desktop Customization with GNOME',
    description: 'Transform your Ubuntu desktop with themes, extensions, and productivity tweaks for an optimal workflow.',
    category: 'Desktop',
    level: 'Intermediate',
    readTime: '20 min',
    author: 'Brandon',
    rating: 4.7,
    slug: 'ubuntu-desktop-gnome-customization',
    featured: true,
  },
]

export default function FeaturedTutorials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Tutorials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most popular and comprehensive tutorials, carefully selected to help you master Ubuntu quickly and effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">
                        {tutorial.category}
                      </Badge>
                      <Badge 
                        className={
                          tutorial.level === 'Beginner' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : tutorial.level === 'Intermediate'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        }
                      >
                        {tutorial.level}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base">
                    {tutorial.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{tutorial.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{tutorial.author}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    variant="outline"
                  >
                    <Link 
                      href={`/tutorials/${tutorial.slug}`}
                      className="flex items-center justify-center"
                    >
                      Read Tutorial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/tutorials" className="flex items-center">
              View All Tutorials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
