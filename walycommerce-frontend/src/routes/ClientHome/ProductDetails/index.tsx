import ButtonInverse from '../../../components/ButtonInverse'
import ButtonPrimary from '../../../components/ButtonPrimary'
import ProductDetailsCard from '../../../components/ProductDetailsCard'
import './styles.css'

const ProductDetails = () => {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard></ProductDetailsCard>
        <div className="dsc-btn-page-container">
            <ButtonPrimary text="Compar"></ButtonPrimary>
            <ButtonInverse text="Início"></ButtonInverse>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails