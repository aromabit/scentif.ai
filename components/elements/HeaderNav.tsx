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
        gap: "2rem",
        listStyle: "none",
        margin: 0,
        padding: 0,
        fontSize: ".875rem",
      }}
    >
      <NavDropdown
        label="Olfaction AI Platform"
        href="#platform"
        items={[
          { label: "ScentifAI", href: "#scentifai" },
          { label: "Aroma Imaging Sensor", href: "#aroma-imaging-sensor" },
        ]}
      />
      <NavItem label="Company" href="#company" />
      <NavItem label="News" href="#news" />
      <NavItem label="Contact" href="#contact" />
    </ul>
  </nav>
)

export default HeaderNav
