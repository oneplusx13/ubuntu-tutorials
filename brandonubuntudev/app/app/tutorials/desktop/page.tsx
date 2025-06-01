
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Monitor, Clock, User, Star, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

const desktopTutorials = [
  {
    id: 1,
    title: 'Complete Ubuntu 22.04 LTS Installation Guide',
    description: 'Step-by-step guide to installing Ubuntu 22.04 LTS with dual-boot configuration and essential post-installation setup.',
    level: 'Beginner',
    readTime: '15 min',
    author: 'Brandon',
    rating: 4.9,
    slug: 'ubuntu-22-04-installation-guide',
  },
  {
    id: 4,
    title: 'Ubuntu Desktop Customization with GNOME',
    description: 'Transform your Ubuntu desktop with themes, extensions, and productivity tweaks for an optimal workflow.',
    level: 'Intermediate',
    readTime: '20 min',
    author: 'Brandon',
    rating: 4.7,
    slug: 'ubuntu-desktop-gnome-customization',
  },
  {
    id: 5,
    title: 'Ubuntu Command Line Basics for Beginners',
    description: 'Essential terminal commands and navigation techniques every Ubuntu user should know.',
    level: 'Beginner',
    readTime: '12 min',
    author: 'Brandon',
    rating: 4.8,
    slug: 'ubuntu-command-line-basics',
  },
  {
    id: 7,
    title: 'Installing and Managing Software on Ubuntu Desktop',
    description: 'Learn different methods to install software: apt, snap, flatpak, and AppImage applications.',
    level: 'Beginner',
    readTime: '18 min',
    author: 'Brandon',
    rating: 4.6,
    slug: 'ubuntu-software-management',
  },
  {
    id: 8,
    title: 'Ubuntu Desktop Security Best Practices',
    description: 'Essential security configurations, firewall setup, and privacy settings for Ubuntu Desktop.',
    level: 'Intermediate',
    readTime: '25 min',
    author: 'Brandon',
    rating: 4.8,
    slug: 'ubuntu-desktop-security',
  },
  {
    id: 9,
    title: 'Advanced Ubuntu Desktop Troubleshooting',
    description: 'Diagnose and fix common Ubuntu Desktop issues, boot problems, and system recovery techniques.',
    level: 'Advanced',
    readTime: '40 min',
    author: 'Brandon',
    rating: 4.9,
    slug: 'ubuntu-desktop-troubleshooting',
  },
]

const levelStats = {
  beginner: desktopTutorials.filter(t => t.level === 'Beginner').length,
  intermediate: desktopTutorials.filter(t => t.level === 'Intermediate').length,
  advanced: desktopTutorials.filter(t => t.level === 'Advanced').length,
}

export default function DesktopTutorialsPage() {
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
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-green-600 rounded-full mr-4">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Ubuntu Desktop Tutorials
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master Ubuntu Desktop environment with comprehensive guides covering installation, 
            customization, applications, and advanced system management.
          </p>
        </motion.div>

        {/* Level Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-green-600">Beginner</CardTitle>
              <CardDescription>Perfect for Ubuntu newcomers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {levelStats.beginner}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Installation, basics, and essential applications
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/tutorials/desktop/beginner">
                  View Beginner Tutorials
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-yellow-600">Intermediate</CardTitle>
              <CardDescription>For users with basic experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {levelStats.intermediate}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Customization, productivity, and system tweaks
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/tutorials/desktop/intermediate">
                  View Intermediate Tutorials
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-red-600">Advanced</CardTitle>
              <CardDescription>For experienced Ubuntu users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600 mb-2">
                {levelStats.advanced}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                System administration and troubleshooting
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/tutorials/desktop/advanced">
                  View Advanced Tutorials
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* All Tutorials */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="mr-2 h-6 w-6" />
            All Desktop Tutorials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {desktopTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
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
      </div>
    </div>
  )
}
