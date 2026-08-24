import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ContentOS | Sistema Operativo de Contenido para Instagram',
  description: 'Dashboard premium de métricas, IA y calendario de contenido para Instagram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
