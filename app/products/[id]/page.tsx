import ProductArticle, {
  findProduct,
  productParams,
} from "components/sections/ProductArticle"

type Props = { params: Promise<{ id: string }> }

export const dynamicParams = false

export const generateStaticParams = () => productParams("en")

export const generateMetadata = async ({ params }: Props) => ({
  title: `${findProduct("en", (await params).id)?.title} | Scentif.ai`,
})

const ProductPage = async ({ params }: Props) => (
  <ProductArticle locale="en" id={(await params).id} />
)

export default ProductPage
