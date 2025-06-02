
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create a default user
  const user = await prisma.user.upsert({
    where: { email: 'brandon@brandonubuntudev.com' },
    update: {},
    create: {
      email: 'brandon@brandonubuntudev.com',
      name: 'Brandon',
    },
  })

  console.log('✅ Created user:', user.name)

  // Create categories
  const categories = [
    { name: 'Desktop Beginner', slug: 'desktop-beginner', type: 'desktop', level: 'beginner' },
    { name: 'Desktop Intermediate', slug: 'desktop-intermediate', type: 'desktop', level: 'intermediate' },
    { name: 'Desktop Advanced', slug: 'desktop-advanced', type: 'desktop', level: 'advanced' },
    { name: 'Server Beginner', slug: 'server-beginner', type: 'server', level: 'beginner' },
    { name: 'Server Intermediate', slug: 'server-intermediate', type: 'server', level: 'intermediate' },
    { name: 'Server Advanced', slug: 'server-advanced', type: 'server', level: 'advanced' },
  ]

  const createdCategories = []
  for (const categoryData of categories) {
    const category = await prisma.category.upsert({
      where: { slug: categoryData.slug },
      update: {},
      create: categoryData,
    })
    createdCategories.push(category)
    console.log('✅ Created category:', category.name)
  }

  // Create sample tutorials
  const tutorials = [
    {
      title: 'Complete Ubuntu 22.04 LTS Installation Guide',
      slug: 'ubuntu-22-04-installation-guide',
      description: 'Step-by-step guide to installing Ubuntu 22.04 LTS with dual-boot configuration and essential post-installation setup.',
      content: 'This is a comprehensive tutorial on installing Ubuntu 22.04 LTS...',
      published: true,
      featured: true,
      categoryId: createdCategories.find(c => c.slug === 'desktop-beginner')?.id!,
      authorId: user.id,
    },
    {
      title: 'Setting Up NGINX with SSL on Ubuntu Server',
      slug: 'nginx-ssl-ubuntu-server',
      description: 'Learn how to install, configure, and secure NGINX web server with Let\'s Encrypt SSL certificates on Ubuntu Server.',
      content: 'This tutorial covers NGINX installation and SSL configuration...',
      published: true,
      featured: true,
      categoryId: createdCategories.find(c => c.slug === 'server-intermediate')?.id!,
      authorId: user.id,
    },
    {
      title: 'Docker Container Management on Ubuntu',
      slug: 'docker-container-management-ubuntu',
      description: 'Master Docker installation, container creation, and orchestration on Ubuntu for modern application deployment.',
      content: 'Learn Docker from basics to advanced container management...',
      published: true,
      featured: true,
      categoryId: createdCategories.find(c => c.slug === 'server-advanced')?.id!,
      authorId: user.id,
    },
    {
      title: 'Ubuntu Desktop Customization with GNOME',
      slug: 'ubuntu-desktop-gnome-customization',
      description: 'Transform your Ubuntu desktop with themes, extensions, and productivity tweaks for an optimal workflow.',
      content: 'Customize your Ubuntu desktop environment with GNOME...',
      published: true,
      featured: true,
      categoryId: createdCategories.find(c => c.slug === 'desktop-intermediate')?.id!,
      authorId: user.id,
    },
    {
      title: 'Ubuntu Command Line Basics for Beginners',
      slug: 'ubuntu-command-line-basics',
      description: 'Essential terminal commands and navigation techniques every Ubuntu user should know.',
      content: 'Master the Ubuntu command line with these essential commands...',
      published: true,
      featured: false,
      categoryId: createdCategories.find(c => c.slug === 'desktop-beginner')?.id!,
      authorId: user.id,
    },
    {
      title: 'Setting Up a LAMP Stack on Ubuntu Server',
      slug: 'lamp-stack-ubuntu-server',
      description: 'Complete guide to installing and configuring Linux, Apache, MySQL, and PHP on Ubuntu Server.',
      content: 'Build a complete LAMP stack for web development...',
      published: true,
      featured: false,
      categoryId: createdCategories.find(c => c.slug === 'server-intermediate')?.id!,
      authorId: user.id,
    },
  ]

  for (const tutorialData of tutorials) {
    const tutorial = await prisma.tutorial.upsert({
      where: { slug: tutorialData.slug },
      update: {},
      create: tutorialData,
    })
    console.log('✅ Created tutorial:', tutorial.title)

    // Add some sample code snippets
    if (tutorial.slug === 'ubuntu-22-04-installation-guide') {
      await prisma.codeSnippet.create({
        data: {
          title: 'Download Ubuntu ISO',
          code: 'wget https://releases.ubuntu.com/22.04/ubuntu-22.04.3-desktop-amd64.iso',
          language: 'bash',
          tutorialId: tutorial.id,
        },
      })

      await prisma.codeSnippet.create({
        data: {
          title: 'Create Bootable USB',
          code: 'sudo dd if=ubuntu-22.04.3-desktop-amd64.iso of=/dev/sdX bs=4M status=progress',
          language: 'bash',
          tutorialId: tutorial.id,
        },
      })
    }

    if (tutorial.slug === 'nginx-ssl-ubuntu-server') {
      await prisma.codeSnippet.create({
        data: {
          title: 'Install NGINX',
          code: 'sudo apt update && sudo apt install nginx -y\nsudo systemctl start nginx\nsudo systemctl enable nginx',
          language: 'bash',
          tutorialId: tutorial.id,
        },
      })

      await prisma.codeSnippet.create({
        data: {
          title: 'Get SSL Certificate',
          code: 'sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com',
          language: 'bash',
          tutorialId: tutorial.id,
        },
      })
    }
  }

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
