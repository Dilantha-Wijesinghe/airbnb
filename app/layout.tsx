import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "./components/navbar/Navbar"
import ClientOnly from "./components/ClientOnly"
import Modal from "./components/modals/Modal"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Modal isOpen title="Hello world" />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
