import { FC } from "react"
import legal from "lib/legal.json"

// Migrated from aromabit.com/privacy-policy/, which only has Japanese text
const LegalSection: FC<{ page: keyof typeof legal }> = ({ page }) => (
  <article
    style={{ margin: "0 auto", maxWidth: "960px", padding: "3rem 1rem 5rem" }}
  >
    <div
      className="news-content"
      dangerouslySetInnerHTML={{ __html: legal[page] }}
    />
  </article>
)

export default LegalSection
