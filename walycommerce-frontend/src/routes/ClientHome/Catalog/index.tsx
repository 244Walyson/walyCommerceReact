import HeaderClient from '../../../components/HeaderClient/Index'
import './styles.css'
import SearchBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'

const product: ProductDTO = {
    "id": 1,
    "name": "The Lord of the Rings",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 90.5,
    "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg",
    "categories": [
        {
            "id": 1,
            "name": "Livros"
        }
    ]
}

const Catalog = () => {
  return (
   <>
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar></SearchBar>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
        </div>
        <ButtonNextPage></ButtonNextPage>
      </section>
    </main>
   </>
  )
}

export default Catalog