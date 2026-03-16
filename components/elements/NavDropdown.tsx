"use client"

import { FC, useState } from "react"

type Item = { href: string; label: string }

type Props = {
  href: string
  items: Item[]
  label: string
}

const NavDropdown: FC<Props> = ({ label, href, items }) => {
  const [open, setOpen] = useState(false)

  return (
    <li
      style={{ height: "100%", padding: ".5rem 0", position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href={href} style={{ color: "#333", textDecoration: "none" }}>
        {label}
      </a>
      {open && (
        <ul
          style={{
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            left: 0,
            listStyle: "none",
            margin: 0,
            padding: ".5rem 0",
            position: "absolute",
            top: "100%",
            whiteSpace: "nowrap",
            zIndex: 100,
          }}
        >
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                style={{
                  color: "#333",
                  display: "block",
                  fontSize: ".875rem",
                  padding: ".5rem 1.25rem",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavDropdown
