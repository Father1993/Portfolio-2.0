/* eslint-disable max-len */
import type { Metadata, Viewport } from 'next'
import PagesLayout from '@/components/layouts/PageLayout'
import './globalStyles/normalize.css'
import './globalStyles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://spinej.ru'),
  title: 'Spinej.ru | Сайт портфолио/резюме Спиней Андрей',
  description: 'Сайт портфолио/резюме разработчика Спиней Андрея',
  keywords: 'Спиней, spinej, spiney, spinei, Спиней Андрей',
  authors: [{ name: 'Perevozka27' }],
  creator: 'Spinej.ru',
  publisher: 'Spinej.ru',
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  icons: {
    icon: [
      { url: '/img/favicon.ico', sizes: 'any' },
      { url: '/img/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/img/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/img/logo-s.svg', color: '#5bbad5' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://Spinej.ru',
    siteName: 'Spinej.ru',
    title: 'Spinej.ru - Сайт портфолио/резюме Спиней Андрей',
    description: 'Сайт портфолио/резюме разработчика Спиней Андрея',
    images: [
      {
        url: '/img/android-chrome-512x512.png',
        alt: 'Spinej.ru - Спиней Андрей',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spinej.ru - Спиней Андрей',
    description: 'Сайт портфолио/резюме разработчика Спиней Андрея',
    images: ['/img/android-chrome-192x192.png'],
    creator: '@Spinej.ru',
  },
  alternates: {
    canonical: 'https://Spinej.ru',
    languages: {
      'ru-RU': 'https://Spinej.ru',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ваш_код_верификации_google',
    yandex: 'ваш_код_верификации_yandex',
  },
}

export const viewport: Viewport = {
  themeColor: 'white',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PagesLayout>{children}</PagesLayout>
}
