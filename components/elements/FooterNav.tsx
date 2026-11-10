"use client"

import { FC } from "react"
import { usePathname } from "next/navigation"
import { translations } from "lib/translations"

const FooterNav: FC = () => {
  const ja = usePathname().startsWith("/ja")
  const t = translations[ja ? "ja" : "en"].nav
  const prefix = ja ? "/ja" : ""

  return (
    <nav style={{ display: "flex", gap: "1.5rem", marginBottom: ".5rem" }}>
      <a href={`${prefix}/privacy-policy/`} style={{ color: "#555" }}>
        {t.privacy}
      </a>
      <a href={`${prefix}/terms/`} style={{ color: "#555" }}>
        {t.terms}
      </a>
    </nav>
  )
}

export default FooterNav
