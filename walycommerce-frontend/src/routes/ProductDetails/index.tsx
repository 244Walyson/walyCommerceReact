import ButtonInverse from '../../components/ButtonInverse'
import ButtonPrimary from '../../components/ButtonPrimary'
import HeaderClient from '../../components/HeaderClient/Index'
import ProductDetailsCard from '../../components/ProductDetailsCard'
import './styles.css'

const ProductDetails = () => {
  return (
    <>
    <HeaderClient></HeaderClient>
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard></ProductDetailsCard>
        <div className="dsc-btn-page-container">
            <ButtonPrimary></ButtonPrimary>
            <ButtonInverse></ButtonInverse>
        </div>
      </section>
    </main>
    </>
  )
}

export default ProductDetails