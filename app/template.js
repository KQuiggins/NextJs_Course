'use client'

import './globals.css'
import Header from '@/components/Header'
import { useEffect } from 'react'


export default function RootLayout({ children }) {

  useEffect(() => {
    console.log('RootLayout mounted');
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}
