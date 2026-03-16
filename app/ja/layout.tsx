export const metadata = {
  description: "ScentifAI®はデジタル嗅覚AIプラットフォームです。",
  openGraph: {
    description: "ScentifAI®はデジタル嗅覚AIプラットフォームです。",
    images: [
      {
        url: "https://scentif.ai/images/logo_1.png",
      },
    ],
    siteName: "Scentif.ai",
    title: "Scentif.ai",
    type: "website",
    url: "https://scentif.ai/ja/",
  },
  title: "Scentif.ai",
  twitter: {
    card: "summary_large_image",
    description: "ScentifAI®はデジタル嗅覚AIプラットフォームです。",
    images: ["https://scentif.ai/images/logo_1.png"],
    title: "Scentif.ai",
  },
}

const JaLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default JaLayout
