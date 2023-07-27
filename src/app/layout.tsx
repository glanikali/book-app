import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import AppProvider from '@/components/AppProvider'
import Modal from '@/components/Modal'
import Nav from '@/components/Nav'
export const metadata: Metadata = {
  title: 'Book App',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="night" lang="en">
      <body>
        <AppProvider>
          <main className="min-h-screen">
            <Modal />
            <Nav />
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  )
}
