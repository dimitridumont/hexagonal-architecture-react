import {Product} from "../../entities"

export interface IAddProduct {
    addProduct(product: Product): Product
}