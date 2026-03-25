"use client"

import { FC } from "react"
import { usePathname } from "next/navigation"
import NavDropdown from "./NavDropdown"
import { Locale, translations } from "lib/translations"

const NavItem: FC<{ label: string; href: string }> = ({ label, href }) => (
  <li style={{ alignItems: "center", display: "flex" }}>
    <a
      href={href}
      style={{
        color: "#333",
        display: "block",
        padding: ".5rem 0",
        textDecoration: "none",
        verticalAlign: "middle",
      }}
    >
      {label}
    </a>
  </li>
)

const HeaderNav: FC = () => {
  const pathname = usePathname()
  const detectedLocale: Locale = pathname.startsWith("/ja") ? "ja" : "en"
  const t = translations[detectedLocale].nav

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontSize: ".875rem",
          gap: "0 1.5rem",
          listStyle: "none",
          margin: 0,
          padding: ".5rem",
        }}
      >
        <NavDropdown
          label={t.platform}
          href="#platform"
          items={[
            { href: "#scentifai", label: t.scentifai },
            { href: "#aroma-imaging-sensor", label: t.ais },
          ]}
        />
        <NavItem label={t.company} href="#company" />
        <NavItem label={t.news} href="#news" />
        <NavItem label={t.contact} href="#contact" />
        <li style={{ alignItems: "center", display: "flex" }}>
          <a
            href={detectedLocale === "en" ? "/ja/" : "/"}
            aria-label={`Switch to ${detectedLocale === "en" ? "ja" : "en"}`}
            style={{
              border: "1px solid #ccc",
              borderRadius: "1rem",
              color: "#555",
              display: "block",
              fontSize: ".8rem",
              padding: ".25rem .6rem",
              textDecoration: "none",
            }}
          >
            {detectedLocale === "en" ? "日本語" : "EN"}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav
