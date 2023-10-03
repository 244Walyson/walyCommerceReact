import { OrderDTO, OrderItemDTO } from "../models/Order";
import * as cartRepository from '../localStorage/Cart-repository'
import { ProductDTO } from "../models/ProductModel";

export function save(cart: OrderDTO){
    cartRepository.save(cart)
}

export function getCart(): OrderDTO{
    return cartRepository.get()
}

export function addProduct(product: ProductDTO){
    const cart = cartRepository.get()
    const item = cart.items.find(x => x.productId === product.id)
    if(!item){
        const newItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl)
        cart.items.push(newItem)
        cartRepository.save(cart)
    }
}