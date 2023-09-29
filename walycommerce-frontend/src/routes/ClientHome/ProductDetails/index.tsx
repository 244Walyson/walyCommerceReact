import { useParams } from 'react-router-dom'
import ButtonInverse from '../../../components/ButtonInverse'
import ButtonPrimary from '../../../components/ButtonPrimary'
import ProductDetailsCard from '../../../components/ProductDetailsCard'
import './styles.css'
import { findById } from '../../../Data/data'
import { ProductDTO } from '../../../models/ProductModel'
import { Link } from 'react-router-dom'

const ProductDetails = () => {

  const params = useParams()
  const product: ProductDTO | undefined = findById(Number(params.productId))
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product}></ProductDetailsCard>}
        <div className="dsc-btn-page-container">
            <ButtonPrimary text="Compar"></ButtonPrimary>
            <Link to={"/"}><ButtonInverse text="Início"></ButtonInverse></Link>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails