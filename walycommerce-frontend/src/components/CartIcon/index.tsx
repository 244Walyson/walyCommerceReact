import './styles.css'
import cartIcon from '../../assets/cart.svg'
import { useContext } from 'react'
import { ContextCartCount } from '../../utils/context-cart'

const CartIcon = () => {

    const {contextCartCount} = useContext(ContextCartCount)
    console.log(contextCartCount)
  return (
    <div className="cart-icon">
        <img src={cartIcon} alt="Carrinho de compras" />
        <div className="cart-count">{contextCartCount}</div>
    </div>
  )
}

export default CartIcon