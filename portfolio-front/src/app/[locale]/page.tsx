"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { getMessages, type Locale } from "@/lib/i18n"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"

interface HomePageProps {
  params: { locale: Locale }
}

export default function HomePage({ params }: HomePageProps) {
  const [messages, setMessages] = React.useState<any>(null)
  const locale = params?.locale || "fr"

  React.useEffect(() => {
    getMessages(locale).then(setMessages)
  }, [locale])

  if (!messages) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header messages={messages} locale={locale} />
      <main>
        <HeroSection messages={messages} />
        <AboutSection messages={messages} locale={locale} />
        <ProjectsSection messages={messages} locale={locale} />
      </main>
      <ContactSection messages={messages} locale={locale} />
      <Footer messages={messages} locale={locale} />
      <ScrollToTop messages={messages} />
    </div>
  )
}
