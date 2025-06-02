
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Monitor, Server, Search, Clock, User, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const allTutorials = [
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
    type: 'desktop',
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
    type: 'server',
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
    type: 'server',
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
    type: 'desktop',
  },
  {
    id: 5,
    title: 'Ubuntu Command Line Basics for Beginners',
    description: 'Essential terminal commands and navigation techniques every Ubuntu user should know.',
    category: 'Desktop',
    level: 'Beginner',
    readTime: '12 min',
    author: 'Brandon',
    rating: 4.8,
    slug: 'ubuntu-command-line-basics',
    type: 'desktop',
  },
  {
    id: 6,
    title: 'Setting Up a LAMP Stack on Ubuntu Server',
    description: 'Complete guide to installing and configuring Linux, Apache, MySQL, and PHP on Ubuntu Server.',
    category: 'Server',
    level: 'Intermediate',
    readTime: '30 min',
    author: 'Brandon',
    rating: 4.6,
    slug: 'lamp-stack-ubuntu-server',
    type: 'server',
  },
]

export default function TutorialsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const filteredTutorials = allTutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || tutorial.type === selectedCategory
    const matchesLevel = selectedLevel === 'all' || tutorial.level.toLowerCase() === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ubuntu Tutorials
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive guides for mastering Ubuntu Desktop and Server environments. 
            From basic installation to advanced system administration.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Category:</span>
              <div className="flex space-x-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('all')}
                >
                  All
                </Button>
                <Button
                  variant={selectedCategory === 'desktop' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('desktop')}
                  className="flex items-center space-x-1"
                >
                  <Monitor className="h-3 w-3" />
                  <span>Desktop</span>
                </Button>
                <Button
                  variant={selectedCategory === 'server' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('server')}
                  className="flex items-center space-x-1"
                >
                  <Server className="h-3 w-3" />
                  <span>Server</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Level:</span>
              <div className="flex space-x-2">
                <Button
                  variant={selectedLevel === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedLevel('all')}
                >
                  All
                </Button>
                <Button
                  variant={selectedLevel === 'beginner' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedLevel('beginner')}
                >
                  Beginner
                </Button>
                <Button
                  variant={selectedLevel === 'intermediate' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedLevel('intermediate')}
                >
                  Intermediate
                </Button>
                <Button
                  variant={selectedLevel === 'advanced' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedLevel('advanced')}
                >
                  Advanced
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground">
            Showing {filteredTutorials.length} tutorial{filteredTutorials.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </CardTitle>
                  
                  <CardDescription>
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

        {/* No results */}
        {filteredTutorials.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground mb-4">
              No tutorials found matching your criteria.
            </p>
            <Button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedLevel('all')
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
