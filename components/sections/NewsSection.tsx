import { FC } from "react"

const news = [
  {
    date: "2025.03.01",
    category: "Press Release",
    title: "Aroma Imaging Sensor mass production model announced",
  },
  {
    date: "2025.01.15",
    category: "News",
    title: "ScentifAI v2.0 released — significant improvement in identification accuracy",
  },
  {
    date: "2024.11.20",
    category: "Press Release",
    title: "Joint proof-of-concept study launched with leading food manufacturer",
  },
  {
    date: "2024.09.05",
    category: "News",
    title: "scentif.ai completes Series A funding round",
  },
]

const NewsSection: FC = () => (
  <section id="news">
    <div
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "5rem 1rem",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "3rem",
          color: "#111",
        }}
      >
        News
      </h2>

      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {news.map((item) => (
          <li
            key={item.title}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1.5rem",
              padding: "1.25rem 0",
              borderBottom: "1px solid #e8e8e8",
              fontSize: ".9rem",
            }}
          >
            <span style={{ color: "#888", whiteSpace: "nowrap" }}>
              {item.date}
            </span>
            <span
              style={{
                backgroundColor: "#eef6f7",
                color: "#33b9c5",
                fontSize: ".75rem",
                padding: ".2rem .6rem",
                borderRadius: "4px",
                whiteSpace: "nowrap",
              }}
            >
              {item.category}
            </span>
            <span style={{ color: "#333" }}>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default NewsSection
