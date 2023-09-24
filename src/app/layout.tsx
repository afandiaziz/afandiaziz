import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

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
         <body className={plusJakartaSans.className}>
            <nav className="flex justify-around mt-5">
               <div className="flex gap-x-11 bg-white py-5 px-10 border rounded-full z-50 drop-shadow sticky top-0 backdrop-blur-lg">
                  <a href="#" className="text-base leading-6 text-gray-500 font-medium hover:font-bold hover:text-zinc-800">About</a>
                  <a href="#" className="text-base leading-6 text-gray-500 font-medium hover:font-bold hover:text-zinc-800">Work</a>
                  <a href="#" className="text-base leading-6 text-gray-500 font-medium hover:font-bold hover:text-zinc-800">Tech Stacks</a>
                  <a href="#" className="text-base leading-6 text-gray-500 font-medium hover:font-bold hover:text-zinc-800">Contact</a>
               </div>
            </nav>
            {/* {children} */}
         </body>
      </html>
   )
}
