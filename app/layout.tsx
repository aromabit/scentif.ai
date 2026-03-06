import { Title } from "components/elements/layout"
import HeaderNav from "components/elements/HeaderNav"
import "./reset.css"

export const metadata = {
  title: "Scentif.ai",
  description: "Page description",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "#fcfcfc",
            padding: "0 1rem",
            position: "sticky",
            top: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Title>
            <img
              src="/images/logo_1.png"
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
            padding: "1rem",
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
          <p>&copy; Scetif.ai</p>
        </footer>
      </body>
    </html>
  )
}
export default RootLayout
