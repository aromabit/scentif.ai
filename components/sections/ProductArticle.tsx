import { FC } from "react"
import { Locale, translations } from "lib/translations"
import productsData from "lib/products.json"
import newsData from "lib/news.json"
import NewsContent from "components/elements/NewsContent"

export const findProduct = (locale: Locale, id: string) =>
  productsData[locale].find((item) => item.id === id)

export const productParams = (locale: Locale) =>
  productsData[locale].map((item) => ({ id: item.id }))

const ProductArticle: FC<{ locale: Locale; id: string }> = ({ locale, id }) => {
  const t = translations[locale].products
  const item = findProduct(locale, id)
  if (!item) return null
  const base = locale === "ja" ? "/ja" : ""
  const cases = newsData[locale].filter((news) => item.cases.includes(news.id))

  return (
    <article
      style={{
        margin: "0 auto",
        maxWidth: "960px",
        padding: "5rem 1rem",
      }}
    >
      <h2
        style={{
          color: "#111",
          fontSize: "1.75rem",
          fontWeight: 700,
          marginBottom: "3rem",
        }}
      >
        {item.title}
      </h2>
      <img
        src={item.image}
        alt=""
        style={{ display: "block", margin: "0 auto 2rem", maxWidth: "100%" }}
      />
      <NewsContent html={item.content} />
      {cases.length > 0 && (
        <>
          <h3 style={{ color: "#111", fontSize: "1.25rem", marginTop: "3rem" }}>
            {t.cases(item.title)}
          </h3>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.25rem" }}>
            {cases.map((news) => (
              <li key={news.id} style={{ padding: ".25rem 0" }}>
                <a href={`${base}/news/${news.id}/`} style={{ color: "#06c" }}>
                  {news.title}
                </a>{" "}
                <span style={{ color: "#888", fontSize: ".85rem" }}>
                  {news.date}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
      <p style={{ marginTop: "3rem" }}>
        <a href={`${base}/#contact`} style={{ color: "#06c" }}>
          {t.inquire(item.title)}
        </a>
      </p>
      <p style={{ marginTop: "2rem" }}>
        <a href={`${base}/products/`}>← {t.back}</a>
      </p>
    </article>
  )
}

export default ProductArticle
