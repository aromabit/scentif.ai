import { FC } from "react"

const HeroSection: FC = () => (
  <section
    style={{
      alignItems: "center",
      backgroundColor: "#fcfcfc",
      backgroundImage: "url('./images/bg.png')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      gap: "1.5rem",
      justifyContent: "center",
      minHeight: "66dvh",
      padding: "2rem 1rem",
      textAlign: "center",
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
        color: "rgba(255,255,255,0.6)",
        fontSize: "clamp(2rem, 5vw, 2.5rem)",
        fontWeight: 700,
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
