
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Settings, Plus, Edit, Trash2, BookOpen, Users, BarChart3, Save } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface Tutorial {
  id: string
  title: string
  slug: string
  description: string
  content: string
  published: boolean
  featured: boolean
  category: string
  level: string
  type: string
  author: string
  createdAt: string
}

const mockTutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Complete Ubuntu 22.04 LTS Installation Guide',
    slug: 'ubuntu-22-04-installation-guide',
    description: 'Step-by-step guide to installing Ubuntu 22.04 LTS with dual-boot configuration.',
    content: 'Tutorial content will be written here...',
    published: true,
    featured: true,
    category: 'Desktop',
    level: 'Beginner',
    type: 'desktop',
    author: 'Brandon',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Setting Up NGINX with SSL on Ubuntu Server',
    slug: 'nginx-ssl-ubuntu-server',
    description: 'Learn how to install, configure, and secure NGINX web server.',
    content: 'Tutorial content will be written here...',
    published: true,
    featured: false,
    category: 'Server',
    level: 'Intermediate',
    type: 'server',
    author: 'Brandon',
    createdAt: '2024-01-10',
  },
]

export default function AdminPage() {
  const [tutorials, setTutorials] = useState<Tutorial[]>(mockTutorials)
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    published: false,
    featured: false,
    category: '',
    level: '',
    type: '',
  })
  const { toast } = useToast()

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      description: '',
      content: '',
      published: false,
      featured: false,
      category: '',
      level: '',
      type: '',
    })
    setSelectedTutorial(null)
    setIsEditing(false)
  }

  const handleEdit = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial)
    setFormData({
      title: tutorial.title,
      slug: tutorial.slug,
      description: tutorial.description,
      content: tutorial.content,
      published: tutorial.published,
      featured: tutorial.featured,
      category: tutorial.category,
      level: tutorial.level,
      type: tutorial.type,
    })
    setIsEditing(true)
  }

  const handleSave = () => {
    if (!formData.title || !formData.slug || !formData.description) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    if (selectedTutorial) {
      // Update existing tutorial
      setTutorials(prev => prev.map(t => 
        t.id === selectedTutorial.id 
          ? { ...t, ...formData }
          : t
      ))
      toast({
        title: "Tutorial Updated",
        description: "Tutorial has been successfully updated",
      })
    } else {
      // Create new tutorial
      const newTutorial: Tutorial = {
        id: Date.now().toString(),
        ...formData,
        author: 'Brandon',
        createdAt: new Date().toISOString().split('T')[0],
      }
      setTutorials(prev => [newTutorial, ...prev])
      toast({
        title: "Tutorial Created",
        description: "New tutorial has been successfully created",
      })
    }

    resetForm()
  }

  const handleDelete = (id: string) => {
    setTutorials(prev => prev.filter(t => t.id !== id))
    toast({
      title: "Tutorial Deleted",
      description: "Tutorial has been successfully deleted",
    })
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  useEffect(() => {
    if (formData.title && !selectedTutorial) {
      setFormData(prev => ({
        ...prev,
        slug: generateSlug(prev.title)
      }))
    }
  }, [formData.title, selectedTutorial])

  const stats = {
    total: tutorials.length,
    published: tutorials.filter(t => t.published).length,
    featured: tutorials.filter(t => t.featured).length,
    desktop: tutorials.filter(t => t.type === 'desktop').length,
    server: tutorials.filter(t => t.type === 'server').length,
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg mr-4">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Admin Dashboard
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Manage tutorials, categories, and website content
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total Tutorials</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.published}</div>
              <div className="text-sm text-muted-foreground">Published</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.featured}</div>
              <div className="text-sm text-muted-foreground">Featured</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.desktop}</div>
              <div className="text-sm text-muted-foreground">Desktop</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.server}</div>
              <div className="text-sm text-muted-foreground">Server</div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs defaultValue="tutorials" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tutorials" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="editor" className="flex items-center">
              <Edit className="mr-2 h-4 w-4" />
              Editor
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center">
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Tutorials Management */}
          <TabsContent value="tutorials">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Tutorial Management</CardTitle>
                      <CardDescription>
                        Manage all tutorials, their status, and content
                      </CardDescription>
                    </div>
                    <Button 
                      onClick={() => {
                        resetForm()
                        setIsEditing(true)
                      }}
                      className="flex items-center"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      New Tutorial
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tutorials.map((tutorial) => (
                      <div
                        key={tutorial.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold">{tutorial.title}</h3>
                            <div className="flex space-x-2">
                              <Badge variant="secondary">{tutorial.category}</Badge>
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
                              {tutorial.published && (
                                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                  Published
                                </Badge>
                              )}
                              {tutorial.featured && (
                                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                                  Featured
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{tutorial.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Created: {tutorial.createdAt} | Author: {tutorial.author}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(tutorial)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(tutorial.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Tutorial Editor */}
          <TabsContent value="editor">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    {selectedTutorial ? 'Edit Tutorial' : 'Create New Tutorial'}
                  </CardTitle>
                  <CardDescription>
                    {selectedTutorial 
                      ? 'Update the tutorial content and settings'
                      : 'Create a new tutorial with title, content, and metadata'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter tutorial title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="slug">Slug *</Label>
                      <Input
                        id="slug"
                        value={formData.slug}
                        onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                        placeholder="tutorial-slug"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Brief description of the tutorial"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">Type</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, type: value, category: value === 'desktop' ? 'Desktop' : 'Server' }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="desktop">Desktop</SelectItem>
                          <SelectItem value="server">Server</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="level">Level</Label>
                      <Select
                        value={formData.level}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, level: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="published"
                          checked={formData.published}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, published: checked }))}
                        />
                        <Label htmlFor="published">Published</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="featured"
                          checked={formData.featured}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked }))}
                        />
                        <Label htmlFor="featured">Featured</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Write your tutorial content here... (You can use Markdown)"
                      rows={15}
                      className="font-mono"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button onClick={handleSave} className="flex items-center">
                      <Save className="mr-2 h-4 w-4" />
                      {selectedTutorial ? 'Update Tutorial' : 'Create Tutorial'}
                    </Button>
                    <Button variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tutorial Statistics</CardTitle>
                    <CardDescription>Overview of tutorial content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Total Tutorials</span>
                        <span className="font-semibold">{stats.total}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Published</span>
                        <span className="font-semibold text-green-600">{stats.published}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Featured</span>
                        <span className="font-semibold text-yellow-600">{stats.featured}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Desktop Tutorials</span>
                        <span className="font-semibold text-blue-600">{stats.desktop}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Server Tutorials</span>
                        <span className="font-semibold text-purple-600">{stats.server}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common administrative tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => {
                          resetForm()
                          setIsEditing(true)
                        }}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Create New Tutorial
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="mr-2 h-4 w-4" />
                        Manage Users
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4" />
                        Site Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
