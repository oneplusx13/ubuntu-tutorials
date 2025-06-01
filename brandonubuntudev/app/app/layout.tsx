
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrandonUbuntuDev - Ubuntu Desktop & Server Tutorials',
  description: 'Professional Ubuntu tutorials for Desktop and Server. Learn from beginner to advanced levels with step-by-step guides and code examples.',
  keywords: 'Ubuntu, Linux, tutorials, desktop, server, beginner, intermediate, advanced',
  authors: [{ name: 'Brandon' }],
  openGraph: {
    title: 'BrandonUbuntuDev - Ubuntu Desktop & Server Tutorials',
    description: 'Professional Ubuntu tutorials for Desktop and Server. Learn from beginner to advanced levels with step-by-step guides and code examples.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
