"use client"

import { FC, useEffect, useState } from "react"
import { Locale, translations } from "lib/translations"

type NewsPost = {
  id: number
  date: string
  title: { rendered: string }
  link: string
}

const formatDate = (dateStr: string): string => {
  const d = new Date(dateStr)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}.${m}.${day}`
}

const NewsSection: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = translations[locale].news
  const [news, setNews] = useState<NewsPost[]>([])

  useEffect(() => {
    fetch(
      "https://aromabit.com/wp-json/wp/v2/news?news_cat=23,32,35,129&per_page=10&_fields=id,date,title,link"
    )
      .then((res) => (res.ok ? res.json() : []))
      .then(setNews)
      .catch(() => {})
  }, [])

  return (
    <section id="news">
      <div
        style={{
          margin: "0 auto",
          maxWidth: "960px",
          padding: "5rem 1rem",
        }}
      >
        <h2
          style={{
            color: "#111",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "3rem",
          }}
        >
          {t.title}
        </h2>

        {news.length === 0 ? (
          <p style={{ color: "#888", fontSize: ".9rem" }}>{t.noNews}</p>
        ) : (
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {news.map((item) => (
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
                  {formatDate(item.date)}
                </span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#333", textDecoration: "none" }}
                  dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default NewsSection
