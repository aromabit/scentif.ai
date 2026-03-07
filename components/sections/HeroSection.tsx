import { FC } from "react"

const HeroSection: FC = () => (
  <section
    style={{
      alignItems: "center",
      backgroundColor: "#fcfcfc",
      backgroundImage: "url('./images/bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      minHeight: "66dvh",
      textAlign: "center",
      flexWrap: "wrap",
      flexDirection: "column",
      gap: "1.5rem",
      padding: "2rem 1rem",
    }}
  >
    <img
      src="./images/icon.png"
      alt="icon"
      style={{
        opacity: 0.66,
        width: "33dvh",
      }}
    />
    <p
      style={{
        fontSize: "clamp(2rem, 5vw, 2.5rem)",
        fontWeight: 700,
        color: "rgba(255,255,255,0.6)",
        letterSpacing: "-.01em",
        lineHeight: 1.25,
        maxWidth: "80%",
        padding: "0 1rem",
      }}
    >
      Naturalizing AI through Digital Olfaction
    </p>
  </section>
)

export default HeroSection
