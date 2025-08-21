"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  messages: any
  locale: string
}

export function Header({ messages, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const navigation = [
    { name: messages.nav.home, href: "#hero" },
    { name: messages.nav.about, href: "#about" },
    { name: messages.nav.projects, href: "#projects" },
    { name: messages.nav.contact, href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleLanguage = () => {
    const newLocale = locale === "fr" ? "en" : "fr"
    router.push(`/${newLocale}`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-xl font-bold text-primary">{messages.hero.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleLanguage} className="h-9 w-9">
            <Globe className="h-4 w-4" />
            <span className="sr-only">Change language</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleLanguage} className="h-9 w-9">
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-9 w-9">
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
