import  { AxiosRequestConfig } from 'axios'
import { requestBackend } from '../utils/requests'
import { ProductDTO } from '../models/ProductModel'

export function findPageRequest(page: number, name: string, size = 12, sort = "name"){
    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/products",
        params: {
            page,
            name,
            size,
            sort,
        }
    }
    return requestBackend(config)
}

export function findById(id: number){
    return requestBackend({url: `/products/${id}`})
}

export function deleteById(id: number){
    const config = {
        method: "DELETE",
        url: `/products/${id}`,
        withCredentials: true
    }
    return requestBackend(config)
}

export function updateProduct(id: number, product: ProductDTO){
    const config = {
        method: "PUT",
        url: `/products/${id}`,
        data: product,
        withCredentials: true
    }
    return requestBackend(config)
}

export function createProduct(product: ProductDTO){
    const config = {
        method: "POST",
        url: `/products`,
        data: product,
        withCredentials: true
    }
    return requestBackend(config);
}

export function getCategories(){
    const config = {
        url: "/categories",
    }
    return requestBackend(config)
}