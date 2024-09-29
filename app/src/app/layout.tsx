import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '900'] })

export const metadata = {
  title: 'Construction - Build the future',
  description: 'Construction Landing Page',
  author: 'Edlávio Pedro Alberto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-gray-500`}>
        <main className='mx-auto w-11/12 lg:w-10/12'>
          {children}
        </main>
      </body>
    </html>
  )
}
