"use client"

import { FC } from "react"
import NavDropdown from "./NavDropdown"

const NavItem: FC<{ label: string; href: string }> = ({ label, href }) => (
  <li style={{ alignItems: "center", display: "flex" }}>
    <a
      href={href}
      style={{
        color: "#333",
        display: "block",
        textDecoration: "none",
        verticalAlign: "middle",
      }}
    >
      {label}
    </a>
  </li>
)

const HeaderNav: FC = () => (
  <nav>
    <ul
      style={{
        display: "flex",
        fontSize: ".875rem",
        gap: "2rem",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      <NavDropdown
        label="Olfaction AI Platform"
        href="#platform"
        items={[
          { href: "#scentifai", label: "ScentifAI" },
          { href: "#aroma-imaging-sensor", label: "Aroma Imaging Sensor" },
        ]}
      />
      <NavItem label="Company" href="#company" />
      <NavItem label="News" href="#news" />
      <NavItem label="Contact" href="#contact" />
    </ul>
  </nav>
)

export default HeaderNav
