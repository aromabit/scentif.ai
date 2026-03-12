import { GoogleAnalytics } from "@next/third-parties/google"
import { Title } from "components/elements/layout"
import HeaderNav from "components/elements/HeaderNav"
import "./reset.css"

export const metadata = {
  description: "ScentifAI® is the Digital Olfaction AI Platform.",
  title: "Scentif.ai",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            alignItems: "center",
            backgroundColor: "#fcfcfc",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "0 1rem",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <Title>
            <img
              src="./images/logo_2.png"
              alt="Logo"
              style={{ height: "3rem", marginRight: "0.5rem" }}
            />
          </Title>
          <HeaderNav />
        </header>
        <main
          style={{
            background: "#fcfcfc",
            minHeight: "calc(100dvh - 5.625rem)",
          }}
        >
          {children}
        </main>
        <footer
          style={{
            backgroundColor: "#fcfcfc",
            fontSize: ".75rem",
            padding: "1rem",
          }}
        >
          <p>&copy; scentifai</p>
        </footer>
      </body>
      <GoogleAnalytics gaId="G-DGFG6T25WJ" />
    </html>
  )
}
export default RootLayout
