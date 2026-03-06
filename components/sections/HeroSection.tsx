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
      minHeight: "100dvh",
      textAlign: "center",
    }}
  >
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
      Naturalizing AI
      <br />
      thru Digital Olfaction
    </p>
  </section>
)

export default HeroSection
