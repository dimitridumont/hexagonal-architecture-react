import {IProductRepository} from "../domain/ports/secondaries"
import {Product} from "../domain/entities"

export class ProductRepository implements IProductRepository {
    async getProducts(): Promise<Array<Product>> {
        const res = await fetch("http://url")
        return res.json()
    }
}