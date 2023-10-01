import { useParams } from 'react-router-dom'
import ButtonInverse from '../../../components/ButtonInverse'
import ButtonPrimary from '../../../components/ButtonPrimary'
import ProductDetailsCard from '../../../components/ProductDetailsCard'
import './styles.css'
import { ProductDTO } from '../../../models/ProductModel'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { findById } from '../../../services/productService'

const ProductDetails = () => {

  const params = useParams()
  const [product, seProduct] = useState<ProductDTO>();

  useEffect(() => {
    findById(Number(params.productId))
    .then(response =>{
      seProduct(response.data)
    })
  }, [])

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