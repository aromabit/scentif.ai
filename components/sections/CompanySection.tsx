import { FC } from "react"

const partners = [
  "Anritsu Corporation",
  "Kyocera Corporation",
  "Sanyo Chemical Industries, Ltd.",
  "Sony Corporation",
  "DENTSU Inc.",
  "Toyota Boshoku Corporation",
  "West Japan Railway Company",
  "Japan Tobacco Inc.",
  "Panasonic Electric Works",
  "Meiji Holdings Co., Ltd",
  "Japan Manned Space Systems Corporation (JAMSS)",
  "LOTTE Co., Ltd",
]

const management = [
  { name: "Shunichiro Kuroki", role: "Founder & CEO" },
  {
    name: "Kazuaki Sawada, Ph.D. — Toyohashi University of Technology",
    role: "CTO",
  },
  { name: "Kenichi Hashizume", role: "Technology Advisor & ex-CTO" },
]

const CompanySection: FC = () => (
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
        Mission
      </h2>
      <p style={{ color: "#111", fontWeight: 700, marginBottom: "1rem" }}>
        ScentifAI is on a mission to Naturalize AI thru Digital Olfaction
        innovation.
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
        <div>
          <p
            style={{
              color: "#111",
              fontWeight: 600,
              marginBottom: ".25rem",
            }}
          >
            Ask:
          </p>
          <p>&ldquo;Why Nature created Nose?&rdquo;</p>
        </div>
        <div>
          <p style={{ color: "#111", fontWeight: 600, marginBottom: ".25rem" }}>
            Our Belief:
          </p>
          <p>
            b/c Nose is Efficient & Critical-for-life & Valuable & Emotional!
            learning organ to understand ambient world.
          </p>
        </div>
        <div>
          <p style={{ color: "#111", fontWeight: 600, marginBottom: ".25rem" }}>
            Our Conclusion:
          </p>
          <p>Let us give the same sensory to AI.</p>
        </div>
        <div>
          <p style={{ color: "#111", fontWeight: 600, marginBottom: ".25rem" }}>
            Imagine:
          </p>
          <p>
            &ldquo;Behavior &amp; reactions of humanoids: one with Nose vs.
            those without.&rdquo;
          </p>
        </div>
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
          Company
        </h2>

        <p
          style={{
            color: "#111",
            fontSize: "1.25rem",
            fontWeight: 700,
            marginBottom: ".75rem",
          }}
        >
          ScentifAI is Olfaction AI startup.
        </p>
        <a
          href="//aromabit.com"
          style={{ color: "#888", fontSize: ".9rem", marginBottom: "2rem" }}
        >
          formerly known as Aroma Bit, Inc.
        </a>

        <p
          style={{
            color: "#555",
            fontSize: ".95rem",
            lineHeight: 1.9,
            marginBottom: "1.5rem",
          }}
        >
          We are a team mixed of industry experts in diverse fields of science,
          technology and business, including: five-sense computing &amp;
          cognitive science, chemical &amp; material science, multi-modal solid
          state semiconductor sensors systems & electronics, full-stack AI Data
          engineers, global investments, business developments, working
          relentlessly to solve one of the biggest remaining technological
          challenge in the advent of Physical AI era:
        </p>

        <div
          style={{
            borderLeft: "3px solid #33b9c5",
            marginBottom: "2rem",
            paddingLeft: "1.5rem",
          }}
        >
          <p style={{ color: "#111", fontWeight: 700, marginBottom: ".5rem" }}>
            Digitization of Scent / Olfaction
          </p>
          <p style={{ color: "#111", fontWeight: 700 }}>
            The Last Missing Sense in the Physical AI era
          </p>
        </div>

        <p
          style={{
            color: "#555",
            fontSize: ".95rem",
            lineHeight: 1.9,
            marginBottom: "3rem",
          }}
        >
          We believe Olfaction AI uniquely addresses major pain points of
          Physical AI, including minimizing and improving the efficiency of
          ever-scarce computational resources, reducing the physical training
          costs to develop physical world foundation models, while enhancing
          data quality and diversity through the additional &ldquo;chemical
          perception&rdquo; input dimension to future devices and systems.
        </p>
        <h3
          style={{
            color: "#111",
            fontSize: "1rem",
            fontWeight: 700,
            marginBottom: "1.25rem",
          }}
        >
          Management
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
          {management.map((m) => (
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
          Company Information
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
            {[
              ["Company Name", "ScentifAI, Inc."],
              ["Representative Director & CEO", "Shunichiro Kuroki"],
              [
                "Main Bank",
                "Sumitomo Mitsui Banking Corporation / Resona Bank",
              ],
              [
                "Business Domain",
                "Development, Production and Sales of electronic equipments and systems including compact odor imaging sensors. Production, Development and Sales of innovative services using the Sensor products.",
              ],
            ].map(([label, value]) => (
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
                  style={{ color: "#555", lineHeight: 1.7, padding: "1rem 0" }}
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
                Access
              </th>
              <td style={{ color: "#555", lineHeight: 1.7, padding: "1rem 0" }}>
                <p>■Headquarter</p>
                <p>Sagami Bldg. 2F, 7-13-6 Ginza, Chuo-ku, Tokyo</p>
                <p>TEL. +81-3-4455-4609</p>
                <p>■Numazu Office</p>
                <p>18-9 Ichibacho, Numazu-shi, Shizuoka</p>
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
          Customers &amp; Business Partners
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".5rem",
          }}
        >
          {partners.map((p) => (
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
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              color: "#888",
              fontSize: ".8rem",
              fontStyle: "italic",
              padding: ".3rem .75rem",
            }}
          >
            and more…
          </span>
        </div>
      </div>
    </div>
  </section>
)

export default CompanySection
