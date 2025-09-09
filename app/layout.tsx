import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tanveer - Portfolio',
  description: 'Full Stack Developer Portfolio',
  keywords: 'developer, portfolio, react, nextjs, nodejs',
  authors: [{ name: 'Tanveer' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  )
}