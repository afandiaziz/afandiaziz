import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Afandi Aziz',
    description: 'Portfolio of Afandi Aziz',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            </head>
            <body className={`${outfit.className} bg-zinc-100`}>
                {children}
            </body>
        </html>
    )
}
