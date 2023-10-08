import editIcon from '../../../assets/edit.svg'
import deleteIcon from '../../../assets/delete.svg'
import './styles.css'
import { useEffect, useState } from 'react'
import { findPageRequest } from '../../../services/productService'
import { ProductDTO } from '../../../models/ProductModel'
import SearchBar from '../../../components/SearchBar'
import ButtonNextPage from '../../../components/ButtonNextPage'
import ModalAlert from '../../../components/ModalAlert'

type QueryParams = {
    page: number;
    name: string;
}

const ProductsList = () => {

    const [queryParams, setQueryParams] = useState<QueryParams>({page: 0, name: ""})
    const [products, setProducts] = useState<ProductDTO[]>()
    const [isLastPage, setIsLastPage] = useState(true)
    const [dialogInfoData, setDialogInfoData] = useState({visible: false, message: "Sucesso"})

    useEffect(()=>{
        findPageRequest(queryParams.page, queryParams.name, 10)
        .then(response => {
            const nextPage = response.data.content
            if(products){
                setProducts(products.concat(nextPage))
            }
            else{
                setProducts(nextPage)
            }
            setIsLastPage(response.data.last)
        })
    }, [queryParams])

    const handleSearch = (searchValue: string) => {
        setProducts([])
        setQueryParams({...queryParams, name: searchValue})
    }
    
    const onSetNextPage = () => {
        setQueryParams({...queryParams, page: (queryParams.page + 1)})
    }

    const handleClickDeleteClose = () => {
        setDialogInfoData({...dialogInfoData, visible: false})
    }

    const handleDeleteClick = () => {
        setDialogInfoData({...dialogInfoData, visible: true})
    }

  return (
    <main>
    <section id="product-listing-section" className="dsc-container">
      <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

      <div className="dsc-btn-page-container dsc-mb20">
        <div className="dsc-btn dsc-btn-white">Novo</div>
      </div>

      <SearchBar onsearchValue={(query) => handleSearch(query)}></SearchBar>

      <table className="dsc-table dsc-mb20 dsc-mt20">
        <thead>
          <tr>
            <th className="dsc-tb576">ID</th>
            <th></th>
            <th className="dsc-tb768">Preço</th>
            <th className="dsc-txt-left">Nome</th>
            <th></th>
            <th></th>  
          </tr>
        </thead>
        <tbody>
          {products && 
            products.map(item => (
            <tr key={item.id}>
            <td className="dsc-tb576">{item.id}</td>
            <td><img className="dsc-product-listing-image" src={item.imgUrl} alt={item.name}/></td>
            <td  className="dsc-tb768">R$ {item.price.toFixed(2)}</td>
            <td  className="dsc-txt-left">{item.name}</td>
            <td ><img className="dsc-product-listing-btn" src={editIcon} alt="Editar"/></td>
            <td ><img onClick={handleDeleteClick} className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar"/></td>
          </tr>
          ))}
        </tbody>
      </table>

      {isLastPage && <div onClick={onSetNextPage}><ButtonNextPage></ButtonNextPage></div>}
    </section>
    {
        dialogInfoData.visible &&
        <ModalAlert message={dialogInfoData.message} onDialogClose={handleClickDeleteClose}></ModalAlert>
    }
  </main>
  )
}

export default ProductsList