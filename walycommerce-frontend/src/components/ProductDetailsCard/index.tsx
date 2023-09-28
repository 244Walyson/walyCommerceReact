import computerImg from '../../assets/computer.png'
import ProductCategory from '../ProductCategory'
import './styles.css'

const ProductDetailsCard = () => {

  const categories = [
    {
      id: 1,
      name: "Computadores"
    },
    {
      id: 2,
      name: "Eletrônicos"
    },
    {
      id: 3,
      name: "Importados"
    }
  ]
  return (
        <div className="dsc-card dsc-mb20">
          <div className="dsc-product-details-top dsc-line-bottom">
            <img src={computerImg} alt="Computador" />
          </div>
          <div className="dsc-product-details-bottom">
            <h3>R$ 5000,00</h3>
            <h4>Computador Gamer XT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="categories">
              {
                categories.map(item =>(
                  <ProductCategory key={item.id} name={item.name}></ProductCategory>
                ))
              }
            </div>
          </div>
        </div>
  )
}

export default ProductDetailsCard