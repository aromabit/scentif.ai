import ProductArticle, {
  findProduct,
  productParams,
} from "components/sections/ProductArticle"

type Props = { params: Promise<{ id: string }> }

export const dynamicParams = false

export const generateStaticParams = () => productParams("ja")

export const generateMetadata = async ({ params }: Props) => ({
  title: `${findProduct("ja", (await params).id)?.title} | Scentif.ai`,
})

const JaProductPage = async ({ params }: Props) => (
  <ProductArticle locale="ja" id={(await params).id} />
)

export default JaProductPage
