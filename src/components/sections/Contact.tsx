import { Button } from '../ui/Button'
import { Label } from '../ui/Label'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { Mail, MapPin, Linkedin, ExternalLink, Github } from 'lucide-react'
import { useCallback } from 'react'

export const Contact = () => {
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // Form submission logic would go here
      console.log('Form submitted')
    },
    []
  )

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {"Let's"} Work Together
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Ibeanuhillary@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Berlin, Germany</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/ibeanuhillary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    LinkedIn Profile
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/clinsmann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center"
                  >
                    GitHub Profile
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project discussion"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
