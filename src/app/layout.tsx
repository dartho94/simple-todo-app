import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToDo',
  description: 'Fast and simple todo app using react',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
      >
        <Navbar />
        <main className="w-full pt-12 grid place-items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
