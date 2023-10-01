import './styles.css'
import SearchBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'
import { ProductDTO } from '../../../models/ProductModel'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Catalog = () => {

  const [product, setProducts] = useState<ProductDTO[]>()
  const [page, setPage] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:8080/products?page="+ page)
    .then(response =>{
      setProducts(response.data.content)
    })
  }, [])

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar></SearchBar>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {product && product.map((item) => (
            <Link to={`/product-details/${item.id}`}><CatalogCard product={item} key={item.id}></CatalogCard></Link>
          ))}
        </div>
        <div onClick={() => setPage(page + 1)}><ButtonNextPage></ButtonNextPage></div>
      </section>
    </main>
  )
}

export default Catalog