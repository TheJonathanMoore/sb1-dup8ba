import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ContactForm from '@/components/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyRoof - Expert Roof Inspections',
  description: 'Get comprehensive video inspections of your roof with MyRoof',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ContactForm />
      </body>
    </html>
  )
}