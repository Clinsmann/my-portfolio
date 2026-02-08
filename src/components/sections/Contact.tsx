import { Button } from '../ui/Button'
import { Label } from '../ui/Label'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Loader2,
  LucideIcon,
} from 'lucide-react'
import { useState } from 'react'

const contactUseItems: {
  icon: LucideIcon
  label: string
  link?: string
  hasExternalLink?: boolean
}[] = [
    {
      icon: Mail,
      label: 'Ibeanuhillary@gmail.com',
      link: 'mailto:ibeanuhillary@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Berlin, Germany',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/ibeanuhillary',
      hasExternalLink: true,
    },
    {
      icon: Github,
      label: 'GitHub Profile',
      link: 'https://github.com/clinsmann',
      hasExternalLink: true,
    },
  ]

export type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/xjgevqld', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {"Let's"} Work Together
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactUseItems.map(item => (
                  <div key={item.label} className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-primary" />
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors flex items-center"
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    required
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  required
                  id="subject"
                  name="subject"
                  placeholder="Project discussion"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  required
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting && (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <p className="text-green-600 text-center">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
