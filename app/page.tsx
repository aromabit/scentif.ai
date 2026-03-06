import { FC } from "react"
import HeroSection from "components/sections/HeroSection"
import PlatformSection from "components/sections/PlatformSection"
import CompanySection from "components/sections/CompanySection"
import NewsSection from "components/sections/NewsSection"
import ContactSection from "components/sections/ContactSection"

const Page: FC = () => {
  return (
    <>
      <HeroSection />
      <PlatformSection />
      <CompanySection />
      <NewsSection />
      <ContactSection />
    </>
  )
}

export default Page
