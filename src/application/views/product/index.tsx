import React from "react"
import {ProductModel} from "../../models"

interface IProps {
    product: ProductModel
}

export const ProductView = ({ product }: IProps) => (
    <li className={"product-item"}>
        <div className={"product-name"}>{product.name}</div>
        <div className={"product-description"}>{product.description}</div>
        <div className={"product-quantity"}>{product.quantity}</div>
    </li>
)