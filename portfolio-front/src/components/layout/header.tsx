"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

interface HeaderProps {
  messages: any
  locale: string
}

export function Header({ messages, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-locale", locale)
    }
  }, [locale])

  const navItems = [
    { href: `/${locale}#hero`, label: messages.nav.home },
    { href: `/${locale}#about`, label: messages.nav.about },
    { href: `/${locale}#projects`, label: messages.nav.projects },
    { href: `/${locale}#contact`, label: messages.nav.contact },
  ]

  const switchLanguage = (newLocale: string) => {
    setIsLanguageOpen(false)
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-locale", newLocale)
    }

    // Remove current locale from path and add new one
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "") || "/"
    const newPath = `/${newLocale}${pathWithoutLocale}`
    router.push(newPath)
  }

  const handleSmoothScroll = (href: string) => {
    const url = new URL(href, window.location.origin)
    const hash = url.hash

    if (hash && window.location.pathname === url.pathname) {
      // Same page, smooth scroll to section
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      // Different page, navigate normally
      window.location.href = href
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="font-heading text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            YK
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleSmoothScroll(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle, Language Selector & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{locale.toUpperCase()}</span>
              </Button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-32 bg-background border border-border rounded-lg shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => switchLanguage("fr")}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${
                        locale === "fr" ? "bg-muted font-medium" : ""
                      }`}
                    >
                      🇫🇷 Français
                    </button>
                    <button
                      onClick={() => switchLanguage("en")}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${
                        locale === "en" ? "bg-muted font-medium" : ""
                      }`}
                    >
                      🇺🇸 English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleSmoothScroll(item.href)}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors text-left w-full"
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
