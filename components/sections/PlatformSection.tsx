import { FC } from "react"

const specs = [
  "Ultra-compact [1.2mm x 1.2mm sensor array area]",
  "Ultra-high resolution [57,000 px]",
  "High gas sensitivity [100ppb NH3 / 10 ppt Ethanol]",
  "High-performance, proprietary receptor membrane material portfolio",
  "Low-cost, silicon CMOS based chip [under $10/chip upon mass production]",
  "On-die ADC Circuitry & SPI Interface",
  "chip PKG w/ 20-pin Connector / LGA for CHIP PKG to Board connection",
]

const features = [
  "Sensor Dataset | Database Analysis",
  "Olfaction Classification Training /  Learning",
  "Customizable Ambient Sensing Applications/APIs",
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
    <div
      id="scentifai"
      style={{
        maxWidth: "1000px",
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

      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.9,
          color: "#444",
          marginBottom: "2.5rem",
        }}
      >
        ScentifAI® is the Digital Olfaction AI Platform,
        <br />
        enabling Cross &amp;
        <br />
        Multi-modal Machine Learnings capabilities, including:
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

      <p
        style={{
          fontSize: ".95rem",
          color: "#888",
          fontStyle: "italic",
          marginBottom: "3rem",
        }}
      >
        ….much more to come!
      </p>

      <p
        style={{
          fontSize: ".95rem",
          lineHeight: 1.9,
          color: "#555",
          marginBottom: "2rem",
        }}
      >
        Suitable for various applications such as physical AI, robotics,
        autonomous driving &amp; navigations, mobile &amp; wearables, industrial
        IoTs, where augmenting unique ambient / olfaction perception data stack
        contributing to differentiated and efficient intelligent systems.
      </p>

      <p style={{ fontSize: ".9rem", color: "#555" }}>
        Contact &nbsp;
        <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
          info@scentif.ai
        </a>
        &nbsp; for early access & detail.
      </p>
      <p style={{ fontSize: ".85rem", color: "#888", marginTop: ".5rem" }}>
        Currently available for corporate customers only.
      </p>
    </div>

    <div id="aroma-imaging-sensor" style={{ backgroundColor: "#f5f5f5" }}>
      <div
        style={{
          maxWidth: "1000px",
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
          Invisible World of Aroma. &nbsp;
          <span style={{ color: "#33b9c5" }}>Visualized.</span>
        </p>

        <p
          style={{
            fontSize: ".95rem",
            lineHeight: 1.9,
            color: "#555",
            marginBottom: "3rem",
          }}
        >
          UUltra-high resolution, Realtime Lapse of Odor “Fingerprint Image
          Pattern” upon pure chemicals gas exposure to sensor
        </p>

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
            {
              label: "Odor",
              sub: "[Ambient Chemical World]",
              image: "./images/ais1.png",
            },
            { label: "→" },
            {
              label: "Odor Imaging Sensor",
              sub: "",
              image: "./images/ais2.png",
            },
            { label: "→" },
            {
              label: "Vision Data",
              sub: "[Image Pattern]",
              image: "./images/ais3.png",
            },
            { label: "+" },
            { label: "AI / ML", sub: "", image: "./images/ais4.png" },
            { label: "→" },
            { label: "Action / Reaction", sub: "" },
          ].map((item, i) =>
            item.sub == undefined ? (
              <span
                key={i}
                style={{
                  fontSize: "1.25rem",
                  color: "#33b9c5",
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
                  style={{ fontSize: ".9rem", fontWeight: 600, color: "#111" }}
                >
                  {item.label}
                </div>
                {item.sub && (
                  <div style={{ fontSize: ".75rem", color: "#888" }}>
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
            fontSize: ".95rem",
            lineHeight: 1.9,
            color: "#555",
            marginBottom: "3rem",
          }}
        >
          Aroma Imaging Sensor converts analogue Smell/Odor Input as digital
          Video/Vision image pattern, similar to conventional vision image
          sensors or cameras on smartphone.
          <br />
          <br />
          Aroma Imaging Sensor is the advanced e-nose sensor system platform,
          designed with standardized, compatible data format and architecture
          for scalable, standardized Olfaction machine learning for the
          first-time. Optimized to work with &nbsp;
          <a href="#scentifai" style={{ color: "#33b9c5" }}>
            ScentifAI
          </a>
          &nbsp; Olfaction AI Platform.
        </p>

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
          <p
            style={{
              fontSize: ".95rem",
              fontWeight: 600,
              color: "#111",
              marginBottom: ".75rem",
            }}
          >
            [For POC] 5C-SSM / SDK
          </p>
          <p style={{ fontSize: ".9rem", lineHeight: 1.8, color: "#555" }}>
            5C-SSM is easy-to-measure POC kit for customers who wish to try our
            CMOS e-nose systems to embed in their devices &amp; systems.
          </p>
        </div>

        <p style={{ fontSize: ".9rem", color: "#555" }}>
          Contact &nbsp;
          <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
            info@scentif.ai
          </a>
          &nbsp; for early access and detail.
        </p>
        <p style={{ fontSize: ".85rem", color: "#888", marginTop: ".5rem" }}>
          Currently Only Available for selected corporate customers only.
        </p>
      </div>
    </div>
  </section>
)

export default PlatformSection
