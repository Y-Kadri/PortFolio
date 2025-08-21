export const defaultLocale = "fr"
export const locales = ["fr", "en"] as const

export type Locale = (typeof locales)[number]

export function getMessages(locale: Locale) {
  switch (locale) {
    case "en":
      return import("@/messages/en.json").then((module) => module.default)
    case "fr":
    default:
      return import("@/messages/fr.json").then((module) => module.default)
  }
}
