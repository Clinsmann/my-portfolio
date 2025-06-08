import { Button } from '../ui/Button'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'

const navigationItems = [
  { label: 'Home', section: 'hero' },
  { label: 'Expertise', section: 'expertise' },
  { label: 'About', section: 'about' },
  { label: 'Testimonials', section: 'testimonials' },
  { label: 'Contact', section: 'contact' },
]

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  if (!mounted) return null

  return (
    <Button size="icon" variant="ghost" onClick={handleThemeToggle}>
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export const Navigation = ({
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}: {
  scrollToSection: (section: string) => void
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}) => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Ibeanu hillary</div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map(item => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section)}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <DarkModeToggle />
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.section)}
                  className="text-left hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
