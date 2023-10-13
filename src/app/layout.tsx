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
            <body className={outfit.className}>
                <nav className="flex justify-center mt-5 sticky top-7">
                    <div className="flex py-1 px-3 border border-gray-500 border-opacity-60 rounded-lg z-50 drop-shadow-sm backdrop-blur-2xl">
                        <a href="#" className="text-base leading-6 text-gray-500 py-2 px-5 rounded-lg hover:font-semibold hover:text-zinc-800 hover:bg-opacity-50 hover:bg-gray-300">About</a>
                        <a href="#" className="text-base leading-6 text-gray-500 py-2 px-5 rounded-lg hover:font-semibold hover:text-zinc-800 hover:bg-opacity-50 hover:bg-gray-300">Experiences</a>
                        <a href="#" className="text-base leading-6 text-gray-500 py-2 px-5 rounded-lg hover:font-semibold hover:text-zinc-800 hover:bg-opacity-50 hover:bg-gray-300">Projects</a>
                        <a href="#" className="text-base leading-6 text-gray-500 py-2 px-5 rounded-lg hover:font-semibold hover:text-zinc-800 hover:bg-opacity-50 hover:bg-gray-300">Contact</a>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    )
}
