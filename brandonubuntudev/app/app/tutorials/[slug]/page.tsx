
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Clock, User, Star, Calendar, Share2, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import CodeBlock from '@/components/code-block'
import { useToast } from '@/hooks/use-toast'

// Mock tutorial data - in a real app, this would come from your database
const mockTutorials: { [key: string]: any } = {
  'ubuntu-22-04-installation-guide': {
    id: '1',
    title: 'Complete Ubuntu 22.04 LTS Installation Guide',
    description: 'Step-by-step guide to installing Ubuntu 22.04 LTS with dual-boot configuration and essential post-installation setup.',
    content: `# Complete Ubuntu 22.04 LTS Installation Guide

Welcome to the comprehensive guide for installing Ubuntu 22.04 LTS. This tutorial will walk you through every step of the installation process, including dual-boot setup and essential post-installation configurations.

## Prerequisites

Before we begin, make sure you have:
- A USB drive with at least 4GB of storage
- A computer with at least 4GB RAM and 25GB free disk space
- Backup of important data (recommended)

## Step 1: Download Ubuntu 22.04 LTS

First, download the Ubuntu 22.04 LTS ISO file from the official website.

\`\`\`bash
# You can also download using wget
wget https://releases.ubuntu.com/22.04/ubuntu-22.04.3-desktop-amd64.iso
\`\`\`

## Step 2: Create Bootable USB

### Using dd command (Linux/macOS)

\`\`\`bash
# Replace /dev/sdX with your USB device
sudo dd if=ubuntu-22.04.3-desktop-amd64.iso of=/dev/sdX bs=4M status=progress
sync
\`\`\`

### Using Rufus (Windows)

1. Download Rufus from the official website
2. Select your USB device
3. Choose the Ubuntu ISO file
4. Click "Start" to create the bootable USB

## Step 3: Boot from USB

1. Insert the USB drive into your computer
2. Restart your computer
3. Press F12, F2, or Del (depending on your system) to access boot menu
4. Select the USB drive to boot from

## Step 4: Installation Process

### Choose Installation Type

When the Ubuntu installer starts, you'll see several options:

- **Try Ubuntu**: Test Ubuntu without installing
- **Install Ubuntu**: Begin the installation process

Select "Install Ubuntu" to proceed.

### Keyboard Layout

Choose your keyboard layout. Ubuntu will automatically detect your layout, but you can change it if needed.

### Updates and Other Software

Choose your installation preferences:
- Normal installation (recommended for most users)
- Minimal installation (for advanced users)

### Installation Type

For dual-boot setup:
1. Select "Install Ubuntu alongside [existing OS]"
2. Ubuntu will automatically partition your drive
3. You can also choose "Something else" for manual partitioning

## Step 5: Post-Installation Setup

After installation, perform these essential steps:

### Update System

\`\`\`bash
sudo apt update && sudo apt upgrade -y
\`\`\`

### Install Essential Software

\`\`\`bash
# Install media codecs
sudo apt install ubuntu-restricted-extras -y

# Install development tools
sudo apt install git curl wget vim build-essential -y

# Install Snap packages
sudo snap install code discord
\`\`\`

### Configure Firewall

\`\`\`bash
# Enable UFW firewall
sudo ufw enable

# Check status
sudo ufw status
\`\`\`

## Troubleshooting

### Boot Issues

If you encounter boot issues:

\`\`\`bash
# Repair GRUB bootloader
sudo grub-install /dev/sda
sudo update-grub
\`\`\`

### Graphics Issues

For NVIDIA graphics cards:

\`\`\`bash
# Install NVIDIA drivers
sudo apt install nvidia-driver-470 -y
sudo reboot
\`\`\`

## Conclusion

Congratulations! You've successfully installed Ubuntu 22.04 LTS. Your system is now ready for daily use. Consider exploring our other tutorials for customization and advanced configuration options.

## Next Steps

- [Ubuntu Desktop Customization with GNOME](/tutorials/ubuntu-desktop-gnome-customization)
- [Ubuntu Command Line Basics](/tutorials/ubuntu-command-line-basics)
- [Ubuntu Desktop Security Best Practices](/tutorials/ubuntu-desktop-security)`,
    category: 'Desktop',
    level: 'Beginner',
    readTime: '15 min',
    author: 'Brandon',
    rating: 4.9,
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-20',
    type: 'desktop',
  },
  'nginx-ssl-ubuntu-server': {
    id: '2',
    title: 'Setting Up NGINX with SSL on Ubuntu Server',
    description: 'Learn how to install, configure, and secure NGINX web server with Let\'s Encrypt SSL certificates on Ubuntu Server.',
    content: `# Setting Up NGINX with SSL on Ubuntu Server

This comprehensive guide will walk you through installing and configuring NGINX web server with SSL certificates using Let's Encrypt on Ubuntu Server.

## Prerequisites

- Ubuntu Server 20.04 or 22.04
- Root or sudo access
- Domain name pointing to your server
- Basic command line knowledge

## Step 1: Update System

\`\`\`bash
sudo apt update && sudo apt upgrade -y
\`\`\`

## Step 2: Install NGINX

\`\`\`bash
# Install NGINX
sudo apt install nginx -y

# Start and enable NGINX
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
\`\`\`

## Step 3: Configure Firewall

\`\`\`bash
# Allow NGINX through firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable

# Check firewall status
sudo ufw status
\`\`\`

## Step 4: Configure NGINX

Create a server block for your domain:

\`\`\`bash
# Create directory for your site
sudo mkdir -p /var/www/yourdomain.com/html

# Set ownership
sudo chown -R $USER:$USER /var/www/yourdomain.com/html

# Set permissions
sudo chmod -R 755 /var/www/yourdomain.com
\`\`\`

Create an index file:

\`\`\`bash
# Create index.html
cat > /var/www/yourdomain.com/html/index.html << EOF
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to yourdomain.com</title>
</head>
<body>
    <h1>Success! NGINX is working!</h1>
    <p>This is a test page for yourdomain.com</p>
</body>
</html>
EOF
\`\`\`

## Step 5: Create Server Block

\`\`\`bash
# Create server block configuration
sudo nano /etc/nginx/sites-available/yourdomain.com
\`\`\`

Add the following configuration:

\`\`\`nginx
server {
    listen 80;
    listen [::]:80;
    
    root /var/www/yourdomain.com/html;
    index index.html index.htm index.nginx-debian.html;
    
    server_name yourdomain.com www.yourdomain.com;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
\`\`\`

Enable the server block:

\`\`\`bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/

# Test NGINX configuration
sudo nginx -t

# Reload NGINX
sudo systemctl reload nginx
\`\`\`

## Step 6: Install Certbot for SSL

\`\`\`bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y
\`\`\`

## Step 7: Obtain SSL Certificate

\`\`\`bash
# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
\`\`\`

Follow the prompts to:
1. Enter your email address
2. Agree to terms of service
3. Choose whether to share email with EFF
4. Select redirect option (recommended: redirect HTTP to HTTPS)

## Step 8: Verify SSL Configuration

Your NGINX configuration will be automatically updated. Check the new configuration:

\`\`\`bash
# View updated configuration
sudo cat /etc/nginx/sites-available/yourdomain.com
\`\`\`

## Step 9: Test SSL Renewal

\`\`\`bash
# Test automatic renewal
sudo certbot renew --dry-run
\`\`\`

## Step 10: Optimize NGINX Configuration

Add security headers and optimizations:

\`\`\`nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    
    root /var/www/yourdomain.com/html;
    index index.html index.htm index.nginx-debian.html;
    
    server_name yourdomain.com www.yourdomain.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;
    
    location / {
        try_files $uri $uri/ =404;
    }
}

server {
    listen 80;
    listen [::]:80;
    
    server_name yourdomain.com www.yourdomain.com;
    
    return 301 https://$server_name$request_uri;
}
\`\`\`

## Monitoring and Maintenance

### Check NGINX Status

\`\`\`bash
# Check NGINX status
sudo systemctl status nginx

# View NGINX logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
\`\`\`

### SSL Certificate Monitoring

\`\`\`bash
# Check certificate expiration
sudo certbot certificates

# Manual renewal (if needed)
sudo certbot renew
\`\`\`

## Conclusion

You now have a fully configured NGINX web server with SSL encryption. Your website is secure and ready to serve content over HTTPS.

## Next Steps

- [Setting Up a LAMP Stack on Ubuntu Server](/tutorials/lamp-stack-ubuntu-server)
- [Docker Container Management on Ubuntu](/tutorials/docker-container-management-ubuntu)
- [Database Administration with PostgreSQL](/tutorials/postgresql-ubuntu-server)`,
    category: 'Server',
    level: 'Intermediate',
    readTime: '25 min',
    author: 'Brandon',
    rating: 4.8,
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-18',
    type: 'server',
  },
}

export default function TutorialPage() {
  const params = useParams()
  const slug = params.slug as string
  const { toast } = useToast()
  
  const tutorial = mockTutorials[slug]

  if (!tutorial) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tutorial Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The tutorial you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link href="/tutorials">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tutorials
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: tutorial.title,
          text: tutorial.description,
          url: window.location.href,
        })
      } catch (err) {
        // User cancelled sharing
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href)
        toast({
          title: "Link Copied!",
          description: "Tutorial link has been copied to clipboard",
        })
      } catch (err) {
        toast({
          title: "Share Failed",
          description: "Unable to share or copy link",
          variant: "destructive",
        })
      }
    }
  }

  // Parse content and render with code blocks
  const renderContent = (content: string) => {
    const parts = content.split(/```(\w+)?\n([\s\S]*?)```/)
    const elements = []
    
    for (let i = 0; i < parts.length; i++) {
      if (i % 3 === 0) {
        // Regular text content
        const textParts = parts[i].split('\n').map((line, index) => {
          if (line.startsWith('# ')) {
            return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>
          } else if (line.startsWith('## ')) {
            return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.substring(3)}</h2>
          } else if (line.startsWith('### ')) {
            return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{line.substring(4)}</h3>
          } else if (line.trim() === '') {
            return <br key={index} />
          } else if (line.startsWith('- ')) {
            return <li key={index} className="ml-4">{line.substring(2)}</li>
          } else {
            return <p key={index} className="mb-4">{line}</p>
          }
        })
        elements.push(...textParts)
      } else if (i % 3 === 1) {
        // Language identifier
        continue
      } else {
        // Code block
        const language = parts[i - 1] || 'bash'
        const code = parts[i]
        elements.push(
          <div key={i} className="my-6">
            <CodeBlock code={code} language={language} />
          </div>
        )
      }
    }
    
    return elements
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button variant="ghost" asChild>
            <Link href="/tutorials" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tutorials
            </Link>
          </Button>
        </motion.div>

        {/* Tutorial Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
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
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{tutorial.rating}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                {tutorial.title}
              </CardTitle>
              
              <CardDescription className="text-lg">
                {tutorial.description}
              </CardDescription>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{tutorial.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{tutorial.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Published {tutorial.publishedAt}</span>
                </div>
                {tutorial.updatedAt !== tutorial.publishedAt && (
                  <div className="flex items-center space-x-1">
                    <span>Updated {tutorial.updatedAt}</span>
                  </div>
                )}
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Tutorial Content */}
        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                {renderContent(tutorial.content)}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Tutorials */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Related Tutorials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 justify-start">
                  <Link href="/tutorials/ubuntu-desktop-gnome-customization">
                    <div className="text-left">
                      <div className="font-semibold">Ubuntu Desktop Customization</div>
                      <div className="text-sm text-muted-foreground">Transform your desktop with GNOME</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 justify-start">
                  <Link href="/tutorials/ubuntu-command-line-basics">
                    <div className="text-left">
                      <div className="font-semibold">Command Line Basics</div>
                      <div className="text-sm text-muted-foreground">Essential terminal commands</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
