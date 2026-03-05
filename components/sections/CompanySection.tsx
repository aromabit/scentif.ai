import { FC } from "react"

const CompanySection: FC = () => (
  <section
    id="company"
    style={{ backgroundColor: "#f5f5f5" }}
  >
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
        Company
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              marginBottom: ".75rem",
              color: "#111",
            }}
          >
            Mission
          </h3>
          <p style={{ fontSize: ".9rem", lineHeight: 1.8, color: "#555" }}>
            To digitize smell — the last analog sense of humanity —
            and deliver new value to the world.
          </p>
        </div>

        <div>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              marginBottom: ".75rem",
              color: "#111",
            }}
          >
            Vision
          </h3>
          <p style={{ fontSize: ".9rem", lineHeight: 1.8, color: "#555" }}>
            To merge AI with olfactory sensing technology and bring
            scent intelligence to every domain — industry, healthcare, and everyday life.
          </p>
        </div>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: ".9rem",
          color: "#333",
        }}
      >
        <tbody>
          {[
            ["Company Name", "scentif.ai (Aromabit Inc.)"],
            ["Founded", "2023"],
            ["Business", "Development and provision of olfaction AI platforms"],
            ["Location", "Tokyo, Japan"],
          ].map(([label, value]) => (
            <tr
              key={label}
              style={{ borderBottom: "1px solid #e8e8e8" }}
            >
              <th
                style={{
                  padding: "1rem 0",
                  textAlign: "left",
                  fontWeight: 600,
                  width: "160px",
                  color: "#111",
                  verticalAlign: "top",
                }}
              >
                {label}
              </th>
              <td style={{ padding: "1rem 0", color: "#555" }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

export default CompanySection
