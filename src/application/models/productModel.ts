export class ProductModel {
    id: number
    name: string
    description: string
    quantity: number

    constructor(id: number, name: string, description: string, quantity: number) {
        this.id         = id
        this.name       = name
        this.description = description
        this.quantity   = quantity
    }
}