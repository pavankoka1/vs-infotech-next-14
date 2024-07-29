import { Inter } from "next/font/google"
import { Quicksand, Roboto } from "next/font/google"

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
})

const quicksand = Quicksand({
    weight: ["300", "400", "500", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
})
import "@/styles/index.css"
import "@/styles/global.css"
import "./globals.css"

export const metadata = {
    title: "VS Infotech Solutions",
    description: "Developed by Pavan Koka",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} ${quicksand.className}`}>
                {children}
            </body>
        </html>
    )
}
