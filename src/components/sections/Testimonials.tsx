import { Card, CardContent } from '@/components/ui/Card'

const testimonials = [
  {
    quote:
      'Hillary transformed our catalog management system at Smartly.io, increasing our integration speed by 28% and dramatically improving our monitoring capabilities...',
    author: 'Sarah Chen',
    role: 'Product Manager, Smartly.io',
  },
  {
    quote:
      'Working with Hillary at Jungle.ai was incredible. She led the team that revamped our flagship dashboard, resulting in 37% faster load times...',
    author: 'Miguel Santos',
    role: 'Engineering Director, Jungle.ai',
  },
  {
    quote:
      'Hillary delivered a complete redesign of our flagship dashboard at Jungle.ai, resulting in 37% faster load times and significantly improved user experience...',
    author: 'Anna Weber',
    role: 'Tech Lead, Zenjob GmbH',
  },
]

export const Testimonial = () => {
  return null
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What People Say
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {testimonials.map(testimonial => (
              <Card
                key={testimonial.quote}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <p className="text-lg mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
