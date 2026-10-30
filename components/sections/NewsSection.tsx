import { FC } from "react"
import { Locale, translations } from "lib/translations"
import newsData from "lib/news.json"
import NewsList from "components/elements/NewsList"

const NewsSection: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = translations[locale].news
  const news = newsData[locale].map(({ date, id, title }) => ({
    date,
    id,
    title,
  }))

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

        <NewsList
          items={news}
          basePath={locale === "ja" ? "/ja" : ""}
          moreLabel={t.more}
        />
      </div>
    </section>
  )
}

export default NewsSection
