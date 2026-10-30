import { FC } from "react"
import { Locale, translations } from "lib/translations"
import newsData from "lib/news.json"

export const findNews = (locale: Locale, id: string) =>
  newsData[locale].find((item) => String(item.id) === id)

export const newsParams = (locale: Locale) =>
  newsData[locale].map((item) => ({ id: String(item.id) }))

const NewsArticle: FC<{ locale: Locale; id: string }> = ({ locale, id }) => {
  const t = translations[locale].news
  const item = findNews(locale, id)
  if (!item) return null

  return (
    <article
      style={{
        margin: "0 auto",
        maxWidth: "960px",
        padding: "5rem 1rem",
      }}
    >
      <p style={{ color: "#888", fontSize: ".9rem" }}>{item.date}</p>
      <h2
        style={{
          color: "#111",
          fontSize: "1.75rem",
          fontWeight: 700,
          margin: ".5rem 0 3rem",
        }}
      >
        {item.title}
      </h2>
      {"image" in item && (
        <img
          src={item.image}
          alt=""
          style={{ display: "block", margin: "0 auto 2rem", maxWidth: "100%" }}
        />
      )}
      <div
        className="news-content"
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
      <p style={{ marginTop: "4rem" }}>
        <a href={locale === "ja" ? "/ja/#news" : "/#news"}>← {t.back}</a>
      </p>
    </article>
  )
}

export default NewsArticle
