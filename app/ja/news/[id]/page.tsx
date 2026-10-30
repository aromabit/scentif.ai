import NewsArticle, {
  findNews,
  newsParams,
} from "components/sections/NewsArticle"

type Props = { params: Promise<{ id: string }> }

export const dynamicParams = false

export const generateStaticParams = () => newsParams("ja")

export const generateMetadata = async ({ params }: Props) => ({
  title: `${findNews("ja", (await params).id)?.title} | Scentif.ai`,
})

const JaNewsPage = async ({ params }: Props) => (
  <NewsArticle locale="ja" id={(await params).id} />
)

export default JaNewsPage
