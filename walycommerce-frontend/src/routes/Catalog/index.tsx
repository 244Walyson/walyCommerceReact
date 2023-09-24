import HeaderClient from '../../components/HeaderClient/Index'
import './styles.css'
import SearchBar from '../../components/SearchBar'
import CatalogCard from '../../components/CatalogCard'
import ButtonNextPage from '../../components/ButtonNextPage'

const Catalog = () => {
  return (
   <>
    <HeaderClient></HeaderClient>
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar></SearchBar>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard></CatalogCard>
            <CatalogCard></CatalogCard>
            <CatalogCard></CatalogCard>
            <CatalogCard></CatalogCard>
            <CatalogCard></CatalogCard>
        </div>
        <ButtonNextPage></ButtonNextPage>
      </section>
    </main>
   </>
  )
}

export default Catalog