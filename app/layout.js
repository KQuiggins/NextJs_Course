'use client'

import './globals.css'
import Header from '@/components/Header'
import { useEffect } from 'react'


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
