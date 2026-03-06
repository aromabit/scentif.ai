type NewsPost = {
  id: number
  date: string
  title: { rendered: string }
  link: string
}

async function fetchNews(): Promise<NewsPost[]> {
  try {
    const res = await fetch("https://aromabit.com/wp-json/wp/v2/news?per_page=10&_fields=id,date,title,link", {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}.${m}.${day}`
}

const NewsSection = async () => {
  const news = await fetchNews()

  return (
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

        {news.length === 0 ? (
          <p style={{ fontSize: ".9rem", color: "#888" }}>No news available.</p>
        ) : (
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {news.map((item) => (
              <li
                key={item.id}
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
