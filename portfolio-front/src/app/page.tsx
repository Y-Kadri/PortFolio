"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { getMessages, type Locale } from "@/lib/i18n"

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
    </div>
  )
}
