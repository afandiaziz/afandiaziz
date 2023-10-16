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
                <nav className="flex justify-center mt-5 sticky top-7 z-20">
                    <div className="flex py-1 px-3 border border-neutral-500 border-opacity-60 rounded-lg z-50 drop-shadow-sm backdrop-blur-2xl">
                        <a href="#" className="text-base leading-6 text-neutral-500 py-2 px-5 rounded-lg hover:font-semibold hover:text-white hover:bg-zinc-800">About</a>
                        <a href="#" className="text-base leading-6 text-neutral-500 py-2 px-5 rounded-lg hover:font-semibold hover:text-white hover:bg-zinc-800">Experiences</a>
                        <a href="#" className="text-base leading-6 text-neutral-500 py-2 px-5 rounded-lg hover:font-semibold hover:text-white hover:bg-zinc-800">Projects</a>
                        <a href="#" className="text-base leading-6 text-neutral-500 py-2 px-5 rounded-lg hover:font-semibold hover:text-white hover:bg-zinc-800">Contact</a>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    )
}
