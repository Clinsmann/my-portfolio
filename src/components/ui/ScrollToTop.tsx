import { ChevronUp } from 'lucide-react'
import { Button } from './Button'
import { useCallback } from 'react'

export const ScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 rounded-full shadow-lg z-50"
    >
      <ChevronUp className="h-4 w-4" />
    </Button>
  )
}
