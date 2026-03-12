import { FC } from "react"
import HeroSection from "components/sections/HeroSection"
import PlatformSection from "components/sections/PlatformSection"
import CompanySection from "components/sections/CompanySection"
import NewsSection from "components/sections/NewsSection"
import ContactSection from "components/sections/ContactSection"

const JaPage: FC = () => {
  return (
    <>
      <HeroSection locale="ja" />
      <PlatformSection locale="ja" />
      <CompanySection locale="ja" />
      <NewsSection locale="ja" />
      <ContactSection locale="ja" />
    </>
  )
}

export default JaPage
