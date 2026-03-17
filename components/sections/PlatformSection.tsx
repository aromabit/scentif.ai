import { FC } from "react"
import { Locale, translations } from "lib/translations"

const CheckItem: FC<{ text: string }> = ({ text }) => (
  <li
    style={{
      alignItems: "flex-start",
      color: "#333",
      display: "flex",
      fontSize: ".95rem",
      gap: ".75rem",
      lineHeight: 1.6,
    }}
  >
    <span
      style={{
        border: "2px solid #33b9c5",
        borderRadius: "3px",
        flexShrink: 0,
        height: "1.1rem",
        marginTop: ".2rem",
        width: "1.1rem",
      }}
    />
    <div>
      {text.split("\n").map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  </li>
)

const PlatformSection: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = translations[locale].platform

  return (
    <section id="platform">
      <div
        id="scentifai"
        style={{
          margin: "0 auto",
          maxWidth: "1000px",
          padding: "5rem 1rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#111",
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "2rem",
          }}
        >
          ScentifAI<sup style={{ fontSize: "1rem" }}>®</sup>
        </h2>

        <p
          style={{
            color: "#444",
            fontSize: "1rem",
            lineHeight: 1.9,
            marginBottom: "2.5rem",
          }}
        >
          {t.description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < t.description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>

        <ul
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: ".75rem",
            listStyle: "none",
            margin: "0 auto 2.5rem",
            padding: 0,
            textAlign: "left",
          }}
        >
          {t.features.map((f) => (
            <CheckItem key={f} text={f} />
          ))}
        </ul>

        <p
          style={{
            color: "#888",
            fontSize: ".95rem",
            fontStyle: "italic",
            marginBottom: "3rem",
          }}
        >
          {t.moreComing}
        </p>

        <p
          style={{
            color: "#555",
            fontSize: ".95rem",
            lineHeight: 1.9,
            marginBottom: "2rem",
          }}
        >
          {t.appDescription}
        </p>

        <p style={{ color: "#555", fontSize: ".9rem" }}>
          Contact &nbsp;
          <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
            info@scentif.ai
          </a>
          &nbsp; {t.contactDetail}
        </p>
        <p style={{ color: "#888", fontSize: ".85rem", marginTop: ".5rem" }}>
          {t.corporateOnly}
        </p>
      </div>

      <div id="aroma-imaging-sensor" style={{ backgroundColor: "#f5f5f5" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "1000px",
            padding: "5rem 1rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#111",
              fontSize: "1.75rem",
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: "2rem",
            }}
          >
            {t.aromaSubheading} &nbsp;
            <span style={{ color: "#33b9c5" }}>{t.aromaVisualized}</span>
          </p>

          <p
            style={{
              color: "#555",
              fontSize: ".95rem",
              lineHeight: 1.9,
              marginBottom: "3rem",
            }}
          >
            {t.aromaDescription}
          </p>

          <img
            src="/images/visialize.png"
            style={{ width: "100%" }}
            alt="visialize"
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            {[
              "Benzene",
              "Ethyl Propionate\u200b",
              "Ethanol",
              "Acetone",
              "Ammonia",
            ].map((name, i) => (
              <div
                key={i}
                style={{
                  width: "20%",
                }}
              >
                <img
                  src={`/images/visialize${i + 1}.gif`}
                  alt={name}
                  style={{ width: "100%" }}
                />
              </div>
            ))}
          </div>
          <h3
            style={{
              color: "#111",
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            {t.aisTitle}
          </h3>
          <p
            style={{
              color: "#555",
              fontSize: ".95rem",
              lineHeight: 1.9,
              marginBottom: "3rem",
            }}
          >
            {t.aisDescription}
          </p>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                image: "/images/ais1.png",
                label: t.odorItems[0].label,
                sub: t.odorItems[0].sub,
              },
              { label: t.odorItems[1].label },
              {
                image: "/images/ais2.png",
                label: t.odorItems[2].label,
                sub: t.odorItems[2].sub,
              },
              { label: t.odorItems[3].label },
              {
                image: "/images/ais3.png",
                label: t.odorItems[4].label,
                sub: t.odorItems[4].sub,
              },
              { label: t.odorItems[5].label },
              {
                image: "/images/ais4.png",
                label: t.odorItems[6].label,
                sub: t.odorItems[6].sub,
              },
              { label: t.odorItems[7].label },
              { label: t.odorItems[8].label, sub: "" },
            ].map((item, i) =>
              item.sub == undefined ? (
                <span
                  key={i}
                  style={{
                    color: "#33b9c5",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </span>
              ) : (
                <div key={i} style={{ textAlign: "center" }}>
                  {item.image && !item.sub && (
                    <img
                      src={item.image}
                      alt={item.label}
                      style={{ padding: "1rem", width: "6rem" }}
                    />
                  )}
                  <div
                    style={{
                      color: "#111",
                      fontSize: ".9rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </div>
                  {item.sub && (
                    <div style={{ color: "#888", fontSize: ".75rem" }}>
                      {item.sub}
                    </div>
                  )}
                  {item.image && item.sub && (
                    <img
                      src={item.image}
                      alt={item.label}
                      style={{ padding: "1rem", width: "8rem" }}
                    />
                  )}
                </div>
              )
            )}
          </div>
          <p
            style={{
              color: "#555",
              fontSize: ".95rem",
              lineHeight: 1.9,
              marginBottom: "3rem",
            }}
          >
            {t.aisDescription2.split("\u00a0ScentifAI\u00a0").map((part, i) =>
              i === 0 ? (
                part
              ) : (
                <span key={i}>
                  &nbsp;
                  <a href="#scentifai" style={{ color: "#33b9c5" }}>
                    ScentifAI
                  </a>
                  &nbsp;
                  {part}
                </span>
              )
            )}
          </p>

          <div style={{ padding: "1rem" }}>
            <h3
              style={{
                color: "#111",
                fontSize: "1.75rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              {t.keySpecs}
            </h3>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                gap: ".75rem",
                listStyle: "none",
                margin: "0 auto 3rem",
                padding: 0,
                textAlign: "left",
              }}
            >
              {t.specs.map((s) => (
                <CheckItem key={s} text={s} />
              ))}
            </ul>
            <div>
              <img
                src="/images/spec1.png"
                alt="5C-SSM"
                style={{ maxWidth: "16rem", width: "100%" }}
              />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: "8px",
              marginBottom: "2rem",
              padding: "2rem",
            }}
          >
            <span
              style={{
                backgroundColor: "#f5c518",
                borderRadius: "4px",
                color: "#111",
                display: "inline-block",
                fontSize: ".75rem",
                fontWeight: 700,
                letterSpacing: ".08em",
                marginBottom: "1.25rem",
                padding: ".35rem .9rem",
              }}
            >
              {t.pocBadge}
            </span>
            <p
              style={{
                color: "#111",
                fontSize: ".95rem",
                fontWeight: 600,
                marginBottom: ".75rem",
              }}
            >
              {t.pocTitle} &nbsp;
              <a
                href="https://aromabit.com/en/products_datasolution-en/5c-ssm-cmos-en/"
                target="_blank"
                rel="noreferrer"
              >
                5C-SSM / SDK
              </a>
            </p>
            <p style={{ color: "#555", fontSize: ".9rem", lineHeight: 1.8 }}>
              {t.pocDescription}
            </p>
          </div>

          <p style={{ color: "#555", fontSize: ".9rem" }}>
            Contact &nbsp;
            <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
              info@scentif.ai
            </a>
            &nbsp; {t.contactEarlyAccess}
          </p>
          <p style={{ color: "#888", fontSize: ".85rem", marginTop: ".5rem" }}>
            {t.selectedOnly}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PlatformSection
