// app/page.tsx
import { redirect } from "next/navigation";
import { headers } from "next/headers"; // <-- important

export default function RootPage() {
  const allHeaders = headers(); // récupère les headers du serveur
  const acceptLanguage = allHeaders.get("accept-language") || "";

  const locale = acceptLanguage.startsWith("fr") ? "fr" : "en";

  redirect(`/${locale}`);
}
