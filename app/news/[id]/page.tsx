import NewsArticle, {
  findNews,
  newsParams,
} from "components/sections/NewsArticle"

type Props = { params: Promise<{ id: string }> }

export const dynamicParams = false

export const generateStaticParams = () => newsParams("en")

export const generateMetadata = async ({ params }: Props) => ({
  title: `${findNews("en", (await params).id)?.title} | Scentif.ai`,
})

const NewsPage = async ({ params }: Props) => (
  <NewsArticle locale="en" id={(await params).id} />
)

export default NewsPage
