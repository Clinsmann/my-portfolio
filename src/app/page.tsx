'use client'

import { useState, useEffect } from 'react'
import { Project } from '@/components/sections/Projects'
import { Testimonial } from '@/components/sections/Testimonials'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'
import { ScrollToTop } from '../components/ui/ScrollToTop'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Expertise } from '@/components/sections/Expertise'
import { Hero } from '../components/sections/Hero'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        scrollToSection={scrollToSection}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />

      <Hero scrollToSection={scrollToSection} />

      <Expertise />

      <About />

      <Project />

      <Testimonial />

      <Contact />

      <Footer />

      {showScrollTop && <ScrollToTop />}
    </div>
  )
}
