import { FC } from "react"

const HeroSection: FC = () => (
  <section
    style={{
      alignItems: "center",
      backgroundColor: "#fcfcfc",
      backgroundImage: "url('/images/bg.png')",
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
        fontSize: "1.1rem",
        color: "#888",
        letterSpacing: ".05em",
      }}
    >
      Naturalizing AI thru Digital Olfaction
    </p>
  </section>
)

export default HeroSection
