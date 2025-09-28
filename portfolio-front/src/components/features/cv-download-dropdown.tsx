"use client"

import { Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface CVDownloadDropdownProps {
  messages: any
}

export function CVDownloadDropdown({ messages }: CVDownloadDropdownProps) {
  const handleDownload = (cvType: "fr" | "en") => {
    const link = document.createElement("a")
    link.href = cvType === "fr" ? "/cv-fr.pdf" : "/cv-en.pdf"
    link.download = cvType === "fr" ? "CV-Yanis-Kadri-FR.pdf" : "CV-Yanis-Kadri-EN.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="group border-2 border-primary/20 hover:border-primary/40 px-8 py-3 text-base font-medium bg-transparent"
        >
          <Download className="h-4 w-4 mr-2 transition-transform group-hover:translate-y-1" />
          {messages.about.downloadCV}
          <ChevronDown className="h-4 w-4 ml-2 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-56">
        <DropdownMenuItem onClick={() => handleDownload("fr")} className="cursor-pointer">
          <div className="flex items-center gap-3">
            <span className="text-lg">🇫🇷</span>
            <div className="flex flex-col">
              <span className="font-medium">{messages.cvDownload.french}</span>
              <span className="text-xs text-muted-foreground">{messages.cvDownload.frenchDesc}</span>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDownload("en")} className="cursor-pointer">
          <div className="flex items-center gap-3">
            <span className="text-lg">🌍</span>
            <div className="flex flex-col">
              <span className="font-medium">{messages.cvDownload.international}</span>
              <span className="text-xs text-muted-foreground">{messages.cvDownload.internationalDesc}</span>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
