
import Navbar from '@/components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Vishal Jaiswal',
  description: 'My Personal Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className="w-full h-screen font-bodyFont bg-bodyColor text-textLight 
        overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
