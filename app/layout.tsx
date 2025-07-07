import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tax Arena - Professional Tax & Business Solutions",
  description:
    "Expert GST, Income Tax & Business Services. Comprehensive tax solutions from certified professionals. Get accurate, timely, and cost-effective services.",
  keywords: "tax filing, GST registration, income tax, business formation, digital signature, tax consultancy",
  authors: [{ name: "Tax Arena" }],
  creator: "Tax Arena",
  publisher: "Tax Arena",
  icons: {
    icon: [
      { url: "/images/taxarena-logo.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/taxarena-logo.jpeg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [{ url: "/images/taxarena-logo.jpeg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: "/images/taxarena-logo.jpeg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Tax Arena - Professional Tax & Business Solutions",
    description:
      "Expert GST, Income Tax & Business Services. Comprehensive tax solutions from certified professionals.",
    url: "https://taxarena.com",
    siteName: "Tax Arena",
    images: [
      {
        url: "/images/taxarena-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Tax Arena Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Arena - Professional Tax & Business Solutions",
    description:
      "Expert GST, Income Tax & Business Services. Comprehensive tax solutions from certified professionals.",
    images: ["/images/taxarena-logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/taxarena-logo.jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/images/taxarena-logo.jpeg" />
        <meta name="theme-color" content="#92400e" />
        <meta name="msapplication-TileColor" content="#92400e" />
        <meta name="msapplication-TileImage" href="/images/taxarena-logo.jpeg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
