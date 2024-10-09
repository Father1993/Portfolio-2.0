/* eslint-disable max-len */
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Spinej.ru',
    short_name: 'spinej.ru',
    description: 'Сайт портфолио | Спиней Андрей',
    start_url: '/',
    background_color: '#fff',
    theme_color: '#fff',
    lang: 'ru',
    display: 'standalone',
    icons: [
      {
        src: '/img/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/img/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/img/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/img/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/img/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
