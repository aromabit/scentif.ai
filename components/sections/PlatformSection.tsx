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
    {text}
  </li>
)

const PlatformSection: FC = () => (
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
        ScentifAI® is the Digital Olfaction AI Platform,
        <br />
        enabling Cross &amp;
        <br />
        Multi-modal Machine Learnings capabilities, including:
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
        {features.map((f) => (
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
        ….much more to come!
      </p>

      <p
        style={{
          color: "#555",
          fontSize: ".95rem",
          lineHeight: 1.9,
          marginBottom: "2rem",
        }}
      >
        Suitable for various applications such as physical AI, robotics,
        autonomous driving &amp; navigations, mobile &amp; wearables, industrial
        IoTs, where augmenting unique ambient / olfaction perception data stack
        contributing to differentiated and efficient intelligent systems.
      </p>

      <p style={{ color: "#555", fontSize: ".9rem" }}>
        Contact &nbsp;
        <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
          info@scentif.ai
        </a>
        &nbsp; for early access & detail.
      </p>
      <p style={{ color: "#888", fontSize: ".85rem", marginTop: ".5rem" }}>
        Currently available for corporate customers only.
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
          Invisible World of Aroma. &nbsp;
          <span style={{ color: "#33b9c5" }}>Visualized.</span>
        </p>

        <p
          style={{
            color: "#555",
            fontSize: ".95rem",
            lineHeight: 1.9,
            marginBottom: "3rem",
          }}
        >
          UUltra-high resolution, Realtime Lapse of Odor &ldquo;Fingerprint Image
          Pattern&rdquo; upon pure chemicals gas exposure to sensor
        </p>

        <img
          src="./images/visialize.png"
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
            "Ethyl Propionate​",
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
                src={`./images/visialize${i + 1}.gif`}
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
          Aroma Imaging Sensor [AIS]
        </h3>
        <p
          style={{
            color: "#555",
            fontSize: ".95rem",
            lineHeight: 1.9,
            marginBottom: "3rem",
          }}
        >
          Aroma Imaging Sensor converts analogue Smell/Odor Input as digital
          Video/Vision image pattern, similar to conventional vision image
          sensors or cameras on smartphone.
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
              image: "./images/ais1.png",
              label: "Odor",
              sub: "[Ambient Chemical World]",
            },
            { label: "→" },
            {
              image: "./images/ais2.png",
              label: "Odor Imaging Sensor",
              sub: "",
            },
            { label: "→" },
            {
              image: "./images/ais3.png",
              label: "Vision Data",
              sub: "[Image Pattern]",
            },
            { label: "+" },
            { image: "./images/ais4.png", label: "AI / ML", sub: "" },
            { label: "→" },
            { label: "Action / Reaction", sub: "" },
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
                  style={{ color: "#111", fontSize: ".9rem", fontWeight: 600 }}
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
          Aroma Imaging Sensor is the advanced e-nose sensor system platform,
          designed with standardized, compatible data format and architecture
          for scalable, standardized Olfaction machine learning for the
          first-time. Optimized to work with &nbsp;
          <a href="#scentifai" style={{ color: "#33b9c5" }}>
            ScentifAI
          </a>
          &nbsp; Olfaction AI Platform.
        </p>

        <div style={{ padding: "1rem" }}>
          <p
            style={{
              color: "#888",
              fontSize: ".8rem",
              fontWeight: 600,
              letterSpacing: ".08em",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            Key Specifications
          </p>
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
            {specs.map((s) => (
              <CheckItem key={s} text={s} />
            ))}
          </ul>
          <div>
            <img
              src="./images/spec1.png"
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
            AVAILABLE FOR POC
          </span>
          <p
            style={{
              color: "#111",
              fontSize: ".95rem",
              fontWeight: 600,
              marginBottom: ".75rem",
            }}
          >
            [For POC] 5C-SSM / SDK
          </p>
          <p style={{ color: "#555", fontSize: ".9rem", lineHeight: 1.8 }}>
            5C-SSM is easy-to-measure POC kit for customers who wish to try our
            CMOS e-nose systems to embed in their devices &amp; systems.
          </p>
        </div>

        <p style={{ color: "#555", fontSize: ".9rem" }}>
          Contact &nbsp;
          <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
            info@scentif.ai
          </a>
          &nbsp; for early access and detail.
        </p>
        <p style={{ color: "#888", fontSize: ".85rem", marginTop: ".5rem" }}>
          Currently Only Available for selected corporate customers only.
        </p>
      </div>
    </div>
  </section>
)

export default PlatformSection
