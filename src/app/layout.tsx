import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReactQueryProvider from '@/providers/react-query-provider'
import { CookiesProvider } from 'next-client-cookies/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Timezone App',
  description: 'Timezone App for job interview',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CookiesProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </CookiesProvider>
      </body>
    </html>
  )
}
