import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'

import { SearchContextProvider } from '@/components/SearchProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BootstrapClient from '@/components/BoostrapClient'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/layout.scss'
import logoOnly from '@/img/assets/logo_only.png'

const title = 'SiLeNtWaLkEr Wallpapers'

export const viewport: Viewport = {
  themeColor: '#d4ce2a'
}

export const metadata: Metadata = {
  title,
  metadataBase: new URL('https://destinyemblemwallpapers.com'),
  openGraph: {
    title,
    type: 'website',
    url: '/',
    description:
      'The biggest collection of Destiny emblem wallpapers. Made by SiLeNtWaLkEr',
    images: [{ url: logoOnly.src }]
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <SearchContextProvider>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </SearchContextProvider>
        <footer>
          <Footer />
        </footer>
        <BootstrapClient />
        <GoogleTagManager gtmId='G-3Z2HM7FKC8' />
      </body>
    </html>
  )
}
