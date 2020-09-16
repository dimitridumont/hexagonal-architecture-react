import {Product} from "../../entities"

export interface IProductRepository {
    getProducts(): Promise<Array<Product>>
}