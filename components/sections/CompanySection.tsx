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
  { role: "Founder & CEO", name: "Shunichiro Kuroki" },
  { role: "CTO", name: "Kazuaki Sawada, Ph.D. — Toyohashi University of Technology" },
  { role: "Technology Advisor & ex-CTO", name: "Kenichi Hashizume" },
]

const CompanySection: FC = () => (
  <section id="company">
    {/* Mission */}
    <div
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "5rem 1rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#33b9c5",
          marginBottom: "2.5rem",
        }}
      >
        Mission
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.75rem",
          fontSize: "1rem",
          lineHeight: 1.9,
          color: "#444",
        }}
      >
        <div>
          <p style={{ fontWeight: 600, color: "#111", marginBottom: ".25rem" }}>Imagine:</p>
          <p>
            &ldquo;Behavior &amp; Reactions of Humanoids with Nose over time vs. those
            without.&rdquo;
          </p>
        </div>
        <div>
          <p style={{ fontWeight: 600, color: "#111", marginBottom: ".25rem" }}>Ask:</p>
          <p>&ldquo;Why Nature created Nose?&rdquo;</p>
        </div>
        <div>
          <p style={{ fontWeight: 600, color: "#111", marginBottom: ".25rem" }}>Our Belief:</p>
          <p>
            b/c Nose is Efficient &amp; Critical-for-life &amp; Valuable &amp; Emotional!
          </p>
        </div>
        <div>
          <p style={{ fontWeight: 600, color: "#111", marginBottom: ".25rem" }}>
            Our Conclusion:
          </p>
          <p>Let us give the same sensory to AI.</p>
        </div>
        <p style={{ fontWeight: 700, color: "#111" }}>
          ScentifAI is on a mission to Naturalize AI thru Digital Olfaction innovation.
        </p>
      </div>
    </div>

    {/* Company */}
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "5rem 1rem",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#33b9c5",
            marginBottom: "2rem",
          }}
        >
          Company
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#111",
            marginBottom: ".75rem",
          }}
        >
          ScentifAI is Olfaction AI startup.
        </p>
        <p style={{ fontSize: ".9rem", color: "#888", marginBottom: "2rem" }}>
          formerly known as Aroma Bit, Inc.
        </p>

        <p style={{ fontSize: ".95rem", lineHeight: 1.9, color: "#555", marginBottom: "1.5rem" }}>
          It is a team mixed of industry experts in diverse fields of science, technology and
          business including five-sense computing, chemists/material scientists, multi-modal
          semiconductor sensors, electronics, full-stack AI Data engineers, working relentlessly
          to solve one of the biggest remaining technological challenge in the advent of
          Physical AI era:
        </p>

        <div
          style={{
            borderLeft: "3px solid #33b9c5",
            paddingLeft: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontWeight: 700, color: "#111", marginBottom: ".5rem" }}>
            Digitization of Scent / Olfaction
          </p>
          <p style={{ fontWeight: 700, color: "#111" }}>
            The Last Missing Sense in the Physical AI era
          </p>
        </div>

        <p style={{ fontSize: ".95rem", lineHeight: 1.9, color: "#555", marginBottom: "3rem" }}>
          We believe Olfaction AI uniquely addresses major pain points of Physical AI, including
          minimizing and improving the efficiency of ever-scarce computational resources, reducing
          the physical training costs to develop physical world foundation models, while enhancing
          data quality and diversity through the additional &ldquo;chemical perception&rdquo; input
          dimension to future devices and systems.
        </p>

        {/* Management */}
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#111",
            marginBottom: "1.25rem",
          }}
        >
          Management
        </h3>
        <ul
          style={{
            listStyle: "none",
            margin: "0 0 3rem",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: ".75rem",
          }}
        >
          {management.map((m) => (
            <li key={m.role} style={{ fontSize: ".9rem", color: "#333" }}>
              <span style={{ fontWeight: 600 }}>{m.role}</span> — {m.name}
            </li>
          ))}
        </ul>

        {/* Company Information */}
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#111",
            marginBottom: "1.25rem",
          }}
        >
          Company Information
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: ".9rem",
            marginBottom: "2rem",
          }}
        >
          <tbody>
            {[
              ["Company Name", "ScentiAI, Inc."],
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
                    padding: "1rem 1rem 1rem 0",
                    textAlign: "left",
                    fontWeight: 600,
                    width: "220px",
                    color: "#111",
                    verticalAlign: "top",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </th>
                <td style={{ padding: "1rem 0", color: "#555", lineHeight: 1.7 }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Partners */}
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#111",
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
                padding: ".3rem .75rem",
                fontSize: ".8rem",
                color: "#555",
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
              padding: ".3rem .75rem",
              fontSize: ".8rem",
              color: "#888",
              fontStyle: "italic",
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
