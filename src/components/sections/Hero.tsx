import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { yearsOfExperience } from '@/lib/utils'
import Image from 'next/image'

export const Hero = ({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void
}) => {
  return (
    <section id="hero" className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="https://res.cloudinary.com/africhoral/image/upload/w_350,c_fill,ar_1:1,g_auto,r_max,f_auto,q_auto/v1749388695/personal-website/ibeanu-hillary-senior-fullstack-engineer-main.jpg"
              alt="Ibeanu hillary - Senior Full-Stack Engineer"
              sizes="(max-width: 640px) 250px, (max-width: 1024px) 300px, 350px"
              width={200}
              height={200}
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-8"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Senior Full-Stack Engineer & Performance Optimization Specialist
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            I build scalable, high-performance full-stack applications that
            drive business results. With {yearsOfExperience}+ years of
            experience leading development teams across Europe and Africa, I
            specialize in React, TypeScript, Node.js, and modern web
            architectures that increase speed, efficiency, and user engagement
            across the entire stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              aria-label="Let's Build Something Amazing"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              {"Let's Build Something Amazing"}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              aria-label="View My Work"
              onClick={() => scrollToSection('expertise')}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
