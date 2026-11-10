import { FC } from "react"
import { Locale, translations } from "lib/translations"
import productsData from "lib/products.json"

const ProductCard: FC<{
  base: string
  item: (typeof productsData)["en"][number]
  viewMore: string
}> = ({ base, item, viewMore }) => (
  <li>
    <a
      href={`${base}/products/${item.id}/`}
      style={{ color: "#333", display: "block", textDecoration: "none" }}
    >
      <img
        src={item.image}
        alt=""
        style={{ aspectRatio: "16 / 10", objectFit: "cover", width: "100%" }}
      />
      <h4 style={{ color: "#111", fontSize: "1.1rem", margin: "1rem 0 .5rem" }}>
        {item.title}
      </h4>
      <p style={{ fontSize: ".9rem", lineHeight: 1.7 }}>{item.summary}</p>
      <p style={{ color: "#06c", fontSize: ".85rem", marginTop: ".75rem" }}>
        {viewMore} →
      </p>
    </a>
  </li>
)

const Group: FC<{
  base: string
  heading: string
  items: (typeof productsData)["en"]
  lead: string
  sub?: string
  viewMore: string
  note: string
}> = ({ base, heading, items, lead, sub, viewMore, note }) => (
  <div style={{ marginTop: "4rem" }}>
    <h3 style={{ color: "#111", fontSize: "1.5rem", fontWeight: 700 }}>
      {heading}
    </h3>
    {sub && <p style={{ fontWeight: 700, marginTop: ".5rem" }}>{sub}</p>}
    <p style={{ lineHeight: 1.8, marginTop: ".5rem" }}>{lead}</p>
    <p style={{ color: "#888", fontSize: ".85rem" }}>{note}</p>
    <ul
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        listStyle: "none",
        margin: "2rem 0 0",
        padding: 0,
      }}
    >
      {items.map((item) => (
        <ProductCard
          key={item.id}
          base={base}
          item={item}
          viewMore={viewMore}
        />
      ))}
    </ul>
  </div>
)

const ProductsSection: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = translations[locale].products
  const items = productsData[locale]
  const base = locale === "ja" ? "/ja" : ""

  return (
    <section
      style={{ margin: "0 auto", maxWidth: "960px", padding: "5rem 1rem" }}
    >
      <h2 style={{ color: "#111", fontSize: "2rem", fontWeight: 700 }}>
        {t.title}
      </h2>
      <p style={{ lineHeight: 1.8, marginTop: "1rem" }}>{t.lead}</p>
      <Group
        base={base}
        heading={t.platform}
        items={items.filter((item) => item.category === "platform")}
        lead={t.platformLead}
        viewMore={t.viewMore}
        note={t.corporateOnly}
      />
      <Group
        base={base}
        heading={t.sensor}
        sub={t.sensorSub}
        items={items.filter((item) => item.category === "sensor")}
        lead={t.sensorLead}
        viewMore={t.viewMore}
        note={t.corporateOnly}
      />
    </section>
  )
}

export default ProductsSection
