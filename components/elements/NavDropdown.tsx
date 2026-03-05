"use client"

import { FC, useState } from "react"

type Item = { label: string; href: string }

type Props = {
  label: string
  href: string
  items: Item[]
}

const NavDropdown: FC<Props> = ({ label, href, items }) => {
  const [open, setOpen] = useState(false)

  return (
    <li
      style={{ height: "100%", position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href={href} style={{ color: "#333", textDecoration: "none" }}>
        {label}
      </a>
      {open && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            listStyle: "none",
            margin: 0,
            padding: ".5rem 0",
            whiteSpace: "nowrap",
            zIndex: 100,
          }}
        >
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                style={{
                  display: "block",
                  padding: ".5rem 1.25rem",
                  color: "#333",
                  fontSize: ".875rem",
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
