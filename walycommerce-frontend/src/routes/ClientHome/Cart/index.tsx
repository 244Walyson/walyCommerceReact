import { OrderDTO, OrderItemDTO } from '../../../models/Order'
import * as cartService from '../../../services/cartService'
import './styles.css'
import { useEffect, useState } from 'react'

const item1 : OrderItemDTO = new OrderItemDTO(
    4, 1, 'pc gamer', 1200, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
)
const item2 : OrderItemDTO = new OrderItemDTO(
    5, 2, "Rails for damies", 100.99, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
)


const Cart = () => {
    const [cart, setCart] = useState<OrderDTO | undefined>(cartService.getCart())
    return (
        <main>
            <section id="cart-container-section" className="dsc-container">
                <div className="dsc-card dsc-mb20">
                    {cart && cart.items.map(item => (
                        <div className="dsc-cart-item-container dsc-line-bottom" key={item.productId}>
                            <div className="dsc-cart-item-left">
                                <img src={item.imgUrl} alt={item.name} />
                                <div className="dsc-cart-item-description">
                                    <h3>{item.name}</h3>
                                    <div className="dsc-cart-item-quantity-container">
                                        <div className="dsc-cart-item-quantity-btn">-</div>
                                        <p>{item.quantity}</p>
                                        <div className="dsc-cart-item-quantity-btn">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="dsc-cart-item-right">
                                R$ {item.price * item.quantity}
                            </div>
                        </div>
                    ))}
                    <div className="dsc-cart-total-container">
                        <h3>R$ 15000,00</h3>
                    </div>
                </div>
                <div className="dsc-btn-page-container">
                    <div className="dsc-btn dsc-btn-blue">
                        Finalizar pedido
                    </div>
                    <div className="dsc-btn dsc-btn-white">
                        Continuar comprando
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Cart