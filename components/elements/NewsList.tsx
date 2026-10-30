"use client"

import { FC, useState } from "react"

type Item = { id: number; date: string; title: string }

const PAGE_SIZE = 10

const NewsList: FC<{ items: Item[]; basePath: string; moreLabel: string }> = ({
  items,
  basePath,
  moreLabel,
}) => {
  const [count, setCount] = useState(PAGE_SIZE)

  return (
    <>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.slice(0, count).map((item) => (
          <li
            key={item.id}
            style={{
              alignItems: "baseline",
              borderBottom: "1px solid #e8e8e8",
              display: "flex",
              fontSize: ".9rem",
              gap: "1.5rem",
              padding: "1.25rem 0",
            }}
          >
            <span style={{ color: "#888", whiteSpace: "nowrap" }}>
              {item.date}
            </span>
            <a
              href={`${basePath}/news/${item.id}/`}
              style={{ color: "#333", textDecoration: "none" }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      {count < items.length && (
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button
            type="button"
            onClick={() => setCount(count + PAGE_SIZE)}
            style={{
              background: "none",
              border: "1px solid #ccc",
              borderRadius: "2rem",
              color: "#333",
              cursor: "pointer",
              fontSize: ".9rem",
              padding: ".75rem 2.5rem",
            }}
          >
            {moreLabel}
          </button>
        </div>
      )}
    </>
  )
}

export default NewsList
