
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Server, Clock, User, Star, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

const serverTutorials = [
  {
    id: 2,
    title: 'Setting Up NGINX with SSL on Ubuntu Server',
    description: 'Learn how to install, configure, and secure NGINX web server with Let\'s Encrypt SSL certificates on Ubuntu Server.',
    level: 'Intermediate',
    readTime: '25 min',
    author: 'Brandon',
    rating: 4.8,
    slug: 'nginx-ssl-ubuntu-server',
  },
  {
    id: 3,
    title: 'Docker Container Management on Ubuntu',
    description: 'Master Docker installation, container creation, and orchestration on Ubuntu for modern application deployment.',
    level: 'Advanced',
    readTime: '35 min',
    author: 'Brandon',
    rating: 4.9,
    slug: 'docker-container-management-ubuntu',
  },
  {
    id: 6,
    title: 'Setting Up a LAMP Stack on Ubuntu Server',
    description: 'Complete guide to installing and configuring Linux, Apache, MySQL, and PHP on Ubuntu Server.',
    level: 'Intermediate',
    readTime: '30 min',
    author: 'Brandon',
    rating: 4.6,
    slug: 'lamp-stack-ubuntu-server',
  },
  {
    id: 10,
    title: 'Ubuntu Server Initial Setup and Security',
    description: 'Essential first steps after installing Ubuntu Server: user management, SSH, and basic security hardening.',
    level: 'Beginner',
    readTime: '20 min',
    author: 'Brandon',
    rating: 4.7,
    slug: 'ubuntu-server-initial-setup',
  },
  {
    id: 11,
    title: 'Database Administration with PostgreSQL',
    description: 'Install, configure, and manage PostgreSQL databases on Ubuntu Server with backup and optimization strategies.',
    level: 'Intermediate',
    readTime: '45 min',
    author: 'Brandon',
    rating: 4.8,
    slug: 'postgresql-ubuntu-server',
  },
  {
    id: 12,
    title: 'High Availability Load Balancing with HAProxy',
    description: 'Implement enterprise-grade load balancing and failover solutions using HAProxy on Ubuntu Server.',
    level: 'Advanced',
    readTime: '50 min',
    author: 'Brandon',
    rating: 4.9,
    slug: 'haproxy-load-balancing-ubuntu',
  },
]

const levelStats = {
  beginner: serverTutorials.filter(t => t.level === 'Beginner').length,
  intermediate: serverTutorials.filter(t => t.level === 'Intermediate').length,
  advanced: serverTutorials.filter(t => t.level === 'Advanced').length,
}

export default function ServerTutorialsPage() {
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
              <Server className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Ubuntu Server Tutorials
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master Ubuntu Server administration with comprehensive guides covering web servers, 
            databases, containerization, and enterprise-level deployments.
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
              <CardDescription>Server basics and initial setup</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {levelStats.beginner}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Installation, SSH, users, and basic security
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/tutorials/server/beginner">
                  View Beginner Tutorials
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-yellow-600">Intermediate</CardTitle>
              <CardDescription>Web servers and databases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {levelStats.intermediate}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                NGINX, Apache, MySQL, PostgreSQL, and SSL
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/tutorials/server/intermediate">
                  View Intermediate Tutorials
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-red-600">Advanced</CardTitle>
              <CardDescription>Enterprise deployment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600 mb-2">
                {levelStats.advanced}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Docker, load balancing, and high availability
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/tutorials/server/advanced">
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
            All Server Tutorials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serverTutorials.map((tutorial, index) => (
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
