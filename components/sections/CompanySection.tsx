import { FC } from "react"
import { Locale, translations } from "lib/translations"

const CompanySection: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = translations[locale].company

  return (
    <section id="company">
      <div
        style={{
          margin: "0 auto",
          maxWidth: "720px",
          padding: "5rem 1rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#33b9c5",
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "2.5rem",
          }}
        >
          {t.missionTitle}
        </h2>
        <p style={{ color: "#111", fontWeight: 700, marginBottom: "1rem" }}>
          {t.missionStatement}
        </p>
        <div
          style={{
            color: "#444",
            display: "flex",
            flexDirection: "column",
            fontSize: "1rem",
            gap: "1.75rem",
            lineHeight: 1.9,
            textAlign: "left",
          }}
        >
          {t.missionBody.map(([caption, content]) => (
            <div key={caption}>
              <span
                style={{
                  color: "#111",
                  fontWeight: 600,
                  marginBottom: ".25rem",
                }}
              >
                {caption}
              </span>
              &nbsp; {content}
            </div>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "1000px",
            padding: "5rem 1rem",
          }}
        >
          <h2
            style={{
              color: "#33b9c5",
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "2rem",
            }}
          >
            {t.companyTitle}
          </h2>
          <p
            style={{
              color: "#111",
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: ".75rem",
            }}
          >
            {t.companySubtitle}
          </p>
          <p>
            {t.formerlyKnown}
            <a
              href="//aromabit.com"
              style={{
                color: "#888",
                fontSize: ".9rem",
                marginBottom: "2rem",
                textDecoration: "underline",
              }}
            >
              Aroma Bit, Inc.
            </a>
          </p>
          <p
            style={{
              color: "#555",
              fontSize: ".95rem",
              lineHeight: 1.9,
              marginBottom: "1.5rem",
            }}
          >
            {t.teamDesc}
          </p>
          <div
            style={{
              borderLeft: "3px solid #33b9c5",
              marginBottom: "2rem",
              paddingLeft: "1.5rem",
            }}
          >
            <p
              style={{ color: "#111", fontWeight: 700, marginBottom: ".5rem" }}
            >
              {t.digitization}
            </p>
            <p style={{ color: "#111", fontWeight: 700 }}>{t.lastSense}</p>
          </div>
          <p
            style={{
              color: "#555",
              fontSize: ".95rem",
              lineHeight: 1.9,
              marginBottom: "3rem",
            }}
          >
            {t.beliefDetail}
          </p>
          <h3
            style={{
              color: "#111",
              fontSize: "1rem",
              fontWeight: 700,
              marginBottom: "1.25rem",
            }}
          >
            {t.management}
          </h3>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".75rem",
              listStyle: "none",
              margin: "0 0 3rem",
              padding: 0,
            }}
          >
            {t.managements.map((m) => (
              <li key={m.role} style={{ color: "#333", fontSize: ".9rem" }}>
                <span style={{ fontWeight: 600 }}>{m.role}</span> — {m.name}
              </li>
            ))}
          </ul>
          <h3
            style={{
              color: "#111",
              fontSize: "1rem",
              fontWeight: 700,
              marginBottom: "1.25rem",
            }}
          >
            {t.companyInfo}
          </h3>
          <table
            style={{
              borderCollapse: "collapse",
              fontSize: ".9rem",
              marginBottom: "2rem",
              width: "100%",
            }}
          >
            <tbody>
              {t.companyInfoRows.map(([label, value]) => (
                <tr key={label} style={{ borderBottom: "1px solid #e8e8e8" }}>
                  <th
                    style={{
                      color: "#111",
                      fontWeight: 600,
                      padding: "1rem 1rem 1rem 0",
                      textAlign: "left",
                      verticalAlign: "top",
                      whiteSpace: "nowrap",
                      width: "220px",
                    }}
                  >
                    {label}
                  </th>
                  <td
                    style={{
                      color: "#555",
                      lineHeight: 1.7,
                      padding: "1rem 0",
                    }}
                  >
                    {value}
                  </td>
                </tr>
              ))}
              <tr style={{ borderBottom: "1px solid #e8e8e8" }}>
                <th
                  style={{
                    color: "#111",
                    fontWeight: 600,
                    padding: "1rem 1rem 1rem 0",
                    textAlign: "left",
                    verticalAlign: "top",
                    whiteSpace: "nowrap",
                    width: "220px",
                  }}
                >
                  {t.access}
                </th>
                <td
                  style={{ color: "#555", lineHeight: 1.7, padding: "1rem 0" }}
                >
                  <p>{t.headquarter}</p>
                  <p>{t.headquarterAddress}</p>
                  <p>{t.tel}</p>
                  <p>{t.numazuOffice}</p>
                  <p>{t.numazuAddress}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <h3
            style={{
              color: "#111",
              fontSize: "1rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            {t.partnersTitle}
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".5rem",
            }}
          >
            {t.partners.map((p) => (
              <span
                key={p}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  color: "#555",
                  fontSize: ".8rem",
                  padding: ".3rem .75rem",
                }}
              >
                {p}
              </span>
            ))}
            <span
              style={{
                fontSize: ".8rem",
                fontStyle: "italic",
                padding: ".3rem .75rem",
              }}
            >
              {t.andMore}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanySection
