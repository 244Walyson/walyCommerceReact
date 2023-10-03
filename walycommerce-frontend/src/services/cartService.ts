import { OrderDTO } from "../models/Order";
import * as cartRepository from '../localStorage/Cart-repository'

export function save(cart: OrderDTO){
    cartRepository.save(cart)
}

export function getCart(): OrderDTO{
    return cartRepository.get()
}