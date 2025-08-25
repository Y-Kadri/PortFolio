import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Yanis Kadri - Développeur Full Stack",
    template: "%s | Yanis Kadri - Développeur Full Stack",
  },
  description: "Portfolio de Yanis Kadri, développeur full stack.",
  keywords: [
    "développeur",
    "full stack",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "TailwindCSS",
    "développeur web",
    "Bordeaux",
    "Ingénieur",
    "développeur front-end",
    "développeur back-end",
    "développeur d'applications",
    "java",
    "Spring Boot",
    "Python",
    "Django",
  ],
  authors: [{ name: "yanis Kadri", url: "https://yanis-kadri-portfolio.vercel.app" }],
  creator: "Yanis Kadri",
  publisher: "Yanis Kadri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yanis-kadri-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/fr",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://yanis-kadri-portfolio.vercel.app",
    title: "Yanis Kadri - Ingénieur Concepteur Développeur d'applications Full Stack",
    description: "Portfolio de Yanis Kadri, développeur full stack.",
    siteName: "Yanis Kadri Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yanis Kadri - Ingénieur Concepteur Développeur d'applications Full Stack Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanis Kadri - Ingénieur Concepteur Développeur d'applications Full Stack",
    description: "Portfolio moderne de Yanis Kadri, développeur full stack.",
    creator: "@yaniskadri",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0891b2" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${playfair.variable} ${sourceSans.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
