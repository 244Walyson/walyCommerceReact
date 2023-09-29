import './styles.css'
import SearchBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'
import { ProductDTO } from '../../../models/ProductModel'
import { findAll } from '../../../Data/data'
import { Link } from 'react-router-dom'


const Catalog = () => {

  const product: ProductDTO[] = findAll()

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar></SearchBar>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {product && product.map((item)=>(
              <Link to={`/product-details/${item.id}`}><CatalogCard product={item} key={item.id}></CatalogCard></Link>
            ))}
        </div>
        <ButtonNextPage></ButtonNextPage>
      </section>
    </main>
  )
}

export default Catalog