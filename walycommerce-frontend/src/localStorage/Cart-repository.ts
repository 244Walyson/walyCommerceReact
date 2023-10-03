import { OrderDTO } from "../models/Order";

export function save(cart: OrderDTO){
    const str = JSON.stringify(cart);
    localStorage.setItem("com.waly.dscommerce/cart", str)
}

export function get(): OrderDTO{
    const str = localStorage.getItem("com.waly.dscommerce/cart") || '{"items"=[]}'
    return JSON.parse(str)
}