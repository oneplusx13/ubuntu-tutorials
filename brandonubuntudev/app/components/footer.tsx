
import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo.png"
                  alt="BrandonUbuntuDev Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                BrandonUbuntuDev
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional Ubuntu tutorials for Desktop and Server environments. 
              Learn Linux the right way with step-by-step guides.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tutorials/desktop" className="text-muted-foreground hover:text-primary transition-colors">
                  Desktop Tutorials
                </Link>
              </li>
              <li>
                <Link href="/tutorials/server" className="text-muted-foreground hover:text-primary transition-colors">
                  Server Tutorials
                </Link>
              </li>
              <li>
                <Link href="/quick-start" className="text-muted-foreground hover:text-primary transition-colors">
                  Quick Start Guide
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-muted-foreground hover:text-primary transition-colors">
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tutorials/desktop/beginner" className="text-muted-foreground hover:text-primary transition-colors">
                  Beginner
                </Link>
              </li>
              <li>
                <Link href="/tutorials/desktop/intermediate" className="text-muted-foreground hover:text-primary transition-colors">
                  Intermediate
                </Link>
              </li>
              <li>
                <Link href="/tutorials/desktop/advanced" className="text-muted-foreground hover:text-primary transition-colors">
                  Advanced
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@brandonubuntudev.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 BrandonUbuntuDev. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for the Ubuntu community
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
