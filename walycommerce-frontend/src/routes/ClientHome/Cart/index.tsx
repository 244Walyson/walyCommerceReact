import { OrderDTO } from '../../../models/Order'
import * as cartService from '../../../services/cartService'
import './styles.css'
import { useState } from 'react'


const Cart = () => {
    const [cart, setCart] = useState<OrderDTO>(cartService.getCart())
    console.log(cart)
    return (
        <main>
            <section id="cart-container-section" className="dsc-container">
                {
                    cart?.items.length == 0 ?
                        <div>
                            <h2 className='dsc-section-title dsc-mb20'>Seu carrinho está vazio</h2>
                        </div>
                        :
                        <>
                            <div className="dsc-card dsc-mb20">
                                {cart.items.map(item => (
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
                                            R$ {item.subTotal.toFixed(2)}                            </div>
                                    </div>
                                ))}
                                <div className="dsc-cart-total-container">
                                    <h3>R$ {cart.total.toFixed(2)}</h3>
                                </div>
                            </div>
                        </>
                }
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