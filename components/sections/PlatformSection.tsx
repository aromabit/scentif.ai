import { FC } from "react"

const PlatformSection: FC = () => (
  <section id="platform">
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
          marginBottom: "2.5rem",
          color: "#111",
        }}
      >
        Olfaction AI Platform
      </h2>

      <div id="scentifai">
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#333",
            marginBottom: ".5rem",
          }}
        >
          <strong>ScentifAI®</strong> is the digital Olfaction AI Platform,
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#333",
            marginBottom: "2.5rem",
          }}
        >
          enabling Cross-modal, Multi-modal Platform Machine Learning,
        </p>

        <p
          style={{
            fontSize: ".85rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: ".05em",
            color: "#888",
            marginBottom: "1rem",
          }}
        >
          Key Features
        </p>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: ".75rem",
            marginBottom: "2rem",
          }}
        >
          {[
            "Aroma Imaging Sensor Hardware Platform",
            "Sensor Datasets / Database",
            "Sensor Data Analysis",
            "Olfaction Classification Deep Learning",
            "Multi-modal Learning",
          ].map((feature) => (
            <li
              key={feature}
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".75rem",
                fontSize: ".95rem",
                color: "#333",
              }}
            >
              <span
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  borderRadius: "4px",
                  border: "2px solid #33b9c5",
                  flexShrink: 0,
                }}
              />
              {feature}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: ".95rem", color: "#888", fontStyle: "italic" }}>
          … much more to come!
        </p>
      </div>

      <div
        id="aroma-imaging-sensor"
        style={{
          marginTop: "5rem",
          paddingTop: "4rem",
          borderTop: "1px solid #e8e8e8",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            color: "#111",
          }}
        >
          Aroma Imaging Sensor
        </h3>
        <p
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            lineHeight: 1.4,
            color: "#111",
            marginBottom: "2rem",
          }}
        >
          Invisible World of Aroma.{" "}
          <span style={{ color: "#33b9c5" }}>Visualized.</span>
        </p>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.9,
            color: "#555",
            maxWidth: "600px",
          }}
        >
          Ultra-high resolution, Realtime Lapse of Odor{" "}
          <em>&ldquo;Fingerprint Image Pattern&rdquo;</em>
          <br />
          upon pure chemicals gas exposure to sensor.
        </p>
      </div>
    </div>
  </section>
)

export default PlatformSection
