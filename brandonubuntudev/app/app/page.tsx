
import Hero from '@/components/hero'
import QuickStart from '@/components/quick-start'
import TutorialCategories from '@/components/tutorial-categories'
import FeaturedTutorials from '@/components/featured-tutorials'
import Stats from '@/components/stats'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <QuickStart />
      <TutorialCategories />
      <FeaturedTutorials />
    </div>
  )
}
