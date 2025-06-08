import { yearsOfExperience } from '../../lib/utils'

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Me
          </h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {"I'm"} a Senior Full-Stack Engineer based in Berlin with over{' '}
              {yearsOfExperience}+ years of experience creating exceptional web
              applications for companies across fintech, adtech, and AI
              industries. My passion lies in transforming complex technical
              challenges into elegant, user-friendly solutions that drive
              business growth—from responsive frontends to robust backend APIs.
              I thrive in collaborative, agile environments where I can mentor
              fellow developers while leading architectural decisions across the
              entire stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
