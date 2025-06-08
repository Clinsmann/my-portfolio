import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { yearsOfExperience } from '../lib/utils'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'Ibeanu hillary - Senior Full-Stack Engineer & Performance Optimization Specialist',
  description: `Senior Full-Stack Engineer with ${yearsOfExperience}+ years experience in React, TypeScript, Node.js. Based in Berlin, specializing in performance optimization and scalable web applications for fintech and adtech.`,
  keywords:
    'full-stack developer, react, typescript, nodejs, performance optimization, berlin developer, frontend engineer, backend engineer, fintech, adtech, graphql, nextjs',
  authors: [{ name: 'Ibeanu hillary' }],
  creator: 'Ibeanu hillary',
  openGraph: {
    title: 'Ibeanu hillary - Senior Full-Stack Engineer',
    description:
      'Experienced full-stack engineer specializing in React, TypeScript, and Node.js. Delivered 30-70% performance improvements across fintech and adtech platforms.',
    url: 'https://hillaryibeanu.com',
    siteName: 'Ibeanu hillary Portfolio',
    images: [
      'https://res.cloudinary.com/africhoral/image/upload/w_1000,ar_16:9,c_fill,g_auto/v1749388695/personal-website/ibeanu-hillary-senior-fullstack-engineer-main.jpg',
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibeanu hillary - Senior Full-Stack Engineer',
    description: `Berlin-based full-stack engineer with ${yearsOfExperience}+ years experience. React, TypeScript, Node.js specialist delivering high-performance web applications.`,
    images: [
      'https://res.cloudinary.com/africhoral/image/upload/w_1000,ar_16:9,c_fill,g_auto/v1749388695/personal-website/ibeanu-hillary-senior-fullstack-engineer-main.jpg',
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2EF6QGDHXC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2EF6QGDHXC');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
