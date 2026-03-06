import { FC } from "react"

const specs = [
  "Ultra-high resolution [57,000 px]",
  "High gas sensitivity [100ppb NH3 / 10 ppt Ethanol]",
  "Low-cost, silicon CMOS based chip [under $10/chip upon mass production]",
  "On-chip ADC Circuitry & SPI Interface",
  "PKG 20-pin Connector / LGA for CHIP PKG to Board connection",
  "High-performance, receptor membrane material portfolio [20 available / 100+ developed]",
]

const features = [
  "Aroma Imaging Sensor Hardware Platform",
  "Sensor Datasets / Database",
  "Sensor Data Analysis",
  "Olfaction Classification Deep Learning",
  "Multi-modal Learning",
]

const CheckItem: FC<{ text: string }> = ({ text }) => (
  <li
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: ".75rem",
      fontSize: ".95rem",
      color: "#333",
      lineHeight: 1.6,
    }}
  >
    <span
      style={{
        width: "1.1rem",
        height: "1.1rem",
        borderRadius: "3px",
        border: "2px solid #33b9c5",
        flexShrink: 0,
        marginTop: ".2rem",
      }}
    />
    {text}
  </li>
)

const PlatformSection: FC = () => (
  <section id="platform">
    {/* ScentifAI */}
    <div
      id="scentifai"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "5rem 1rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "2rem",
          color: "#111",
        }}
      >
        ScentifAI<sup style={{ fontSize: "1rem" }}>®</sup>
      </h2>

      <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#444", marginBottom: "2.5rem" }}>
        ScentifAI<sup>®</sup> is the digital Olfaction AI Platform,
        <br />
        enabling
        <br />
        Cross-modal, Multi-modal Platform Machine Learning,
        <br />
        with key features including:
      </p>

      <ul
        style={{
          listStyle: "none",
          margin: "0 auto 2.5rem",
          padding: 0,
          display: "inline-flex",
          flexDirection: "column",
          gap: ".75rem",
          textAlign: "left",
        }}
      >
        {features.map((f) => (
          <CheckItem key={f} text={f} />
        ))}
      </ul>

      <p style={{ fontSize: ".95rem", color: "#888", fontStyle: "italic", marginBottom: "3rem" }}>
        ….much more to come!
      </p>

      <p style={{ fontSize: ".95rem", lineHeight: 1.9, color: "#555", marginBottom: "2rem" }}>
        Suitable for various applications including but not limited to humanoid robotics
        and autonomous driving &amp; navigations,
        where augmenting olfaction makes critical differences in reaction output or system
        performance derived from absence of potential data quality &amp; diversity
        that would have been derived from olfaction input data, during various learning processes,
        contributing to smarter, differentiated, and efficient system than competitor.
      </p>

      <p style={{ fontSize: ".9rem", color: "#555" }}>
        Contact{" "}
        <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
          info@scentif.ai
        </a>{" "}
        for earlier access detail.
      </p>
      <p style={{ fontSize: ".85rem", color: "#888", marginTop: ".5rem" }}>
        Currently available for corporate customers only.
      </p>
    </div>

    {/* Aroma Imaging Sensor */}
    <div
      id="aroma-imaging-sensor"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "5rem 1rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            color: "#111",
          }}
        >
          Aroma Imaging Sensor [AIS]
        </h3>

        <p
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            lineHeight: 1.4,
            marginBottom: "2rem",
            color: "#111",
          }}
        >
          Invisible World of Aroma.{" "}
          <span style={{ color: "#33b9c5" }}>Visualized.</span>
        </p>

        <p style={{ fontSize: ".95rem", lineHeight: 1.9, color: "#555", marginBottom: "3rem" }}>
          Ultra-high resolution, Realtime Lapse of Odor &ldquo;Fingerprint Image Pattern&rdquo;
          <br />
          upon pure chemicals gas exposure to sensor
        </p>

        {/* Flow diagram */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Odor", sub: "[Chemical World]" },
            { label: "→" },
            { label: "Odor Imaging Sensor", sub: "" },
            { label: "→" },
            { label: "Vision Data", sub: "[Image Pattern]" },
            { label: "+" },
            { label: "AI / ML", sub: "" },
          ].map((item, i) =>
            item.label === "→" || item.label === "+" ? (
              <span key={i} style={{ fontSize: "1.25rem", color: "#33b9c5", fontWeight: 700 }}>
                {item.label}
              </span>
            ) : (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: ".9rem", fontWeight: 600, color: "#111" }}>
                  {item.label}
                </div>
                {item.sub && (
                  <div style={{ fontSize: ".75rem", color: "#888" }}>{item.sub}</div>
                )}
              </div>
            )
          )}
        </div>

        <p style={{ fontSize: ".95rem", lineHeight: 1.9, color: "#555", marginBottom: "3rem" }}>
          Aroma Imaging Sensor converts analogue Smell/Odor Input as digital Video/Vision image
          pattern, similar to conventional vision image sensors or cameras on smartphone.
          <br /><br />
          Aroma Imaging Sensor is the advanced e-nose sensor system platform, designed with
          standardized, compatible data format and architecture for scalable, standardized
          Olfaction machine learning for the first-time, optimized to work with ScentifAI
          olfaction AI Platform.
        </p>

        {/* Key Specifications */}
        <p
          style={{
            fontSize: ".8rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: ".08em",
            color: "#888",
            marginBottom: "1rem",
          }}
        >
          Key Specifications
        </p>
        <ul
          style={{
            listStyle: "none",
            margin: "0 auto 3rem",
            padding: 0,
            display: "inline-flex",
            flexDirection: "column",
            gap: ".75rem",
            textAlign: "left",
          }}
        >
          {specs.map((s) => (
            <CheckItem key={s} text={s} />
          ))}
        </ul>

        {/* POC */}
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #e8e8e8",
            borderRadius: "8px",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#f5c518",
              color: "#111",
              fontSize: ".75rem",
              fontWeight: 700,
              letterSpacing: ".08em",
              padding: ".35rem .9rem",
              borderRadius: "4px",
              marginBottom: "1.25rem",
            }}
          >
            AVAILABLE FOR POC
          </span>
          <p style={{ fontSize: ".95rem", fontWeight: 600, color: "#111", marginBottom: ".75rem" }}>
            [For POC] 5C-SSM / SDK — IN PRODUCTION
          </p>
          <p style={{ fontSize: ".9rem", lineHeight: 1.8, color: "#555" }}>
            5C-SSM is an in-production POC kit for customers who wish to try our CMOS e-nose
            systems for their applications.
          </p>
        </div>

        <p style={{ fontSize: ".9rem", color: "#555" }}>
          Contact{" "}
          <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
            info@scentif.ai
          </a>{" "}
          for early access and detail.
        </p>
        <p style={{ fontSize: ".85rem", color: "#888", marginTop: ".5rem" }}>
          Currently Only Available for selected corporate customers only.
        </p>
      </div>
    </div>
  </section>
)

export default PlatformSection
